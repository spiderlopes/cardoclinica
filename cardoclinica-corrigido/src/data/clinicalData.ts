import { Specialist, ClinicalCondition, MedicalExam, FAQItem, BlogArticle } from '../types';

export const CLINIC_INFO = {
  name: "Cardo Clínica Cardiovascular",
  slogan: "Tudo que te faz viver.",
  headline: "Tudo que te faz viver.",
  subheadline: "Cardiologia e cirurgia vascular em um só lugar, em Itabuna, Bahia. Consulta sem pressa, escuta de verdade e estrutura própria de exames, para você cuidar do coração e da circulação sem sair da região sul da Bahia.",
  respostaDireta: "A Cardo Clínica Cardiovascular é uma clínica particular em Itabuna, Bahia, especializada na prevenção, diagnóstico e tratamento de doenças cardiovasculares. Reúne cardiologia, com a Dra. Eulina Maria dos Santos Chaves Cardoso, e cirurgia vascular, com o Dr. João Cardoso Neto, no mesmo endereço. Atende Itabuna e as cidades vizinhas da região sul da Bahia.",
  whatsapp: "(73) 98138 6868",
  whatsappRaw: "5573981386868",
  email: "cardoclinica@gmail.com",
  linktree: "https://linktr.ee/cardoclinica",
  address: "Avenida Princesa Isabel, nº 395, Sala 401, Edifício Itabuna Trade Center, Bairro Banco Raso, Itabuna, Bahia, CEP 45607-291",
  shortAddress: "Edifício Itabuna Trade Center, Sala 401, Banco Raso - Itabuna/BA",
  hours: "Segunda a sexta, das 8h às 12h e das 13h às 17h",
  pricingType: "Atendimento particular",
  areaServed: "Itabuna e cidades vizinhas da região sul da Bahia",
  cfmDisclaimer: "As informações deste site têm caráter informativo e não substituem consulta médica. Em caso de emergência, procure o serviço de saúde mais próximo. Publicidade médica em conformidade com a Resolução CFM nº 2.336/2023."
};

export const ABOUT_DATA = {
  title: "Cardiologia e cirurgia vascular juntas, porque o paciente não precisa escolher entre as duas",
  paragraphs: [
    "Quem convive com pressão alta, colesterol elevado ou diabetes muitas vezes descobre que a saúde das pernas está ligada à saúde do coração. Varizes avançadas, dores ao caminhar e problemas arteriais também falam diretamente com a saúde cardiovascular.",
    "A Cardo Clínica nasceu para atender esse paciente de forma completa. Cardiologia e cirurgia vascular no mesmo espaço significam acompanhamento integrado, sem que você precise coordenar sozinho o cuidado entre clínicas diferentes.",
    "A estrutura conta com recepção, consultório médico e sala própria de exames diagnósticos e de procedimentos de fleboestética. Boa parte da investigação e do tratamento acontece no mesmo lugar, do exame ao retorno."
  ],
  flowSteps: [
    {
      step: "01",
      title: "Agendamento",
      description: "O primeiro passo é o agendamento, por telefone ou WhatsApp."
    },
    {
      step: "02",
      title: "Consulta Humanizada",
      description: "A consulta dura em média 30 minutos, com espaço para investigar o caso com calma e explicar cada etapa."
    },
    {
      step: "03",
      title: "Retorno & Conduta",
      description: "O retorno costuma incluir a análise dos exames solicitados, já com uma conduta definida."
    },
    {
      step: "04",
      title: "Atendimento Particular",
      description: "O atendimento é particular, para Itabuna e cidades vizinhas da região sul da Bahia."
    }
  ],
  principles: [
    "Escuta ativa e consulta sem pressa, do início ao fim.",
    "Condutas baseadas nas diretrizes da Sociedade Brasileira de Cardiologia (SBC) e da Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV).",
    "Estrutura própria de exames, sem depender de encaminhamentos externos.",
    "Ambiente acolhedor, pensado para que o paciente se sinta seguro e ouvido desde a recepção."
  ]
};

export const SPECIALISTS: Specialist[] = [
  {
    id: "dra-eulina",
    name: "Eulina Maria dos Santos Chaves Cardoso",
    shortName: "Dra. Eulina Maria",
    role: "Cardiologista em Itabuna",
    crm: "CRM 20685",
    rqes: [
      { label: "Clínica Médica", number: "RQE 14173" },
      { label: "Cardiologia", number: "RQE 14174" },
      { label: "Ecocardiografia", number: "RQE 14179" }
    ],
    rqeString: "Clínica Médica RQE 14173. Cardiologia RQE 14174. Ecocardiografia RQE 14179.",
    education: [
      "Graduada em medicina pela UESC-BA (Universidade Estadual de Santa Cruz), em 2009.",
      "Residência em clínica médica pelo HGCA-BA (Hospital Geral Clériston Andrade), concluída em 2012.",
      "Residência em cardiologia pelo INC-RJ (Instituto Nacional de Cardiologia), concluída em 2014.",
      "Residência em ecocardiografia, também pelo INC-RJ, concluída em 2015.",
      "Título de Especialista em Cardiologia pela AMB/SBC, obtido em 2015.",
      "Título de Especialista em Ecocardiografia pela AMB/SBC, obtido em 2016."
    ],
    treats: "Pressão alta (hipertensão arterial), colesterol alto (dislipidemia), doenças coronarianas relacionadas ao infarto, miocardiopatias (insuficiência cardíaca) e valvopatias. Também realiza avaliação de risco cardiovascular antes de cirurgias.",
    consultationApproach: "Exame clínico cardiológico rigoroso, seguido da investigação diagnóstica adequada a cada caso. A comunicação é acolhedora, com clareza e alinhamento de expectativas em cada etapa.",
    avatarPlaceholder: "dra-eulina"
  },
  {
    id: "dr-joao",
    name: "João Cardoso Neto",
    shortName: "Dr. João Cardoso",
    role: "Cirurgião Vascular em Itabuna",
    crm: "CRM 20684",
    rqes: [
      { label: "Cirurgia Vascular", number: "RQE 13382" },
      { label: "Cirurgia Endovascular", number: "RQE 22262" },
      { label: "Ecografia Vascular", number: "RQE 17371" }
    ],
    rqeString: "Cirurgia Vascular RQE 13382. Cirurgia Endovascular RQE 22262. Ecografia Vascular RQE 17371.",
    education: [
      "Graduado em medicina pela UESC-BA (Universidade Estadual de Santa Cruz), em 2009.",
      "Residência em cirurgia geral pelo HCMF-BA (Hospital Calixto Midlej Filho), concluída em 2012.",
      "Pós-graduação lato sensu em Cirurgia Vascular e Endovascular pela PUC-RJ, concluída em 2014.",
      "Pós-graduação lato sensu em Ecografia Vascular com Doppler pelo Cetrus, concluída em 2017.",
      "Título de Especialista em Cirurgia Vascular pela AMB/SBACV, obtido em 2015.",
      "Título de Especialista em Ecografia Vascular pela AMB/SBACV, obtido em 2018.",
      "Título de Especialista em Angiorradiologia e Cirurgia Endovascular pela AMB/SBACV, obtido em 2021."
    ],
    treats: "Varizes e vasinhos, trombose venosa, úlceras vasculares, entupimentos arteriais, aneurisma de aorta, pé diabético e suas complicações, além de dores e inchaços nas pernas. Também realiza confecção de fístula arteriovenosa e implante ou retirada de cateteres para hemodiálise e quimioterapia.",
    consultationApproach: "Avaliação humanizada e conduta individualizada, apoiada por ecografia vascular quando necessário. O Dr. João reúne títulos de especialista nas três frentes da área: cirurgia vascular, cirurgia endovascular e ecografia vascular.",
    avatarPlaceholder: "dr-joao"
  }
];

export const CARDIOLOGY_CONDITIONS: ClinicalCondition[] = [
  {
    id: "pressao-alta",
    title: "Pressão alta: o que você precisa saber",
    category: "cardiologia",
    badge: "Doença Silenciosa",
    whatYouFeelOrFear: "Na maioria das vezes, nada. E é justamente esse o problema: a pressão alta costuma ser silenciosa até o momento de uma complicação maior, como infarto, derrame ou dissecção de aorta.",
    whyItHappens: "O aumento persistente da pressão nas artérias sobrecarrega o coração e os vasos ao longo do tempo, mesmo sem sintomas percebidos.",
    treatmentTruths: "Controlar a pressão é um acompanhamento contínuo, não um tratamento pontual. Uma medição isolada no consultório nem sempre reflete o comportamento da pressão ao longo do dia, por isso exames como o MAPA ajudam a enxergar o que uma medição única não mostra.",
    whenToSeek: "Histórico familiar de pressão alta, medições alteradas em casa ou na farmácia, dor de cabeça frequente ou tontura são sinais para buscar avaliação.",
    howWeCare: "Acompanhamento segundo as diretrizes da Sociedade Brasileira de Cardiologia, com consultas de retorno regulares e ajuste da conduta conforme a resposta de cada paciente.",
    nextStep: "Agende uma consulta para avaliação inicial da pressão arterial."
  },
  {
    id: "colesterol-alto",
    title: "Colesterol alto: o que você precisa saber",
    category: "cardiologia",
    badge: "Fator de Risco",
    whatYouFeelOrFear: "Assim como a pressão alta, o colesterol elevado costuma não dar sintomas, o que faz muita gente adiar a investigação.",
    whyItHappens: "O acúmulo de gordura no sangue ao longo dos anos favorece o entupimento das artérias, aumentando o risco de infarto e de outros eventos cardiovasculares.",
    treatmentTruths: "O colesterol alto não se resolve com um exame de sangue isolado. O acompanhamento clínico ajuda a entender o risco individual e a ajustar a conduta ao longo do tempo.",
    whenToSeek: "Histórico familiar de colesterol alto ou de doenças cardiovasculares precoces, junto com exames de sangue alterados, já justificam uma consulta.",
    howWeCare: "Exame clínico detalhado, seguido de orientação prática para reduzir o risco cardiovascular, com acompanhamento contínuo.",
    nextStep: "Agende uma avaliação para entender seu risco cardiovascular individual."
  }
];

export const VASCULAR_CONDITIONS: ClinicalCondition[] = [
  {
    id: "varizes",
    title: "Varizes: o que você precisa saber",
    category: "vascular",
    badge: "Tratamento Moderno",
    whatYouFeelOrFear: "Peso e cansaço nas pernas, dor no trajeto das veias, inchaço e, em alguns casos, o medo da cirurgia tradicional, com cortes maiores e recuperação demorada.",
    whyItHappens: "As válvulas das veias das pernas param de funcionar corretamente, e o sangue tem dificuldade de retornar ao coração, dilatando as veias com o tempo.",
    treatmentTruths: "Varizes não são apenas uma questão estética. Elas podem evoluir para dor constante, alteração na cor da pele, formação de úlceras e, em casos mais sérios, trombose. O tratamento com endolaser é pouco invasivo, com recuperação mais tranquila do que a cirurgia convencional. A decisão pelo procedimento também envolve uma avaliação de custo, e a consulta inicial é o momento certo para esclarecer todas as opções e expectativas, sem compromisso imediato.",
    whenToSeek: "Dor, peso, cansaço ou queimação no trajeto das veias, inchaço na perna, alteração na cor da pele ou surgimento de feridas são sinais para buscar avaliação.",
    howWeCare: "Avaliação clínica detalhada, com apoio de ecografia vascular quando necessário, e indicação do tratamento mais adequado ao estágio das varizes, seja endolaser, microcirurgia ou acompanhamento clínico.",
    nextStep: "Agende uma avaliação vascular para entender o estágio das suas varizes."
  },
  {
    id: "pe-diabetico",
    title: "Pé diabético: o que você precisa saber",
    category: "vascular",
    badge: "Atenção Crítica",
    whatYouFeelOrFear: "Uma ferida pequena no pé que parece sem importância, mas não cicatriza, ou perda de sensibilidade nos pés sem dor associada.",
    whyItHappens: "O diabetes prejudica a circulação e a sensibilidade dos pés ao longo do tempo, fazendo uma lesão pequena evoluir sem que a gravidade seja percebida.",
    treatmentTruths: "A diminuição da sensibilidade dos pés é um sinal frequentemente ignorado, mas é justamente ele que antecede feridas mais graves. O cuidado vascular preventivo é o que evita complicações como infecções profundas e, em casos extremos, amputações.",
    whenToSeek: "Qualquer ferida em paciente diabético, mesmo pequena, além de formigamento, diminuição da sensibilidade ou alteração na cor da pele dos pés.",
    howWeCare: "Investigação da causa vascular por trás da ferida, tratamento direcionado e acompanhamento até a cicatrização completa.",
    nextStep: "Procure avaliação assim que notar qualquer ferida ou alteração nos pés."
  },
  {
    id: "dor-ao-caminhar",
    title: "Dor nas pernas ao caminhar: o que você precisa saber",
    category: "vascular",
    badge: "Claudicação Intermitente",
    whatYouFeelOrFear: "Dor que aparece ao caminhar certa distância e melhora com o repouso, muitas vezes confundida com cansaço comum ou problema ortopédico.",
    whyItHappens: "É um sinal de que as artérias das pernas estão com o fluxo de sangue reduzido, geralmente por entupimento parcial.",
    treatmentTruths: "Sintomas nos membros inferiores costumam ser confundidos com questões neurológicas ou ortopédicas, o que atrasa o diagnóstico correto. A dor em intervalos ao caminhar, especificamente, é um sinal clássico de origem circulatória, não muscular ou articular.",
    whenToSeek: "Dor que surge sempre após caminhar a mesma distância e some com o repouso, sensação de perna fria ou diminuição da sensibilidade nos pés.",
    howWeCare: "Investigação com ecografia vascular para localizar a obstrução, seguida de conduta voltada para devolver a mobilidade sem dor.",
    nextStep: "Agende uma avaliação vascular se sentir dor recorrente ao caminhar."
  }
];

export const EXAMS_LIST: MedicalExam[] = [
  {
    id: "eco-coracao",
    name: "Ecocardiograma transtorácico",
    category: "cardiologia",
    description: "Com apoio de ultrassonografia com Doppler colorido, avalia a estrutura do coração em movimento, fluxo de sangue e funções das válvulas cardíacas.",
    purpose: "Investigação de sopros, insuficiência cardíaca, hipertensão e avaliação anatômica completa do coração.",
    iconName: "Activity"
  },
  {
    id: "ecg",
    name: "Eletrocardiograma (ECG)",
    category: "cardiologia",
    description: "Exame rápido e indolor da atividade elétrica do coração, captado por eletrodos posicionados no tórax e membros.",
    purpose: "Detecção de arritmias, sobrecarga das câmaras cardíacas e sinais de isquemia ou infarto.",
    iconName: "HeartPulse"
  },
  {
    id: "holter-24h",
    name: "Holter de 24 horas",
    category: "cardiologia",
    description: "Monitoramento contínuo do ritmo cardíaco durante toda a rotina diária do paciente por um período de 24 horas.",
    purpose: "Identificação de arritmias transitórias, palpitações inexplicadas e desmaios.",
    iconName: "Clock"
  },
  {
    id: "mapa",
    name: "MAPA (Monitorização Ambulatorial da Pressão Arterial)",
    category: "cardiologia",
    description: "Acompanha e registra a pressão arterial a intervalos regulares ao longo de 24 horas, inclusive durante o sono.",
    purpose: "Diagnóstico de hipertensão mascarada ou do jaleco branco e avaliação da eficácia de medicamentos.",
    iconName: "Stethoscope"
  },
  {
    id: "doppler-membros-inf",
    name: "Eco Color Doppler de Membros Inferiores (Venoso e Arterial)",
    category: "vascular",
    description: "Mapeia as veias e artérias das pernas através de ultrassom de alta resolução com fluxo colorido em tempo real.",
    purpose: "Diagnóstico preciso de varizes, trombose venosa profunda (TVP) e obstruções arteriais periféricas.",
    iconName: "Waves"
  },
  {
    id: "doppler-membros-sup",
    name: "Eco Color Doppler de Membros Superiores (Venoso e Arterial)",
    category: "vascular",
    description: "Avaliação ultrassonográfica vascular completa dos braços, antebraços e mãos.",
    purpose: "Investigação de inchaços, tromboses em membros superiores e planejamento de acessos vasculares.",
    iconName: "ShieldCheck"
  },
  {
    id: "doppler-carotidas",
    name: "Eco Color Doppler de Artérias Carótidas e Vertebrais",
    category: "vascular",
    description: "Exame minucioso dos vasos que irrigam o cérebro, identificando o espessamento das paredes e presença de placas de gordura.",
    purpose: "Prevenção e rastreio do risco de Acidente Vascular Cerebral (AVC / Derrame).",
    iconName: "Cpu"
  },
  {
    id: "doppler-aorta",
    name: "Eco Color Doppler de Aorta Abdominal e Artérias Ilíacas",
    category: "vascular",
    description: "Estudo ultrassonográfico da principal artéria do corpo em sua porção abdominal e suas bifurcações.",
    purpose: "Rastreio e acompanhamento de aneurismas de aorta abdominal (AAA) e estenoses ateroscleróticas.",
    iconName: "Layers"
  },
  {
    id: "doppler-fav",
    name: "Eco Color Doppler de Fístula Arteriovenosa (FAV)",
    category: "vascular",
    description: "Avaliação do calibre, fluxo e maturação de acessos vasculares para hemodiálise.",
    purpose: "Planejamento pré-operatório de confecção de fístula e vigilância de funcionamento para evitar oclusões.",
    iconName: "GitBranch"
  }
];

export const OTHER_CARDIOLOGY_SERVICES = "Avaliação de risco cardiovascular antes de cirurgias, acompanhamento de quem já teve infarto ou vive com insuficiência cardíaca, e investigação de valvopatias, sempre com apoio de ecocardiograma quando necessário.";

export const OTHER_VASCULAR_SERVICES = "Tratamento de vasinhos com escleroterapia e laser transdérmico, trombose venosa, úlceras vasculares, aneurisma de aorta, investigação de lipedema, confecção de fístula arteriovenosa e implante ou retirada de cateteres para hemodiálise e quimioterapia.";

export const SURGERY_HOSPITALS = {
  text: "As cirurgias mais frequentes, como endolaser e microcirurgia para varizes, angioplastias de artérias dos membros inferiores, confecção de fístula arteriovenosa e implante ou retirada de cateteres, são realizadas no Hospital Calixto Midlej Filho e no Hospital de Olhos Beira Rio.",
  hospitals: [
    { name: "Hospital Calixto Midlej Filho", city: "Itabuna - BA" },
    { name: "Hospital de Olhos Beira Rio", city: "Itabuna - BA" }
  ]
};

export const WARNING_SIGNS = {
  title: "Sinais de Alerta que Merecem Atenção",
  intro: "Conteúdo pensado para reforçar prevenção, sem gerar alarme desnecessário.",
  vascularSigns: [
    "Inchaço em uma única perna, diferente da outra.",
    "Dor em intervalos ao caminhar.",
    "Diminuição da sensibilidade nos pés.",
    "Alteração na cor da pele.",
    "Feridas que demoram para cicatrizar."
  ],
  cardioSigns: [
    "Aumento silencioso da pressão arterial.",
    "Palpitações.",
    "Dor no peito.",
    "Falta de ar."
  ],
  conclusion: "As doenças cardiológicas costumam começar de forma silenciosa e permanecer assim até uma complicação maior. O caminho mais seguro diante desses sinais é a procura por avaliação médica, não a espera até que o sintoma se intensifique."
};

export const FAQ_LIST: FAQItem[] = [
  {
    category: "geral",
    question: "O que a Cardo Clínica trata?",
    answer: "Cardiologia e cirurgia vascular. Isso inclui pressão alta, colesterol, doenças do coração, varizes, trombose e pé diabético, atendendo Itabuna e cidades vizinhas da região sul da Bahia."
  },
  {
    category: "geral",
    question: "Quais médicos atendem na Cardo Clínica?",
    answer: "A Dra. Eulina Maria dos Santos Chaves Cardoso, cardiologista, CRM 20685, e o Dr. João Cardoso Neto, cirurgião vascular, CRM 20684. Ambos com título de especialista e RQE ativo em suas áreas."
  },
  {
    category: "geral",
    question: "Onde fica a Cardo Clínica em Itabuna?",
    answer: "No Edifício Itabuna Trade Center, Avenida Princesa Isabel, nº 395, Sala 401, no Bairro Banco Raso, em Itabuna, Bahia, CEP 45607-291."
  },
  {
    category: "agendamento",
    question: "Como faço para marcar uma consulta?",
    answer: "Pelo WhatsApp (73) 98138 6868."
  },
  {
    category: "agendamento",
    question: "Quanto tempo dura a consulta?",
    answer: "Em média 30 minutos, tempo dedicado para investigar o caso com calma e explicar cada etapa ao paciente."
  },
  {
    category: "agendamento",
    question: "A Cardo Clínica atende por convênio ou só particular?",
    answer: "A Cardo Clínica atende somente no regime particular. Essa é uma escolha proposital: sem a pressão de tempo dos convênios, conseguimos dedicar mais atenção ao seu caso, com consulta sem pressa, escuta atenta e acompanhamento próximo, do primeiro exame ao retorno. Se quiser, podemos conversar sobre valores e formas de agendamento pelo WhatsApp (73) 98138 6868."
  },
  {
    category: "geral",
    question: "Quais exames a clínica realiza no próprio local?",
    answer: "Ecocardiograma, eletrocardiograma, Holter de 24 horas, MAPA e todos os tipos de Eco Color Doppler vascular, incluindo membros inferiores, membros superiores, carótidas e vertebrais, aorta abdominal e fístula arteriovenosa."
  },
  {
    category: "vascular",
    question: "Em qual hospital são feitas as cirurgias?",
    answer: "No Hospital Calixto Midlej Filho e no Hospital de Olhos Beira Rio."
  },
  {
    category: "agendamento",
    question: "Qual o horário de atendimento?",
    answer: "Segunda a sexta, das 8h às 12h e das 13h às 17h."
  },
  {
    category: "geral",
    question: "Quais cidades a clínica atende, além de Itabuna?",
    answer: "As cidades vizinhas da região sul da Bahia."
  },
  {
    category: "vascular",
    question: "A clínica trata varizes sem cirurgia tradicional?",
    answer: "Sim, com endolaser e laser transdérmico, técnicas pouco invasivas, com recuperação mais tranquila do que a cirurgia convencional."
  },
  {
    category: "vascular",
    question: "O tratamento de varizes é caro?",
    answer: "O valor varia conforme o estágio das varizes e a técnica indicada. A consulta inicial é o momento certo para entender as opções disponíveis e esclarecer qualquer dúvida sobre o procedimento, sem compromisso."
  },
  {
    category: "geral",
    question: "Cardiologista e cirurgião vascular são o mesmo tipo de médico?",
    answer: "Não. O cardiologista cuida do coração, e o cirurgião vascular cuida das veias e artérias, incluindo as das pernas. Na Cardo Clínica os dois trabalham próximos, o que ajuda quando o paciente precisa das duas especialidades ao mesmo tempo."
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 1,
    category: "Cardiologia Preventiva",
    readTime: "3 min de leitura",
    title: "Pressão alta não dói, mas pode custar caro no futuro.",
    summary: "Por que a hipertensão raramente dá sintomas até causar um evento grave, e como o MAPA ajuda a enxergar o que uma medição única não mostra.",
    fullOverview: "A pressão arterial elevada age continuamente contra as paredes arteriais sem manifestar dor aparente. A realização do exame MAPA (Monitorização Ambulatorial da Pressão Arterial por 24 horas) é fundamental para mapear os picos de pressão durante o sono e nas atividades rotineiras, permitindo condutas preventivas assertivas."
  },
  {
    id: 2,
    category: "Saúde Cardiovascular",
    readTime: "4 min de leitura",
    title: "Colesterol alto: o exame de sangue que muita gente ignora.",
    summary: "Como a dislipidemia se acumula silenciosamente e por que o acompanhamento contínuo importa mais do que um resultado isolado.",
    fullOverview: "O acúmulo de frações de lipoproteínas aterogênicas no interior das artérias evolui de modo assintomático por anos. Um exame laboratorial isolado deve ser avaliado dentro de uma estratificação global de risco cardiovascular com seu cardiologista."
  },
  {
    id: 3,
    category: "Cirurgia Vascular",
    readTime: "4 min de leitura",
    title: "Varizes começam antes de aparecer.",
    summary: "Peso, cansaço e queimação no trajeto das veias como sinais iniciais, antes mesmo de uma veia ficar visível.",
    fullOverview: "A insuficiência venosa crônica manifesta-se inicialmente por sensação de peso ao final da tarde e cansaço nos membros inferiores. O diagnóstico precoce com Eco Doppler previne o agravamento e possibilita procedimentos pouco invasivos com endolaser."
  },
  {
    id: 4,
    category: "Circulação Arterial",
    readTime: "3 min de leitura",
    title: "Dor ao caminhar pode não ser cansaço nem problema ortopédico.",
    summary: "A diferença entre dor muscular comum e a dor em intervalos ao caminhar, sinal clássico de obstrução arterial.",
    fullOverview: "A claudicação intermitente caracteriza-se pela dor reprodutível na panturrilha ou coxa após caminhar determinada distância que cessa com alguns minutos de repouso. É um forte indicativo de doença arterial obstrutiva periférica (DAOP)."
  },
  {
    id: 5,
    category: "Cuidados Especiais",
    readTime: "4 min de leitura",
    title: "Pé diabético: por que uma ferida pequena pode significar um risco grande.",
    summary: "A relação entre diabetes, circulação e sensibilidade dos pés.",
    fullOverview: "A perda da sensibilidade protetora somada ao comprometimento micro e macrovascular no diabetes requer inspeção clínica detalhada. O cuidado vascular especializado impede a progressão de lesões e infecções profundas."
  },
  {
    id: 6,
    category: "Exames Diagnósticos",
    readTime: "5 min de leitura",
    title: "ECG, Holter, MAPA e ecocardiograma: qual exame pedir para cada situação.",
    summary: "Um guia comparativo para responder buscas como diferença entre ECG e ecocardiograma.",
    fullOverview: "Enquanto o ECG avalia a atividade elétrica instantânea e o ecocardiograma avalia a estrutura anatômica e o bombeamento do músculo cardíaco com ultrassom, o Holter e o MAPA monitoram o ritmo e a pressão arterial por 24 horas contínuas."
  },
  {
    id: 7,
    category: "Avaliação Pré-Operatória",
    readTime: "3 min de leitura",
    title: "Antes da cirurgia, o coração também precisa de sinal verde.",
    summary: "Por que a avaliação de risco cardiovascular pré-operatório é pedida antes de procedimentos cirúrgicos.",
    fullOverview: "A estratificação de risco cirúrgico identifica com antecedência potenciais fatores de descompensação intra e pós-operatória, orientando a equipe cirúrgica e anestésica para a máxima segurança do paciente."
  }
];
