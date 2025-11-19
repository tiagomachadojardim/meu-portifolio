# Instruções para Agentes de IA - Portfólio Next.js

## Visão Geral da Arquitetura

**Landing page/portfólio 100% estático** construído com **Next.js 15 App Router + React 19 + TypeScript**. Configurado para **export estático** (`output: "export"`) - sem Node.js runtime, sem API routes, sem backend. Deployável em qualquer CDN/hosting estático (GitHub Pages, Vercel, Netlify). A arquitetura prioriza **composição de componentes**, **providers para estado global**, e **dados tipados em arquivos TypeScript**.

### Fluxo de Renderização Crítico
```
layout.tsx (SSR) 
  → ClientProviders ('use client')
    → ThemeProvider (gerencia tema via Context)
      → MainLayout (SimpleMenu + children + Footer)
        → page.tsx (seções empilhadas)
```

**Por quê?** `suppressHydrationWarning` no `<html>` é necessário porque o tema é aplicado via classe `dark` no `documentElement` durante hidratação no cliente (evita flash de tema incorreto).

## Sistema de Tema - Implementação Específica

**`src/hooks/use-theme.tsx`** implementa enum `Theme.LIGHT | Theme.DARK` com:
- Context API (não Redux/Zustand)
- Persistência: `localStorage.setItem('theme', ...)` 
- Aplicação: `document.documentElement.classList.add/remove('dark')`
- Leitura inicial no useEffect (evita SSR mismatch)

**Padrão obrigatório**: Sempre incluir classes `dark:text-*` e `dark:bg-*` em novos componentes. Tailwind `darkMode: 'class'` requer essa abordagem.

## Dados Estáticos & Tipos

**Fonte única de verdade**: `src/data/*.ts` → exporta arrays tipados
- `works.ts`: Work[] com `category` (usado para filtros), `attributes[]`, `featureList[]`
- `services.ts`: Service[] com `name`, `description`, `image`
- `experiences.ts`: Experience[] com datas e descrições

**Tipos centralizados**: `src/types/index.ts`
```typescript
Work {
  id: number
  category: string  // usado em filtros: 'Web Development' | 'Mobile App' | 'UI/UX Design'
  attributes: {name: string, value: string | number}[]  // metadados exibidos
  featureList: string[]  // lista de bullets
}
```

**Ao adicionar projetos**: Sempre inclua `category` existente (filtros dependem disso) e adicione imagens em `public/images/works/`.

## Animações com Framer Motion

**Padrão universal** em componentes de seção (`*Section.tsx`):
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}  // IMPORTANTE: anima só na primeira view
  transition={{ duration: 0.8 }}
>
```

**Por quê `viewport={{ once: true }}`?** Performance - evita recalcular animações em scroll repetido. Usado em 100% das seções do projeto.

## Componentes & Client Boundaries

**Regra**: Componentes com estado/eventos/hooks **requerem** `'use client'` no topo.
- `SimpleMenu.tsx`: gerencia sidebar mobile (Headless UI Dialog) e tema toggle
- `*Section.tsx`: todos usam Framer Motion → todos são `'use client'`
- `page.tsx`: composição pura → pode ser Server Component

**Headless UI Dialog** padrão para modals:
```tsx
<Dialog open={sidebarOpen} onClose={setSidebarOpen}>
  <Transition.Child enter="transition-opacity ease-linear duration-300" ...>
    {/* overlay */}
  </Transition.Child>
</Dialog>
```

## Navegação & Roteamento

**Homepage**: Seções empilhadas com IDs para scroll (e.g., `#about`, `#contact`)
**Links internos**: `<Link href="/#about">` para scroll suave na mesma página
**Páginas dedicadas**: `/works`, `/cv` (com navegação "Voltar ao Início")
**Formulário de contato**: Apenas visual/UI - não há backend para processar envios. Links sociais (WhatsApp, email) são a forma real de contato.

## Estilos & Design System

**Cores primárias**: Escala `primary-{50-900}` em `tailwind.config.ts` - base `#ff4c60` (vermelho/rosa)
**Breakpoints custom**: `xs: 475px` (único não-padrão do Tailwind)
**Fonte**: Rubik via `next/font/google` com CSS variable `--font-rubik`

**Padrões de classe comuns**:
- Container: `container mx-auto px-4 md:px-6` (centralização responsiva)
- Hover em links: `hover:text-primary-500 hover:scale-110 transition-all duration-150`
- Dark mode texto: `text-gray-900 dark:text-white` ou `text-gray-600 dark:text-gray-400`

## Desenvolvimento & Build

```bash
npm run dev      # Turbopack dev server (mais rápido que webpack)
npm run build    # Build estático (output: export)
npm run lint     # ESLint (configurado para ignorar builds)
```

**next.config.ts importante**:
- `output: "export"` → gera site estático puro (HTML/CSS/JS), deployável em qualquer hosting
- `images.unoptimized: true` → necessário para export estático (sem otimização de imagem server-side)
- `eslint.ignoreDuringBuilds: true` & `typescript.ignoreBuildErrors: true` → projeto pessoal, prioriza agilidade

⚠️ **Sem capacidades de backend**: Não há processamento server-side, APIs ou banco de dados. Todo conteúdo vem de `src/data/*.ts`.

## SEO & Metadados

**`src/app/layout.tsx`**: 
- `metadata` exportado com Open Graph + Twitter Cards
- `metadataBase` usa `NEXT_PUBLIC_SITE_URL` env variable
- Structured data: `<Script id="jsonld-person">` com schema.org Person

**robots.ts & sitemap.ts**: Gerados dinamicamente (App Router conventions)

## Customização Rápida - Checklist

1. **Dados pessoais**: Editar `src/data/*.ts` (works, services, experiences)
2. **Cores**: Modificar `primary-*` em `tailwind.config.ts`
3. **Avatar**: Substituir `public/images/avatar/man.png`
4. **Links sociais/contato**: Atualizar URLs em `HeroSection.tsx` e `ContactSection.tsx`
5. **Metadata SEO**: Editar `src/app/layout.tsx`
6. **Categorias de projetos**: Garantir consistência entre `works.ts` e filtros em `WorksSection.tsx`
7. **Deploy**: `npm run build` gera pasta `out/` → upload para qualquer static hosting
