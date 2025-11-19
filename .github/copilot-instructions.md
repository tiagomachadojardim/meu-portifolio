# Instruções para Agentes de IA - Portfólio Next.js

## Visão Geral da Arquitetura

Este é um portfólio pessoal moderno construído com **Next.js 15 (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS**. A aplicação segue um padrão de arquitetura baseada em componentes com separação clara de responsabilidades.

## Estrutura Principal

### Layout e Providers
- **Layout raiz**: `src/app/layout.tsx` - configuração global com fonte Rubik e metadados
- **ClientProviders**: `src/components/providers/ClientProviders.tsx` - envolve theme provider e layout principal
- **MainLayout**: `src/components/layouts/MainLayout.tsx` - estrutura base com menu, conteúdo e footer

### Sistema de Tema
- **Hook customizado**: `src/hooks/use-theme.tsx` - gerencia tema claro/escuro com persistência no localStorage
- **Toggle de tema**: implementado no `SimpleMenu` com ícones react-icons (BsMoonStars/BsSun)
- **Configuração Tailwind**: classe `dark:` utilizada globalmente, darkMode configurado como 'class'

### Dados e Tipos
- **Tipagem centralizada**: `src/types/index.ts` - define interfaces para Work, Service, Experience, etc.
- **Dados estáticos**: `src/data/` contém arrays exportados (works.ts, services.ts, experiences.ts)
- **Estrutura de Work**: inclui id, title, category, thumbnailUrl, description, images[], previewUrl, featureList[], attributes[]

### Componentes Reutilizáveis
- **Formulários**: `src/components/form/` - Input, Textarea, Button com estilos consistentes
- **Seções**: `src/components/partials/` - componentes de seção da homepage (HeroSection, AboutSection, WorksSection, etc.)
- **Menu responsivo**: `SimpleMenu.tsx` usa Headless UI Dialog para mobile sidebar

### Páginas e Roteamento
- **Homepage**: `src/app/page.tsx` - seções empilhadas sequencialmente
- **Páginas dedicadas**: `/works`, `/blog`, `/contact` com navegação "Voltar ao Início"
- **Layout de página Works**: grid responsivo com filtros por categoria (All, Web Development, Mobile App, UI/UX Design)

## Padrões de Desenvolvimento

### Componentes
- **'use client'** obrigatório para componentes com estado, eventos ou hooks
- **Framer Motion** para animações - padrão `initial/animate/transition` com `whileInView` para scroll
- **Next.js Image** componente usado consistentemente com width/height específicos
- **React Icons** biblioteca padrão (Fi*, Bs*, Hi* prefixos)

### Estilos e Design System
- **Cores primárias**: configuradas em tailwind.config.ts com escala primary-50 a primary-900 (cor base: ff4c60)
- **Responsividade**: mobile-first com breakpoints xs(475px), sm, md, lg, xl, 2xl
- **Container**: classe Tailwind padrão para centralização de conteúdo
- **Dark mode**: sempre implementar classes `dark:` para compatibilidade com tema

### Estado e Interatividade
- **Filtros**: useState para categoria ativa em WorksSection (padrão: 'All')
- **Modais**: Headless UI Dialog para menus mobile e modais
- **Scroll**: react-scroll-to-top com ícone FiArrowUp customizado

## Comandos Essenciais

```bash
# Desenvolvimento com Turbopack (mais rápido)
npm run dev

# Build de produção
npm run build

# Linting
npm run lint
```

## Convenções Específicas

### Nomenclatura de Arquivos
- Componentes: PascalCase com .tsx (ex: HeroSection.tsx)
- Dados: camelCase com .ts (ex: works.ts, services.ts)
- Hooks: use-kebab-case.tsx (ex: use-theme.tsx)

### Estrutura de Dados
- **Works**: sempre incluir category para filtros, thumbnailUrl para listagem, images[] para detalhes
- **Attributes**: array de {name, value} para metadados de projetos
- **FeatureList**: array de strings para características do projeto

### Animações
- Usar `viewport={{ once: true }}` para animações que devem ocorrer apenas uma vez
- Padrão de delay: `transition={{ duration: 0.8 }}` para suavidade
- Container animations: `initial={{ opacity: 0, y: 20 }}` seguido de `animate={{ opacity: 1, y: 0 }}`

## Dependências Chave
- **@headlessui/react**: componentes acessíveis (Dialog, Transition)
- **framer-motion**: animações e transições
- **classnames**: concatenação condicional de classes CSS
- **react-intersection-observer**: detecção de scroll para animações

## Customização Rápida
- **Dados pessoais**: editar arrays em `src/data/`
- **Cores**: modificar escala primary em `tailwind.config.ts`
- **Avatar**: substituir `public/images/avatar/man.png`
- **Projetos**: adicionar ao array `works` com imagens em `public/images/works/`