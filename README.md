# 🚀 Portfólio Tiago Jardim

Portfólio pessoal moderno e responsivo construído com Next.js 15, React 19 e Tailwind CSS. Interface elegante com tema claro/escuro, animações suaves e design totalmente responsivo.

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface limpa e profissional com gradientes e animações
- 🌙 **Tema Claro/Escuro**: Toggle de tema com persistência no localStorage
- 📱 **Totalmente Responsivo**: Mobile-first, funciona perfeitamente em todos os dispositivos
- 🎭 **Animações Suaves**: Transições e efeitos visuais com Framer Motion
- 🔗 **Navegação Intuitiva**: Menu responsivo com indicadores de página ativa
- 📊 **Métricas Dinâmicas**: Indicadores profissionais calculados automaticamente dos dados
- 🎯 **Scroll Suave**: Navegação suave entre seções com botão flutuante
- 🚀 **Performance Otimizada**: Next.js 15 com build estático para máxima performance
- 🔍 **SEO Otimizado**: Meta tags, JSON-LD e Open Graph configurados

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.5.4** - Framework React com App Router e export estático
- **React 19.1.0** - Biblioteca de interface de usuário
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 3.4** - Framework CSS utilitário com darkMode por classe
- **Framer Motion 12.23** - Biblioteca de animações

### Componentes e UI
- **Headless UI 2.2** - Componentes acessíveis
- **React Icons 5.5** - Ícones SVG (Feather Icons e Simple Icons)
- **React Scroll to Top 3.1** - Botão de scroll flutuante customizado
- **React Intersection Observer 9.16** - Detecção de scroll para animações

### Desenvolvimento
- **ESLint 9** - Linting de código
- **PostCSS 8.5** - Processamento CSS
- **Autoprefixer 10.4** - Prefixos CSS automáticos

## 📁 Estrutura do Projeto

```
meu-portfolio/
├── public/
│   └── images/
│       ├── avatar/
│       │   └── man.png
│       └── works/
│           ├── pulmoscan_saas.png
│           ├── pulmoscan_app.jpg
│           ├── pulmogame.jpg
│           ├── pulmoflow_saas.jpg
│           ├── pulmoflow_app.jpg
│           ├── pediatria_saas.jpg
│           └── bientech.jpg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── works/
│   │       └── page.tsx
│   ├── components/
│   │   ├── form/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Textarea.tsx
│   │   ├── layouts/
│   │   │   ├── MainLayout.tsx
│   │   │   └── AppLayout.tsx
│   │   ├── partials/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── LiveProjectsSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── SimpleMenu.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── TechStackSection.tsx
│   │   │   └── WorksSection.tsx
│   │   └── providers/
│   │       └── ClientProviders.tsx
│   ├── data/
│   │   ├── experiences.ts
│   │   ├── services.ts
│   │   └── works.ts
│   ├── hooks/
│   │   └── use-theme.tsx
│   └── types/
│       └── index.ts
├── .github/
│   └── copilot-instructions.md
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd meu-portfolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

### Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack (mais rápido)
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

## 🎨 Personalização

### Cores
As cores primárias podem ser alteradas em `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    "500": "#ff4c60", // Cor principal
    "600": "#e64456", // Hover
    // ...
  }
}
```

### Conteúdo
- **Dados pessoais**: Edite `src/data/` para atualizar informações
- **Projetos**: Modifique `src/data/works.ts` para seus projetos
- **Serviços**: Ajuste `src/data/services.ts` para seus serviços
- **Experiências**: Atualize `src/data/experiences.ts` para seu histórico

### Imagens
- **Avatar**: Substitua `public/images/avatar/man.png`
- **Projetos**: Adicione suas imagens em `public/images/works/`

## 📱 Seções do Portfólio

1. **Hero Section** - Apresentação principal com avatar e links sociais (GitHub, LinkedIn, WhatsApp, Bientech, Email)
2. **Sobre Mim** - Jornada profissional, formação acadêmica e métricas dinâmicas (projetos em produção, anos de experiência, em desenvolvimento, integrações)
3. **Projetos em Destaque** - Grid de projetos principais com thumbnails e badges de status
4. **Stack Tecnológico** - Tecnologias e ferramentas utilizadas
5. **Indicadores Profissionais** - Métricas calculadas dinamicamente (produção, desenvolvimento, experiência, arquitetura, dedicação, integrações)
6. **Serviços** - Lista de serviços oferecidos (Web, Mobile, SaaS, Consultoria)
7. **Contato** - Cards clicáveis com canais de comunicação (Email, WhatsApp, GitHub, LinkedIn, Instagram, Bientech)
8. **Página Works** - Catálogo completo de projetos com filtros por categoria e status

## 🎨 Personalização

### Cores Primárias
Cores podem ser alteradas em `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    "50": "#fff1f3",
    "100": "#ffe0e5",
    // ...
    "500": "#ff4c60", // Cor principal
    "600": "#e64456", // Hover
    // ...
  }
}
```

### Conteúdo Dinâmico
Todo conteúdo é gerenciado através de arquivos TypeScript em `src/data/`:

- **works.ts**: Projetos com atributos (Status, Tecnologias, Tipo), thumbnails e descrições
- **experiences.ts**: Histórico profissional (Bientech 2024-Presente, Freelance 2020-2024)
- **services.ts**: Serviços oferecidos com ícones e descrições

**Métricas calculadas automaticamente:**
- Anos de experiência: Calculado a partir da data mais antiga em `experiences.ts`
- Projetos em produção/desenvolvimento: Filtrados por Status em `works.ts`
- Integrações: API + Bluetooth (baseado nos projetos)

### Imagens
- **Avatar**: `public/images/avatar/man.png`
- **Projetos**: `public/images/works/[nome-projeto].{png,jpg}`
  - Recomendado: 800x600px, formato otimizado para web

### Links Sociais
Atualize URLs em:
- `HeroSection.tsx`: Links principais do topo
- `ContactSection.tsx`: Cards de contato
- `layout.tsx`: Schema JSON-LD para SEO

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/tiagomachadojardim/meu-portfolio.git
cd meu-portfolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção (gera export estático)
npm run build

# Preview do build local
npx serve@latest out

# Linting
npm run lint
```

## 🌐 Deploy

### Configuração de Export Estático
O projeto está configurado para export estático em `next.config.ts`:
```typescript
output: 'export',
images: { unoptimized: true }
```

### Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Deploy automático a cada push
3. Preview deployments para cada PR

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`

### GitHub Pages
1. Build: `npm run build`
2. Deploy pasta `out/` para branch `gh-pages`

### Hospedagem Tradicional
Faça upload da pasta `out/` para qualquer servidor web estático (Apache, Nginx, etc.)

## 🔧 Recursos Implementados

### ✅ Tema Claro/Escuro
- Hook customizado `use-theme.tsx`
- Persistência com localStorage
- Transições suaves entre temas
- DarkMode via classe Tailwind

### ✅ Responsividade Mobile-First
- Breakpoints: mobile (base) → sm (640px) → md (768px) → lg (1024px)
- Grid adaptativo em todas as seções
- Menu mobile com overlay
- Cards 1 coluna no mobile, 2-3 colunas em telas maiores

### ✅ Animações com Framer Motion
- Fade in ao entrar no viewport
- Slide lateral em seções alternadas
- Hover effects nos cards
- Transições suaves de página

### ✅ SEO e Acessibilidade
- Meta tags otimizadas (Open Graph, Twitter Card)
- JSON-LD Schema para Person
- Semantic HTML
- ARIA labels em links e botões
- Navegação por teclado

### ✅ Botão Scroll-to-Top Customizado
- Ícone âncora (FiAnchor)
- Aparece após scroll
- Fundo translúcido com backdrop-blur
- Z-index alto (z-50) para ficar sobre todos os elementos

## 📝 Ajustes Recentes

### Novembro 2025
- ✅ Removido link CV do menu
- ✅ Simplificados cards de projetos (sem overlays, botões "Ver Detalhes" ou links externos)
- ✅ Adicionadas badges de status e tecnologias nos cards
- ✅ Substituídas imagens dos projetos por thumbnails reais
- ✅ Atualizado `works.ts` com projetos reais (PulmoScan, PulmoFlow, PulmoGame, Pediatria EHR)
- ✅ Redesenhada seção de métricas com indicadores dinâmicos
- ✅ Removido uptime; adicionados: arquitetura multi-tenant, dedicação, integrações
- ✅ Fixado anos de experiência para cálculo dinâmico (5 anos desde 2020)
- ✅ Reduzidos tamanhos de ícones/números nos cards de métricas
- ✅ Atualizada URL do LinkedIn para `linkedin.com/in/tiagojardim-tech`
- ✅ Alterado ícone do botão flutuante para âncora com cor visível
- ✅ Elevado z-index do botão (z-50) para ficar acima de todos os cards
- ✅ Substituída seção de contato: removido formulário, criados cards clicáveis
- ✅ Adicionado Instagram (@tiago.machado.jardim) aos canais de contato
- ✅ Cards da seção Sobre ajustados: 1 coluna mobile, 2 colunas a partir de sm

## 🔒 Informações Críticas

⚠️ **Site 100% Estático**: 
- Não há backend, API routes ou processamento server-side em produção
- Formulário de contato removido (aguardando integração futura com Resend/SendGrid)
- Todos os dados vêm de arquivos TypeScript estáticos

⚠️ **Imagens Unoptimized**: 
- `next/image` configurado com `unoptimized: true` para export estático
- Otimize imagens manualmente antes de adicionar (TinyPNG, Squoosh, etc.)

## 📞 Contato

- **Email**: tiagomachadojardim@gmail.com
- **LinkedIn**: [linkedin.com/in/tiagojardim-tech](https://www.linkedin.com/in/tiagojardim-tech)
- **GitHub**: [github.com/tiagomachadojardim](https://github.com/tiagomachadojardim)
- **Instagram**: [@tiago.machado.jardim](https://instagram.com/tiago.machado.jardim)
- **WhatsApp**: (53) 99705-4143
- **Site Bientech**: [bientech.com.br](https://bientech.com.br)

---

⭐ **Desenvolvido por Tiago Jardim | Fundador da Bientech**