export interface ServiceInfo {
  slug: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  heroImage: string;
  features: string[];
  benefits: string[];
  process: string[];
  budgetTarget: string;
}

export const servicesData: Record<string, ServiceInfo> = {
  "elaboracao-de-projetos": {
    slug: "elaboracao-de-projetos",
    id: "project",
    title: "Elaboração de Projetos Executivos",
    tagline: "Arquitetura e Engenharia Integradas para Projetos de Alto Padrão",
    description: "Planejamento inteligente e detalhado para viabilizar sua obra de grande porte com precisão orçamentária e sofisticação arquitetônica.",
    longDescription: "A concepção de uma obra de grande porte exige planejamento rigoroso. Desenvolvemos projetos arquitetônicos, estruturais, elétricos e hidráulicos integrados (BIM), eliminando incompatibilidades antes de a obra começar. Nossa equipe de arquitetos e engenheiros traduz os desejos mais exigentes em soluções estruturais seguras, modernas e esteticamente impecáveis.",
    icon: "project",
    heroImage: "/assets/slide-1.jpg",
    features: [
      "Projetos arquitetônicos residenciais de alto padrão",
      "Projetos estruturais complexos de alta segurança",
      "Modelagem e compatibilização em ambiente BIM",
      "Projetos de instalações elétricas, hidráulicas e de climatização",
      "Design de interiores corporativos e residenciais"
    ],
    benefits: [
      "Eliminação de surpresas financeiras durante a execução da obra",
      "Aprovação ágil junto a órgãos municipais e condomínios de alto padrão",
      "Maximização da eficiência térmica, acústica e lumínica da edificação",
      "Otimização no uso de materiais, reduzindo o desperdício em até 20%"
    ],
    process: [
      "Briefing & Estudo Preliminar: Alinhamento das necessidades do cliente e diretrizes de design.",
      "Anteprojeto: Desenvolvimento das primeiras plantas e maquetes eletrônicas 3D.",
      "Compatibilização BIM: Integração de todos os projetos de engenharia para evitar conflitos.",
      "Projeto Executivo Final: Entrega do detalhamento completo pronto para início da execução."
    ],
    budgetTarget: "Desenvolvido para residências de alto luxo e galpões industriais"
  },
  "execucao-de-obras": {
    slug: "execucao-de-obras",
    id: "infra",
    title: "Execução de Obras e Infraestrutura",
    tagline: "Rigor Técnico e Gerenciamento Completo de Ponta a Ponta",
    description: "Construção de residências sofisticadas, sedes corporativas e infraestrutura robusta, entregues dentro do prazo e com acabamento de excelência.",
    longDescription: "Executar uma obra de grande porte com sucesso requer coordenação minuciosa e responsabilidade técnica. Gerenciamos todas as etapas, desde a fundação até o acabamento de altíssimo nível. Com uma equipe de engenharia residente e mão de obra altamente qualificada própria, garantimos que cada detalhe do projeto executivo seja respeitado com rigor de milímetros, cumprindo prazos e orçamentos.",
    icon: "infra",
    heroImage: "/assets/slide-2.jpg",
    features: [
      "Execução de residências de alto padrão em condomínios fechados",
      "Obras estruturais comerciais e industriais de grande porte",
      "Fundações complexas e contenções de solo",
      "Instalações de redes de drenagem, pavimentação e infraestrutura de base",
      "Gerenciamento completo no modelo Turnkey (chave na mão)"
    ],
    benefits: [
      "Equipe de engenheiros dedicada em tempo integral na obra",
      "Relatórios semanais de evolução física e financeira (previsibilidade total)",
      "Cumprimento rigoroso de todas as normas de segurança (NRs)",
      "Garantia estrutural de 5 anos com suporte pós-obra ativo"
    ],
    process: [
      "Mobilização de Canteiro: Preparação do terreno e implantação dos protocolos de segurança.",
      "Infraestrutura & Estrutura: Fundação, pilares, vigas e lajes executados sob rigoroso controle tecnológico.",
      "Instalações & Alvenaria: Passagem de tubulações estruturadas e fechamentos de alto desempenho.",
      "Acabamentos Premium: Assentamento de pedras nobres, marcenaria integrada e pintura de alto padrão."
    ],
    budgetTarget: "Projetos de infraestrutura e edificações residenciais/comerciais de grande porte"
  },
  "reformas-em-geral": {
    slug: "reformas-em-geral",
    id: "reform",
    title: "Reformas de Alto Padrão & Retrofit",
    tagline: "Transformação de Espaços com Sofisticação e Agilidade",
    description: "Retrofits completos de fachadas, modernização de instalações e reformas residenciais e comerciais de alto nível com o mínimo de interferência.",
    longDescription: "A reforma de um imóvel premium exige cuidados especiais para preservar a estrutura existente enquanto se atualiza o design, a tecnologia e o conforto térmico e acústico. Executamos reformas estruturais complexas, retrofits corporativos e modernizações residenciais unindo a agilidade que você precisa com a sofisticação que seu espaço exige. Planejamos a obra para causar o mínimo de ruído e transtornos.",
    icon: "reform",
    heroImage: "/assets/slide-3.jpg",
    features: [
      "Reformas residenciais completas (apartamentos e casas de luxo)",
      "Retrofit corporativo (escritórios integrados, sedes de empresas e lojas)",
      "Reforço estrutural e aberturas de vãos livres complexos",
      "Substituição de redes elétricas e hidráulicas antigas por sistemas inteligentes",
      "Automação residencial e cabeamento estruturado"
    ],
    benefits: [
      "Cronograma dinâmico para menor tempo de inatividade do espaço comercial",
      "Seleção dos melhores revestimentos e materiais do mercado",
      "Respeito absoluto às normas de condomínio e horários de trabalho",
      "Limpeza fina pós-obra profissional inclusa"
    ],
    process: [
      "Diagnóstico Estrutural: Análise detalhada das patologias e instalações existentes.",
      "Demolição Controlada: Remoção segura com destinação ecologicamente correta dos resíduos.",
      "Instalações & Adaptações: Upgrade total das redes elétricas, de dados e climatização.",
      "Revestimento & Detalhamento: Instalação de acabamentos finos de alto padrão."
    ],
    budgetTarget: "Reformas corporativas complexas e modernização de residências de alto valor"
  },
  "pintura-e-fachadas": {
    slug: "pintura-e-fachadas",
    id: "paint",
    title: "Pinturas Premium & Fachadas",
    tagline: "Proteção de Alto Desempenho e Acabamento Estético Imponente",
    description: "Pintura residencial, comercial e condominial com tintas especiais de alta durabilidade e tratamento técnico de fachadas.",
    longDescription: "A pintura e o tratamento de fachada são essenciais para a valorização patrimonial e proteção contra intempéries. Oferecemos soluções completas de pintura interna e externa de alto desempenho, incluindo impermeabilização de fachadas prediais, tratamento de trincas e aplicação de texturas nobres (como cimento queimado de alto padrão e texturas projetadas). Atendemos condomínios verticais e grandes áreas comerciais com rapidez e segurança.",
    icon: "paint",
    heroImage: "/assets/pintura-fachada-predio.png",
    features: [
      "Pintura externa e restauração de fachadas prediais e comerciais",
      "Pintura residencial interna fina com tintas superlaváveis e premium",
      "Impermeabilização e lavagem técnica de fachadas sob alta pressão",
      "Aplicação de acabamentos decorativos especiais (cimento queimado, cal, marmorato)",
      "Pintura de estruturas metálicas e tratamentos anticorrosivos"
    ],
    benefits: [
      "Equipe de pintores profissionais uniformizados e certificados para trabalho em altura (NR-35)",
      "Uso de tintas e insumos das marcas líderes de mercado (Suvinil, Coral Premium, Sherwin-Williams)",
      "Aplicação de seladores e impermeabilizantes elastoméricos que previnem trincas e infiltrações",
      "Isolamento completo do ambiente para proteção de móveis e pisos contra respingos"
    ],
    process: [
      "Preparação e Limpeza: Lavagem sob pressão, remoção de mofo e descamações.",
      "Tratamento de Superfície: Correção de trincas estruturais e aplicação de massa corrida ou acrílica.",
      "Impermeabilização de Base: Selagem protetora contra umidade e infiltrações.",
      "Pintura de Acabamento: Duas a três demãos de tinta premium para uniformidade e brilho ideal."
    ],
    budgetTarget: "Pintura de condomínios comerciais/residenciais e mansões de alto padrão"
  },
  "orcamentos-e-planejamento": {
    slug: "orcamentos-e-planejamento",
    id: "plan",
    title: "Orçamentos e Planejamento Físico-Financeiro",
    tagline: "Engenharia de Custos com Precisão de Desvio Zero",
    description: "Levantamento quantitativo detalhado, cotações de insumos e cronograma de fluxo de caixa para sua obra rodar sem sustos.",
    longDescription: "Uma obra de alto padrão não pode depender de estimativas superficiais. Nossa divisão de engenharia de custos elabora orçamentos analíticos detalhados com composições unitárias rigorosas. Criamos cronogramas físicos-financeiros realistas que ditam o ritmo da obra e alinham as necessidades de caixa dos investidores. Com isso, eliminamos surpresas de custos adicionais e atrasos operacionais.",
    icon: "plan",
    heroImage: "/assets/Aluguel-de-Drone-background.jpg",
    features: [
      "Elaboração de Orçamento Analítico Detalhado (EAP de Obra)",
      "Cronograma Físico-Financeiro Integrado (MS Project / Primavera)",
      "Engenharia de Valor: Otimização de especificações sem perda de qualidade",
      "Gestão de Contratações e Cotações de Materiais Nobres",
      "Auditoria de orçamentos de terceiros e controle de medições"
    ],
    benefits: [
      "Previsibilidade total do fluxo de caixa necessário mês a mês",
      "Base de dados de preços atualizada com fornecedores premium de São Paulo",
      "Redução de custos operacionais através de inteligência de compras",
      "Planejamento logístico detalhado para obras urbanas ou em condomínios restritos"
    ],
    process: [
      "Levantamento de Quantitativos: Extração detalhada de medidas a partir dos projetos arquitetônicos.",
      "Cotação de Mercado: Consulta a fornecedores qualificados para insumos especiais e mão de obra.",
      "Montagem da EAP: Estruturação da planilha orçamentária por etapas da obra.",
      "Emissão de Cronograma: Definição das datas de início, fim e as parcelas financeiras respectivas."
    ],
    budgetTarget: "Destinado a investidores, construtores e proprietários de obras de grande porte"
  },
  "serralheria": {
    slug: "serralheria",
    id: "metal",
    title: "Serralheria Artística e Estrutural",
    tagline: "Aço, Robustez e Design Sob Medida para Grandes Projetos",
    description: "Fabricação e montagem de estruturas metálicas de grande porte, mezaninos industriais, portões e esquadrias de ferro premium.",
    longDescription: "A serralheria no alto padrão vai muito além do básico: exige acabamento de corte a laser, solda invisível e resistência estrutural impecável. Fabricamos e instalamos estruturas metálicas de suporte, mezaninos residenciais e industriais, guarda-corpos elegantes e portões sob medida de grande dimensão. Unimos a robustez do aço à delicadeza do design contemporâneo.",
    icon: "metal",
    heroImage: "/assets/img-galeria-predio-5-andares.jpg",
    features: [
      "Estruturas metálicas de cobertura para galpões e garagens residenciais",
      "Construção de mezaninos estruturais de alta capacidade de carga",
      "Guarda-corpos, corrimãos e brises metálicos de design arquitetônico",
      "Portões industriais automatizados e portas de entrada pivotantes de grande escala",
      "Soldagem técnica especializada com acabamento esmerilhado e pintura eletrostática"
    ],
    benefits: [
      "Soldadores qualificados e certificados para estruturas de segurança",
      "Pintura com proteção anticorrosiva industrial (epóxi ou PU poliuretano)",
      "Alta velocidade de montagem no local, sem gerar resíduos de obra comum",
      "Projetos calculados para suportar sobrecargas e ventos conforme normas vigentes"
    ],
    process: [
      "Detalhamento Técnico: Modelagem 3D das peças metálicas de encaixe.",
      "Fabricação em Fábrica: Corte, dobra, soldagem e tratamento anticorrosivo controlados.",
      "Transporte Logístico: Envio seguro das peças estruturais de grande escala.",
      "Instalação no Local: Montagem rápida com guindastes e fixação química estrutural."
    ],
    budgetTarget: "Desenvolvido para residências contemporâneas, comércios e galpões industriais"
  },
  "pisos-e-revestimentos": {
    slug: "pisos-e-revestimentos",
    id: "floor",
    title: "Pisos e Revestimentos Industriais",
    tagline: "Resistência Extrema e Acabamento Monolítico de Alta Performance",
    description: "Execução de pisos industriais de concreto polido e aplicação de revestimentos de alto desempenho como Epóxi, Poliuretano e Uretano.",
    longDescription: "Pisos para indústrias, comércios e garagens residenciais premium exigem especificações rigorosas de suporte de carga e facilidade de higienização. Somos especialistas na concretagem de pisos de alta resistência com polimento mecânico de espelho, além da aplicação de revestimentos monolíticos (sem emendas) em Epóxi, Poliuretano e Poliureia. Perfeitos para galpões de logística, quadras, laboratórios e garagens de alto padrão.",
    icon: "floor",
    heroImage: "/assets/img-galeria-acabamento-em-granito.jpg",
    features: [
      "Pisos de concreto polido (acabamento espelhado industrial)",
      "Aplicação de autonivelante Epóxi de alto brilho e resistência química",
      "Revestimentos em Poliuretano (PU) flexíveis ideais para quadras e estacionamentos",
      "Pinturas industriais demarcatórias de segurança para tráfego pesado",
      "Tratamento de juntas de dilatação e recuperação de concreto degradado"
    ],
    benefits: [
      "Acabamento monolítico totalmente impermeável e extremamente fácil de limpar",
      "Resistência superior ao tráfego de empilhadeiras, caminhões e veículos pesados",
      "Alta resistência a ataques químicos, graxas, combustíveis e óleos",
      "Estética moderna e brilhante que amplia a luminosidade do ambiente"
    ],
    process: [
      "Preparação Mecânica: Fresagem, lixamento diamantado e aspiração industrial do substrato.",
      "Recuperação de Trincas: Estucamento técnico com resinas de alta aderência.",
      "Aplicação do Primer: Selagem do concreto para garantir a perfeita ancoragem do revestimento.",
      "Aplicação do Acabamento: Lançamento do Epóxi/PU autonivelante com espátula dentada."
    ],
    budgetTarget: "Galpões logísticos, indústrias, garagens corporativas e quadras esportivas"
  }
};
