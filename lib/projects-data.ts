export const projects = [
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
    tags: ["React", "Node", "MySQL", "API"],
    category: "plataforma",
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
    tags: ["React", "Node", "Dashboard"],
    category: "plataforma",
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
    tags: ["React", "SEO", "Performance"],
    category: "website",
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
    tags: ["React", "Node", "Stripe", "API"],
    category: "loja",
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
    tags: ["React", "Node", "Auth"],
    category: "plataforma",
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
    tags: ["React", "Analytics", "SEO"],
    category: "website",
    duration: "3 semanas",
    year: "2024",
  },
]

export type Project = (typeof projects)[number]
