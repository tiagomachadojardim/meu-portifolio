# 🚀 Meu Portfólio

Um portfólio pessoal moderno e responsivo construído com Next.js 15, React 19 e Tailwind CSS. Este projeto apresenta uma interface elegante com tema claro/escuro, animações suaves e design responsivo.

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface limpa e profissional
- 🌙 **Tema Claro/Escuro**: Toggle de tema com persistência no localStorage
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🎭 **Animações Suaves**: Transições e efeitos visuais com Framer Motion
- 🔗 **Navegação Intuitiva**: Menu responsivo com indicadores de página ativa
- 📧 **Formulário de Contato**: Seção de contato funcional
- 🎯 **Scroll Suave**: Navegação suave entre seções
- 🚀 **Performance Otimizada**: Next.js 15 com Turbopack para builds rápidos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.5.4** - Framework React com App Router
- **React 19.1.0** - Biblioteca de interface de usuário
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 3.4** - Framework CSS utilitário
- **Framer Motion 12.23** - Biblioteca de animações

### Componentes e UI
- **Headless UI 2.2** - Componentes acessíveis
- **React Icons 5.5** - Ícones SVG
- **React Scroll to Top 3.1** - Botão de scroll
- **React Intersection Observer 9.16** - Detecção de scroll

### Desenvolvimento
- **ESLint 9** - Linting de código
- **Prettier 3.6** - Formatação de código
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
│           ├── ecommerce.png
│           ├── work-01.png
│           ├── work-02.png
│           └── portfolio-website.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── works/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── form/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Textarea.tsx
│   │   ├── layouts/
│   │   │   └── MainLayout.tsx
│   │   ├── partials/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── SimpleMenu.tsx
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
├── tailwind.config.ts
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

1. **Hero Section** - Apresentação principal com avatar e links sociais
2. **Sobre Mim** - Informações pessoais e estatísticas
3. **Trabalhos** - Grid de projetos com filtros por categoria
4. **Serviços** - Lista de serviços oferecidos
5. **Contato** - Formulário de contato e informações

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Netlify
1. Build: `npm run build`
2. Publish directory: `out` (se usando export estático)

### Outros
- **Docker**: Configure Dockerfile para containerização
- **VPS**: Use PM2 para gerenciamento de processos

## 🔧 Configurações Avançadas

### Turbopack
O projeto usa Turbopack para builds mais rápidos:
```bash
npm run dev --turbopack
```

### PWA (Opcional)
Para transformar em Progressive Web App, adicione:
- `next-pwa`
- Manifest.json
- Service Worker

### Analytics (Opcional)
Integre Google Analytics ou outras ferramentas:
- Google Analytics 4
- Vercel Analytics
- Hotjar

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como base para seu próprio portfólio.

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Contato

- **Email**: [seu-email@exemplo.com]
- **LinkedIn**: [seu-linkedin]
- **GitHub**: [seu-github]

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**