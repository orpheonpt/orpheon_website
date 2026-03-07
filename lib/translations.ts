export const translations = {
  pt: {
    // Header
    nav: {
      home: "Início",
      services: "Serviços",
      projects: "Projetos",
      pricing: "Preços",
      process: "Processo",
      faq: "FAQ",
      contact: "Contacto",
      bookCall: "Marcar chamada",
    },
    // Hero
    hero: {
      badge1: "Entrega rápida",
      badge2: "Mensalidade previsível",
      badge3: "Performance e segurança",
      title: "O teu negócio merece um site",
      titleHighlight: "rápido, bonito",
      titleEnd: "e feito para converter.",
      subtitle: 'Eu crio websites e plataformas à medida — e trato da manutenção mensal para nunca ficares "sem IT".',
      cta1: "Pedir orçamento",
      cta2: "Ver projetos",
      stack: "Trabalho com",
      stackEnd: "e integrações com APIs.",
    },
    // Services
    services: {
      title: "Serviços",
      titleMuted: "(sem complicar)",
      subtitle: "Escolhes o objetivo. Eu trato do resto — do design ao código, do deploy à manutenção.",
      cta: "Quero isto",
      items: [
        {
          title: "Websites Profissionais",
          description: "Landing pages e sites institucionais com foco em conversão.",
          features: [
            "Landing pages e sites institucionais",
            "Foco em conversão (contactos, leads, marcações)",
            "Otimizados para mobile e velocidade",
          ],
        },
        {
          title: "Lojas Online",
          description: "E-commerce completo com todos os módulos necessários.",
          features: [
            "Catálogo, carrinho, pagamentos",
            "Integrações com envios e faturação",
            "Gestão de stock automatizada",
          ],
        },
        {
          title: "Plataformas e Backoffices",
          description: "Sistemas de gestão interna personalizados.",
          features: [
            "Gestão interna (clientes, reservas, stocks)",
            "Autenticação e permissões",
            "Dashboards e relatórios",
          ],
        },
        {
          title: "Integrações & Automações",
          description: "Conecta sistemas e automatiza processos.",
          features: ["APIs e formulários avançados", "Emails transacionais", "Automação de tarefas repetitivas"],
        },
        {
          title: "Manutenção & Evolução",
          description: "Acompanhamento contínuo do teu projeto.",
          features: ["Correções, melhorias, segurança", "Backups regulares", "Suporte e acompanhamento mensal"],
        },
      ],
    },
    // Target Audience
    targetAudience: {
      title: "Ideal para…",
      items: [
        "Clínicas e saúde",
        "Imobiliárias",
        "Serviços locais premium (estúdios, ginásios, estética)",
        "Consultores e negócios B2B",
        "PMEs sem equipa de IT",
      ],
    },
    // Benefits
    benefits: {
      title: "O que ganhas com isto",
      items: [
        {
          title: "Mais leads",
          description: "Formulários e CTAs bem colocados para converter visitantes em clientes.",
        },
        {
          title: "Site rápido",
          description: "Performance otimizada e SEO técnico para melhor posicionamento.",
        },
        {
          title: "Sem dores de cabeça",
          description: "Manutenção contínua — eu trato de tudo para tu focares no negócio.",
        },
        {
          title: "Escalável",
          description: "Base preparada para crescer e evoluir para plataforma completa.",
        },
      ],
    },
    // Projects
    projects: {
      title: "Projetos",
      subtitle: "Alguns trabalhos (ou protótipos) que mostram como eu penso e construo.",
      filterAll: "Todos",
      filterWebsites: "Websites",
      filterStores: "Lojas",
      filterPlatforms: "Plataformas",
      caseStudy: "Caso de estudo",
      openDemo: "Abrir demo",
      viewAll: "Ver todos os projetos",
      wantProject: "Quero um projeto destes",
    },
    // Process
    process: {
      title: "Processo simples",
      steps: [
        {
          number: "01",
          title: "Diagnóstico",
          subtitle: "(15 min)",
          description: "Perceber os teus objetivos, público-alvo e requisitos do projeto.",
        },
        {
          number: "02",
          title: "Proposta clara",
          subtitle: "",
          description: "Preço, prazo e scope bem definidos — sem surpresas.",
        },
        {
          number: "03",
          title: "Construção + revisão",
          subtitle: "",
          description: "Entregas rápidas com feedback contínuo ao longo do processo.",
        },
        {
          number: "04",
          title: "Lançamento + manutenção",
          subtitle: "",
          description: "Deploy profissional e acompanhamento mensal incluído.",
        },
      ],
    },
    // Pricing
    pricing: {
      title: "Preços",
      subtitle: "Escolhe um plano. Podes começar pequeno e escalar.",
      mostChosen: "Mais escolhido",
      setup: "Setup:",
      idealFor: "Ideal para:",
      wantPlan: "Quero este plano",
      unsure: "Não sabes qual escolher? Marcar chamada",
      note: '"Pedidos" significam pequenas tarefas (ex.: trocar textos, ajustar secções, pequenas integrações). Novas funcionalidades grandes são orçamentadas à parte.',
      terms: "Sem fidelização longa — mínimo 3 meses, depois mensal cancelável com aviso de 30 dias.",
      plans: [
        {
          name: "START",
          price: "79€",
          period: "/mês",
          setup: "desde 490€",
          description: "Presença online profissional",
          features: [
            "Site até 5 secções (one-page ou multi-page simples)",
            "Design moderno responsivo",
            "Formulário de contacto + WhatsApp",
            "Hosting + SSL incluído",
            "Backups semanais",
            "1 pedido pequeno/mês (ajuste de texto/imagem)",
          ],
        },
        {
          name: "GROW",
          price: "129€",
          period: "/mês",
          setup: "desde 990€",
          description: "Negócios que querem leads consistentemente",
          popular: true,
          features: [
            "Tudo do START +",
            "Até 10 páginas / secções",
            "SEO técnico base (meta, performance, indexação)",
            "Integração com Google Analytics / Pixel",
            "Backups diários",
            "2 pedidos/mês (pequenas melhorias)",
            "Monitorização básica uptime",
          ],
        },
        {
          name: "SCALE",
          price: "199€",
          period: "/mês",
          setup: "desde 1.900€",
          description: "Empresas a crescer e automatizar",
          features: [
            "Tudo do GROW +",
            "Área reservada / login (base)",
            "Backoffice simples ou integrações avançadas",
            "4 pedidos/mês",
            "Prioridade no suporte",
            "Roadmap trimestral de melhorias",
          ],
        },
      ],
    },
    // Extras
    extras: {
      title: "Extras",
      titleMuted: "(opcionais)",
      items: [
        { title: "Branding leve", description: "Logo + paleta + tipografia", price: "desde 250€" },
        { title: "Copywriting", description: "Textos persuasivos", price: "desde 150€" },
        { title: "Sessão fotográfica / vídeo", description: "Parceiros especializados", price: "sob consulta" },
        { title: "Google Business Profile", description: "Perfil otimizado", price: "desde 120€" },
        { title: "Campanhas de anúncios", description: "Gestão + budget", price: "desde 150€/mês" },
      ],
    },
    // Testimonials
    testimonials: {
      title: "O que dizem",
      items: [
        {
          name: "Maria Silva",
          company: "Clínica Bem-Estar",
          text: "O site ficou incrível e as marcações online aumentaram 40%. Recomendo a quem quer resultados.",
        },
        {
          name: "João Santos",
          company: "Consultoria JPS",
          text: "Finalmente tenho um site profissional que reflete a qualidade do meu trabalho. Excelente acompanhamento.",
        },
        {
          name: "Ana Costa",
          company: "Imobiliária Costa",
          text: "A plataforma de gestão de imóveis simplificou todo o nosso processo. Fantástico trabalho.",
        },
      ],
    },
    // FAQ
    faq: {
      title: "Perguntas frequentes",
      items: [
        {
          question: "Quanto tempo demora?",
          answer:
            "Depende do projeto, mas a maioria dos sites fica pronto em 2-4 semanas. Plataformas mais complexas podem demorar 4-8 semanas. Dou sempre um prazo realista na proposta.",
        },
        {
          question: "O que está incluído na mensalidade?",
          answer:
            "Hosting, SSL, backups, monitorização, pequenas alterações mensais (conforme o plano), atualizações de segurança e suporte por email/WhatsApp.",
        },
        {
          question: "Posso cancelar quando quiser?",
          answer:
            "Sim. Após os primeiros 3 meses, o contrato é mensal e podes cancelar com aviso de 30 dias. Ficas com todo o código do teu projeto.",
        },
        {
          question: "Trabalhas com WordPress / Shopify?",
          answer:
            "Posso trabalhar com essas plataformas se fizer sentido para o projeto, mas prefiro soluções à medida em React/Node para melhor performance e controlo total.",
        },
        {
          question: "E se eu já tiver site?",
          answer:
            "Podemos fazer uma análise e decidir se faz sentido otimizar o existente ou criar um novo. Em muitos casos, começar do zero é mais eficiente.",
        },
        {
          question: "Fazes plataformas internas e backoffices?",
          answer:
            "Sim! É uma das minhas especialidades — sistemas de gestão, dashboards, áreas reservadas, integrações com APIs e automações.",
        },
      ],
    },
    // About
    about: {
      title: "Um estúdio pequeno. Resultados grandes.",
      text: "Sou fullstack web dev e trabalho com stack moderna para construir soluções rápidas, seguras e escaláveis. O meu foco é tirar complexidade do caminho: tu tratas do teu negócio, eu trato do digital.",
    },
    // Contact
    contact: {
      title: "Vamos falar",
      subtitle: "Diz-me o que precisas. Eu respondo com uma proposta clara.",
      form: {
        name: "Nome",
        namePlaceholder: "O teu nome",
        email: "Email",
        emailPlaceholder: "email@exemplo.com",
        phone: "Telefone (opcional)",
        phonePlaceholder: "+351 XXX XXX XXX",
        company: "Empresa",
        companyPlaceholder: "Nome da empresa",
        need: "O que precisas?",
        needPlaceholder: "Seleciona uma opção",
        needOptions: {
          website: "Website",
          store: "Loja Online",
          platform: "Plataforma",
          maintenance: "Manutenção",
          other: "Outro",
        },
        message: "Mensagem",
        messagePlaceholder: "Conta-me mais sobre o teu projeto...",
        submit: "Enviar pedido",
      },
      quickContacts: "Contactos rápidos",
      whatsapp: "WhatsApp",
      location: "Portugal (remoto)",
      call15: "Chamada de 15 min",
      callSubtitle: "Sem compromisso",
      bookCall: "Marcar chamada",
    },
    // Footer
    footer: {
      description:
        "Websites e plataformas que dão lucro — com manutenção incluída. Desenvolvimento web fullstack em Portugal.",
      quickLinks: "Links rápidos",
      legal: "Legal",
      privacy: "Política de Privacidade",
      terms: "Termos e Condições",
      rights: "Todos os direitos reservados.",
    },
    // Case Study Page
    caseStudy: {
      backToProjects: "Voltar aos projetos",
      duration: "Duração",
      year: "Ano",
      overview: "Visão Geral",
      challenge: "O Desafio",
      solution: "A Solução",
      results: "Resultados",
      wantProject: "Quer um projeto como este?",
      wantProjectText: "Vamos discutir como posso ajudar o seu negócio a crescer com uma solução digital à medida.",
      requestQuote: "Pedir orçamento",
      viewDemo: "Ver demo ao vivo",
      notFound: "Projeto não encontrado",
    },
    // Projects data
    projectsData: [
      {
        id: "plataforma-gestao-comercial",
        title: "Plataforma de Gestão Comercial",
        description: "Sistema completo de gestão de clientes, vendas e relatórios para equipa comercial.",
        fullDescription: `Uma plataforma robusta desenvolvida para equipas comerciais que precisam de gerir todo o ciclo de vendas, desde a prospecção até ao fecho de negócios.

O sistema inclui gestão de contactos e empresas, pipeline de vendas visual, relatórios e dashboards em tempo real, integração com email e calendário, e sistema de notificações automáticas.`,
        challenge:
          "A empresa cliente tinha dificuldade em acompanhar o progresso das vendas e perdia oportunidades por falta de organização. Os dados estavam dispersos em folhas de cálculo e não havia visibilidade sobre o desempenho da equipa.",
        solution:
          "Desenvolvemos uma plataforma centralizada com dashboard em tempo real, gestão de pipeline visual drag-and-drop, e relatórios automáticos. A equipa passou a ter visibilidade completa sobre todas as oportunidades e métricas de desempenho.",
        results: [
          "Aumento de 40% na taxa de conversão",
          "Redução de 60% no tempo de follow-up",
          "Visibilidade total sobre pipeline de vendas",
          "Relatórios automáticos semanais",
        ],
        duration: "3 meses",
        year: "2024",
      },
      {
        id: "sistema-reservas",
        title: "Sistema de Reservas",
        description: "Dashboard e backoffice para gestão de reservas com calendário e notificações.",
        fullDescription: `Sistema completo de gestão de reservas desenvolvido para negócios que precisam de organizar agendamentos de forma eficiente.

Inclui calendário interativo, gestão de disponibilidade, notificações por email e SMS, pagamentos online, e área de cliente para auto-gestão de reservas.`,
        challenge:
          "O cliente geria reservas por telefone e email, perdendo marcações e causando conflitos de horários. Não havia forma dos clientes verificarem disponibilidade ou fazerem marcações fora do horário de expediente.",
        solution:
          "Criámos um sistema de reservas online com calendário em tempo real, confirmações automáticas, e área de cliente. Os clientes podem agora reservar 24/7 e recebem lembretes automáticos.",
        results: [
          "Redução de 80% em no-shows",
          "Aumento de 50% em reservas fora de horas",
          "Eliminação de conflitos de agendamento",
          "Automatização de comunicações",
        ],
        duration: "2 meses",
        year: "2024",
      },
      {
        id: "website-institucional",
        title: "Website Institucional Premium",
        description: "Site moderno e responsivo com foco em conversão para empresa de consultoria.",
        fullDescription: `Website institucional de alta qualidade desenvolvido para uma empresa de consultoria que precisava de transmitir credibilidade e gerar leads qualificados.

O site inclui design premium responsivo, formulários de contacto otimizados, blog com SEO, integração com CRM, e landing pages para campanhas.`,
        challenge:
          "O website anterior era desatualizado, não era responsivo, e não convertia visitantes em leads. A empresa estava a perder oportunidades de negócio por falta de presença digital profissional.",
        solution:
          "Desenvolvemos um website moderno com foco em conversão, optimizado para SEO, com formulários estrategicamente posicionados e integração com o CRM da empresa para gestão automática de leads.",
        results: [
          "Aumento de 200% em leads gerados",
          "Tempo médio no site aumentou 150%",
          "Posicionamento top 3 no Google",
          "Taxa de conversão de 5.2%",
        ],
        duration: "6 semanas",
        year: "2024",
      },
      {
        id: "loja-online",
        title: "Loja Online",
        description: "E-commerce completo com pagamentos, gestão de stock e integração com transportadoras.",
        fullDescription: `Loja online completa desenvolvida para uma marca que pretendia expandir as vendas para o digital com uma experiência de compra premium.

Inclui catálogo de produtos avançado, checkout otimizado, múltiplos métodos de pagamento, gestão de stock em tempo real, e integração com transportadoras para tracking automático.`,
        challenge:
          "A marca vendia apenas em loja física e queria expandir para o online, mas precisava de uma solução que integrasse com o seu sistema de gestão existente e oferecesse uma experiência de compra premium.",
        solution:
          "Desenvolvemos um e-commerce à medida com integração bidirecional com o ERP existente, checkout em 3 passos, e sistema de tracking integrado. O design foi pensado para refletir o posicionamento premium da marca.",
        results: [
          "25% das vendas totais via online no 1º ano",
          "Taxa de abandono de carrinho de apenas 35%",
          "Integração total com ERP existente",
          "Expansão para mercado internacional",
        ],
        duration: "4 meses",
        year: "2023",
      },
      {
        id: "portal-cliente",
        title: "Portal / Área de Cliente",
        description: "Área reservada com autenticação, documentos e comunicação com a empresa.",
        fullDescription: `Portal de cliente desenvolvido para uma empresa de serviços que precisava de centralizar toda a comunicação e documentação com os seus clientes.

Inclui área segura com autenticação, gestão de documentos, sistema de tickets para suporte, histórico de faturas, e notificações em tempo real.`,
        challenge:
          "A comunicação com clientes era feita por email, perdendo-se informação importante. Os clientes não tinham acesso fácil aos seus documentos e faturas, e a equipa de suporte estava sobrecarregada com pedidos simples.",
        solution:
          "Criámos um portal self-service onde os clientes acedem a toda a sua documentação, histórico de faturas, e podem abrir tickets de suporte. A comunicação ficou centralizada e rastreável.",
        results: [
          "Redução de 70% em emails de suporte",
          "Clientes acedem documentos 24/7",
          "Tempo médio de resolução reduzido em 50%",
          "Satisfação de cliente aumentou 35%",
        ],
        duration: "2.5 meses",
        year: "2024",
      },
      {
        id: "landing-page-conversao",
        title: "Landing Page de Conversão",
        description: "Página otimizada para campanhas de marketing com A/B testing e tracking.",
        fullDescription: `Landing page de alta conversão desenvolvida para campanhas de marketing digital com foco em geração de leads qualificados.

Inclui design otimizado para conversão, formulários multi-step, A/B testing integrado, tracking avançado com pixels, e integração com ferramentas de automação de marketing.`,
        challenge:
          "As campanhas de marketing não estavam a converter bem porque direcionavam para o website principal. Era necessária uma página dedicada com foco total na conversão da oferta específica.",
        solution:
          "Desenvolvemos uma landing page com copy persuasivo, design focado na ação, formulário multi-step para reduzir fricção, e sistema de A/B testing para otimização contínua.",
        results: [
          "Taxa de conversão de 12.5%",
          "Custo por lead reduzido em 60%",
          "A/B testing identificou variante 40% melhor",
          "ROI de campanha aumentou 3x",
        ],
        duration: "3 semanas",
        year: "2024",
      },
    ],
  },
  en: {
    // Header
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      pricing: "Pricing",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
      bookCall: "Book a call",
    },
    // Hero
    hero: {
      badge1: "Fast delivery",
      badge2: "Predictable pricing",
      badge3: "Performance + security",
      title: "Your business deserves a",
      titleHighlight: "fast, beautiful",
      titleEnd: "website built to convert.",
      subtitle: 'I create custom websites and platforms — and handle monthly maintenance so you never go "without IT".',
      cta1: "Get a quote",
      cta2: "View projects",
      stack: "I work with",
      stackEnd: "and API integrations.",
    },
    // Services
    services: {
      title: "Services",
      titleMuted: "(no complications)",
      subtitle: "You choose the goal. I handle the rest — from design to code, from deployment to maintenance.",
      cta: "I want this",
      items: [
        {
          title: "Professional Websites",
          description: "Landing pages and corporate sites focused on conversion.",
          features: [
            "Landing pages and corporate sites",
            "Focused on conversion (contacts, leads, bookings)",
            "Optimized for mobile and speed",
          ],
        },
        {
          title: "Online Stores",
          description: "Complete e-commerce with all necessary modules.",
          features: [
            "Catalog, cart, payments",
            "Integrations with shipping and invoicing",
            "Automated stock management",
          ],
        },
        {
          title: "Platforms & Backoffices",
          description: "Custom internal management systems.",
          features: [
            "Internal management (clients, bookings, stock)",
            "Authentication and permissions",
            "Dashboards and reports",
          ],
        },
        {
          title: "Integrations & Automations",
          description: "Connect systems and automate processes.",
          features: ["APIs and advanced forms", "Transactional emails", "Automation of repetitive tasks"],
        },
        {
          title: "Maintenance & Evolution",
          description: "Continuous support for your project.",
          features: ["Fixes, improvements, security", "Regular backups", "Monthly support and follow-up"],
        },
      ],
    },
    // Target Audience
    targetAudience: {
      title: "Ideal for…",
      items: [
        "Clinics and healthcare",
        "Real estate agencies",
        "Premium local services (studios, gyms, aesthetics)",
        "Consultants and B2B businesses",
        "SMEs without an IT team",
      ],
    },
    // Benefits
    benefits: {
      title: "What you get",
      items: [
        {
          title: "More leads",
          description: "Well-placed forms and CTAs to convert visitors into customers.",
        },
        {
          title: "Fast site",
          description: "Optimized performance and technical SEO for better ranking.",
        },
        {
          title: "No headaches",
          description: "Continuous maintenance — I handle everything so you can focus on your business.",
        },
        {
          title: "Scalable",
          description: "Foundation ready to grow and evolve into a complete platform.",
        },
      ],
    },
    // Projects
    projects: {
      title: "Projects",
      subtitle: "Some work (or prototypes) that show how I think and build.",
      filterAll: "All",
      filterWebsites: "Websites",
      filterStores: "Stores",
      filterPlatforms: "Platforms",
      caseStudy: "Case study",
      openDemo: "Open demo",
      viewAll: "View all projects",
      wantProject: "I want a project like this",
    },
    // Process
    process: {
      title: "Simple process",
      steps: [
        {
          number: "01",
          title: "Discovery",
          subtitle: "(15 min)",
          description: "Understand your goals, target audience, and project requirements.",
        },
        {
          number: "02",
          title: "Clear proposal",
          subtitle: "",
          description: "Price, timeline, and scope well defined — no surprises.",
        },
        {
          number: "03",
          title: "Build + review",
          subtitle: "",
          description: "Fast deliveries with continuous feedback throughout the process.",
        },
        {
          number: "04",
          title: "Launch + maintenance",
          subtitle: "",
          description: "Professional deployment and monthly support included.",
        },
      ],
    },
    // Pricing
    pricing: {
      title: "Pricing",
      subtitle: "Choose a plan. You can start small and scale.",
      mostChosen: "Most chosen",
      setup: "Setup:",
      idealFor: "Ideal for:",
      wantPlan: "I want this plan",
      unsure: "Not sure which to choose? Book a call",
      note: '"Requests" mean small tasks (e.g., changing text, adjusting sections, small integrations). New major features are quoted separately.',
      terms: "No long-term commitment — minimum 3 months, then monthly cancellable with 30 days notice.",
      plans: [
        {
          name: "START",
          price: "€79",
          period: "/month",
          setup: "from €490",
          description: "Professional online presence",
          features: [
            "Site up to 5 sections (one-page or simple multi-page)",
            "Modern responsive design",
            "Contact form + WhatsApp",
            "Hosting + SSL included",
            "Weekly backups",
            "1 small request/month (text/image adjustment)",
          ],
        },
        {
          name: "GROW",
          price: "€129",
          period: "/month",
          setup: "from €990",
          description: "Businesses wanting consistent leads",
          popular: true,
          features: [
            "Everything in START +",
            "Up to 10 pages / sections",
            "Basic technical SEO (meta, performance, indexing)",
            "Google Analytics / Pixel integration",
            "Daily backups",
            "2 requests/month (small improvements)",
            "Basic uptime monitoring",
          ],
        },
        {
          name: "SCALE",
          price: "€199",
          period: "/month",
          setup: "from €1,900",
          description: "Companies growing and automating",
          features: [
            "Everything in GROW +",
            "Reserved area / login (basic)",
            "Simple backoffice or advanced integrations",
            "4 requests/month",
            "Priority support",
            "Quarterly improvement roadmap",
          ],
        },
      ],
    },
    // Extras
    extras: {
      title: "Extras",
      titleMuted: "(optional)",
      items: [
        { title: "Light branding", description: "Logo + palette + typography", price: "from €250" },
        { title: "Copywriting", description: "Persuasive texts", price: "from €150" },
        { title: "Photo / video session", description: "Specialized partners", price: "on request" },
        { title: "Google Business Profile", description: "Optimized profile", price: "from €120" },
        { title: "Ad campaigns", description: "Management + budget", price: "from €150/month" },
      ],
    },
    // Testimonials
    testimonials: {
      title: "What they say",
      items: [
        {
          name: "Maria Silva",
          company: "Wellness Clinic",
          text: "The site looks amazing and online bookings increased by 40%. I recommend it to anyone who wants results.",
        },
        {
          name: "João Santos",
          company: "JPS Consulting",
          text: "I finally have a professional site that reflects the quality of my work. Excellent support.",
        },
        {
          name: "Ana Costa",
          company: "Costa Real Estate",
          text: "The property management platform simplified our entire process. Fantastic work.",
        },
      ],
    },
    // FAQ
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "How long does it take?",
          answer:
            "Depends on the project, but most sites are ready in 2-4 weeks. More complex platforms can take 4-8 weeks. I always give a realistic deadline in the proposal.",
        },
        {
          question: "What's included in the monthly fee?",
          answer:
            "Hosting, SSL, backups, monitoring, small monthly changes (according to the plan), security updates, and email/WhatsApp support.",
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Yes. After the first 3 months, the contract is monthly and you can cancel with 30 days notice. You keep all your project's code.",
        },
        {
          question: "Do you work with WordPress / Shopify?",
          answer:
            "I can work with these platforms if it makes sense for the project, but I prefer custom solutions in React/Node for better performance and full control.",
        },
        {
          question: "What if I already have a site?",
          answer:
            "We can analyze it and decide if it makes sense to optimize the existing one or create a new one. In many cases, starting from scratch is more efficient.",
        },
        {
          question: "Do you make internal platforms and backoffices?",
          answer:
            "Yes! It's one of my specialties — management systems, dashboards, reserved areas, API integrations, and automations.",
        },
      ],
    },
    // About
    about: {
      title: "A small studio. Big results.",
      text: "I'm a fullstack web dev working with modern stack to build fast, secure, and scalable solutions. My focus is removing complexity: you handle your business, I handle the digital.",
    },
    // Contact
    contact: {
      title: "Let's talk",
      subtitle: "Tell me what you need. I'll respond with a clear proposal.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "email@example.com",
        phone: "Phone (optional)",
        phonePlaceholder: "+351 XXX XXX XXX",
        company: "Company",
        companyPlaceholder: "Company name",
        need: "What do you need?",
        needPlaceholder: "Select an option",
        needOptions: {
          website: "Website",
          store: "Online Store",
          platform: "Platform",
          maintenance: "Maintenance",
          other: "Other",
        },
        message: "Message",
        messagePlaceholder: "Tell me more about your project...",
        submit: "Send request",
      },
      quickContacts: "Quick contacts",
      whatsapp: "WhatsApp",
      location: "Portugal (remote)",
      call15: "15 min call",
      callSubtitle: "No commitment",
      bookCall: "Book a call",
    },
    // Footer
    footer: {
      description:
        "Websites and platforms that profit — with maintenance included. Fullstack web development in Portugal.",
      quickLinks: "Quick links",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      rights: "All rights reserved.",
    },
    // Case Study Page
    caseStudy: {
      backToProjects: "Back to projects",
      duration: "Duration",
      year: "Year",
      overview: "Overview",
      challenge: "The Challenge",
      solution: "The Solution",
      results: "Results",
      wantProject: "Want a project like this?",
      wantProjectText: "Let's discuss how I can help your business grow with a custom digital solution.",
      requestQuote: "Get a quote",
      viewDemo: "View live demo",
      notFound: "Project not found",
    },
    // Projects data
    projectsData: [
      {
        id: "plataforma-gestao-comercial",
        title: "Commercial Management Platform",
        description: "Complete client, sales, and reporting management system for sales teams.",
        fullDescription: `A robust platform developed for sales teams that need to manage the entire sales cycle, from prospecting to closing deals.

The system includes contact and company management, visual sales pipeline, real-time reports and dashboards, email and calendar integration, and automatic notification system.`,
        challenge:
          "The client company had difficulty tracking sales progress and was losing opportunities due to lack of organization. Data was scattered across spreadsheets and there was no visibility into team performance.",
        solution:
          "We developed a centralized platform with real-time dashboard, visual drag-and-drop pipeline management, and automatic reports. The team now has complete visibility over all opportunities and performance metrics.",
        results: [
          "40% increase in conversion rate",
          "60% reduction in follow-up time",
          "Total visibility over sales pipeline",
          "Automatic weekly reports",
        ],
        duration: "3 months",
        year: "2024",
      },
      {
        id: "sistema-reservas",
        title: "Booking System",
        description: "Dashboard and backoffice for booking management with calendar and notifications.",
        fullDescription: `Complete booking management system developed for businesses that need to organize appointments efficiently.

Includes interactive calendar, availability management, email and SMS notifications, online payments, and customer area for self-service booking management.`,
        challenge:
          "The client managed bookings by phone and email, missing appointments and causing schedule conflicts. There was no way for customers to check availability or make bookings outside business hours.",
        solution:
          "We created an online booking system with real-time calendar, automatic confirmations, and customer area. Customers can now book 24/7 and receive automatic reminders.",
        results: [
          "80% reduction in no-shows",
          "50% increase in after-hours bookings",
          "Elimination of scheduling conflicts",
          "Automated communications",
        ],
        duration: "2 months",
        year: "2024",
      },
      {
        id: "website-institucional",
        title: "Premium Corporate Website",
        description: "Modern, responsive site focused on conversion for a consulting company.",
        fullDescription: `High-quality corporate website developed for a consulting company that needed to convey credibility and generate qualified leads.

The site includes premium responsive design, optimized contact forms, SEO blog, CRM integration, and landing pages for campaigns.`,
        challenge:
          "The previous website was outdated, not responsive, and wasn't converting visitors into leads. The company was losing business opportunities due to lack of professional digital presence.",
        solution:
          "We developed a modern website focused on conversion, optimized for SEO, with strategically positioned forms and CRM integration for automatic lead management.",
        results: [
          "200% increase in generated leads",
          "Average time on site increased 150%",
          "Top 3 Google ranking",
          "5.2% conversion rate",
        ],
        duration: "6 weeks",
        year: "2024",
      },
      {
        id: "loja-online",
        title: "Online Store",
        description: "Complete e-commerce with payments, stock management, and carrier integration.",
        fullDescription: `Complete online store developed for a brand looking to expand sales to digital with a premium shopping experience.

Includes advanced product catalog, optimized checkout, multiple payment methods, real-time stock management, and carrier integration for automatic tracking.`,
        challenge:
          "The brand only sold in physical stores and wanted to expand online, but needed a solution that integrated with their existing management system and offered a premium shopping experience.",
        solution:
          "We developed a custom e-commerce with bidirectional ERP integration, 3-step checkout, and integrated tracking system. The design was created to reflect the brand's premium positioning.",
        results: [
          "25% of total sales via online in 1st year",
          "Cart abandonment rate of only 35%",
          "Full integration with existing ERP",
          "Expansion to international market",
        ],
        duration: "4 months",
        year: "2023",
      },
      {
        id: "portal-cliente",
        title: "Customer Portal",
        description: "Reserved area with authentication, documents, and company communication.",
        fullDescription: `Customer portal developed for a service company that needed to centralize all communication and documentation with their clients.

Includes secure area with authentication, document management, support ticket system, invoice history, and real-time notifications.`,
        challenge:
          "Client communication was done by email, losing important information. Clients didn't have easy access to their documents and invoices, and the support team was overwhelmed with simple requests.",
        solution:
          "We created a self-service portal where clients access all their documentation, invoice history, and can open support tickets. Communication became centralized and traceable.",
        results: [
          "70% reduction in support emails",
          "Clients access documents 24/7",
          "Average resolution time reduced by 50%",
          "Customer satisfaction increased 35%",
        ],
        duration: "2.5 months",
        year: "2024",
      },
      {
        id: "landing-page-conversao",
        title: "Conversion Landing Page",
        description: "Page optimized for marketing campaigns with A/B testing and tracking.",
        fullDescription: `High-conversion landing page developed for digital marketing campaigns focused on generating qualified leads.

Includes conversion-optimized design, multi-step forms, integrated A/B testing, advanced pixel tracking, and marketing automation tools integration.`,
        challenge:
          "Marketing campaigns weren't converting well because they directed to the main website. A dedicated page with total focus on the specific offer conversion was needed.",
        solution:
          "We developed a landing page with persuasive copy, action-focused design, multi-step form to reduce friction, and A/B testing system for continuous optimization.",
        results: [
          "12.5% conversion rate",
          "Cost per lead reduced by 60%",
          "A/B testing identified 40% better variant",
          "Campaign ROI increased 3x",
        ],
        duration: "3 weeks",
        year: "2024",
      },
    ],
  },
}

export type Language = keyof typeof translations
export type Translations = typeof translations.pt
