import type {
  ProfileData,
  ExperienceItem,
  EducationItem,
  ResearchTheme,
  LanguageSkill,
  SkillCategory,
  NavigationLink
} from '@/types/portfolio'

export const navigationLinks: NavigationLink[] = [
  {
    key: 'profile',
    href: '#profilo',
    label: { it: 'Profilo', en: 'Profile' }
  },
  {
    key: 'trajectory',
    href: '#percorso',
    label: { it: 'Percorso', en: 'Trajectory' }
  },
  {
    key: 'research',
    href: '#ricerca',
    label: { it: 'Ricerca & Ambiti', en: 'Research & Fields' }
  },
  {
    key: 'skills',
    href: '#competenze',
    label: { it: 'Competenze', en: 'Competencies' }
  },
  {
    key: 'contact',
    href: '#contatti',
    label: { it: 'Contatti', en: 'Contact' }
  }
]

export const profileData: ProfileData = {
  name: "Gaia D'Alessio",
  roleTitle: {
    it: 'Laureata in Relazioni Internazionali',
    en: 'International Relations Graduate'
  },
  subTitle: {
    it: 'Analisi Istituzionale, Cooperazione Sovranazionale & Tutela dei Diritti Umani',
    en: 'Institutional Analysis, Supranational Cooperation & Human Rights Advocacy'
  },
  birthDate: '19/08/2002',
  birthDateFormatted: {
    it: '19 Agosto 2002',
    en: 'August 19, 2002'
  },
  nationality: {
    it: 'Italiana',
    en: 'Italian'
  },
  drivingLicense: {
    it: 'Patente B (Automunita)',
    en: 'Driving License Category B'
  },
  residence: {
    it: 'Sansepolcro (AR) 52037',
    en: 'Sansepolcro (Arezzo), Italy'
  },
  domicile: {
    it: 'Perugia 06123',
    en: 'Perugia, Italy'
  },
  phone: '(+39) 393 060 2659',
  email: 'gaiadalessio9@gmail.com',
  linkedinUrl: 'https://www.linkedin.com',
  cvDownloadUrl: '/_GAIA_DALESSIO_CV_.pdf',
  avatarUrl: '/gaia_dalessio.jpg',
  editorialStatement: {
    it: "Profilo accademico in Relazioni Internazionali conseguito presso l'Università degli Studi di Perugia, arricchito da esperienze dirette nel terzo settore internazionale con Amnesty International Italia e nel coordinamento di segreteria operativa. Coniugo rigore metodologico, competenze giuridico-economiche, analisi quantitativa dei fenomeni demografici e una vocazione naturale per la cooperazione diplomatica e la tutela dei diritti fondamentali.",
    en: "Academic background in International Relations from the University of Perugia, enhanced by direct field engagement with Amnesty International Italy and rigorous administrative coordination. Bringing together legal and economic foundations, quantitative demographic analysis, and an innate dedication to diplomacy, multilateral dialogue, and universal human rights advocacy."
  },
  narrativeBio: {
    it: [
      "Nata nel 2002 e cresciuta tra Sansepolcro e Perugia, ho orientato con determinazione il mio percorso di studi verso lo studio delle dinamiche geopolitiche, del diritto multilaterale e delle istituzioni europee.",
      "L'esperienza di tirocinio presso Amnesty International Italia ha rappresentato un banco di prova fondamentale, consentendomi di applicare le nozioni teoriche sul diritto internazionale umanitario e di collaborare attivamente a campagne di sensibilizzazione e difesa dei diritti civili.",
      "Parallelamente, l'attività svolta nel settore dei servizi e dell'intermediazione immobiliare con Mediocasa ha sviluppato una spiccata attitudine alla precisione organizzativa, all'ascolto attivo, alla gestione tempestiva delle scadenze e al problem solving sotto stress.",
      "Il mio profilo accademico unisce la profondità interpretativa degli esami giuridici ed economici a strumenti quantitativi essenziali — statistica inferenziale, demografia e probabilità — completati dalla certificazione ufficiale DELE B2 in lingua spagnola e da una solida padronanza della lingua inglese."
    ],
    en: [
      "Born in 2002 and based between Sansepolcro and Perugia, I intentionally oriented my academic trajectory towards geopolitical dynamics, multilateral governance, and European institutional frameworks.",
      "My internship with Amnesty International Italy offered a decisive proving ground, allowing me to bridge theoretical knowledge of international humanitarian law with hands-on advocacy, briefing preparation, and human rights campaigns.",
      "Concurrently, my professional experience in administrative coordination and real estate front-office operations at Mediocasa fostered acute organizational discipline, attentive stakeholder communication, and resilient problem-solving under tight timelines.",
      "My academic profile pairs nuanced legal and economic comprehension with quantitative acumen — descriptive and inferential statistics, probability, and demography — complemented by official DELE B2 Spanish certification and fluent English proficiency."
    ]
  },
  focusAreas: [
    {
      title: {
        it: 'Diritti Umani & Tutela Civile',
        en: 'Human Rights & Civil Protection'
      },
      description: {
        it: 'Monitoraggio delle convenzioni sovranazionali, redazione di dossier e partecipazione a campagne di advocacy sul campo maturate con Amnesty International.',
        en: 'Monitoring supranational conventions, dossier preparation, and active engagement in human rights advocacy campaigns developed with Amnesty International.'
      },
      tag: {
        it: 'Advocacy & ONG',
        en: 'Advocacy & NGOs'
      }
    },
    {
      title: {
        it: 'Diritto Sovranazionale & UE',
        en: 'Supranational & EU Law'
      },
      description: {
        it: 'Solida comprensione degli assetti normativi comunitari, delle fonti di diritto internazionale pubblico e privato e dei trattati interstatali.',
        en: 'Robust understanding of European legal frameworks, public and private international law sources, and treaty architecture.'
      },
      tag: {
        it: 'Diritto Istituzionale',
        en: 'Institutional Law'
      }
    },
    {
      title: {
        it: 'Economia Politica Globale',
        en: 'Global Political Economy'
      },
      description: {
        it: 'Analisi dei mercati internazionali, interdipendenze commerciali, politiche monetarie e gestione aziendale orientata al contesto estero.',
        en: 'Analysis of international market systems, trade interdependencies, macroeconomic policies, and cross-border organizational management.'
      },
      tag: {
        it: 'Geoeconomia',
        en: 'Geoeconomics'
      }
    },
    {
      title: {
        it: 'Statistica & Demografia',
        en: 'Statistics & Demographics'
      },
      description: {
        it: 'Padronanza metodologica per l’elaborazione quantitativa di campioni demografici, modelli probabilistici e inferenziali a supporto del policy-making.',
        en: 'Quantitative methodologies for demographic sampling, probability models, and inferential analysis supporting evidence-based policymaking.'
      },
      tag: {
        it: 'Metodi Quantitativi',
        en: 'Quantitative Methods'
      }
    }
  ]
}

export const experiencesData: ExperienceItem[] = [
  {
    id: 'amnesty-international',
    organization: 'Amnesty International Italia',
    role: {
      it: 'Tirocinio — Diritti Umani & Advocacy Civile',
      en: 'Internship — Human Rights & Civic Advocacy'
    },
    roleCategory: {
      it: 'Tirocinio Curriculare / No-Profit Internazionale',
      en: 'Curricular Internship / International NGO'
    },
    period: {
      it: 'Periodo Formativo Curriculare',
      en: 'Academic Training Period'
    },
    location: {
      it: 'Perugia, Italia',
      en: 'Perugia, Italy'
    },
    description: {
      it: "Esperienza formativa sul campo all'interno della sezione italiana della più autorevole organizzazione non governativa indipendente per la tutela e la promozione dei diritti umani.",
      en: "Field training within the Italian chapter of the world's foremost independent non-governmental organization dedicated to defending human rights globally."
    },
    highlights: {
      it: [
        "Approfondimento sistematico delle convenzioni internazionali sui diritti umani e dei protocolli umanitari sovranazionali.",
        "Supporto alle attività di ricerca documentale, consultazione di fonti internazionali e predisposizione di materiali informativi.",
        "Partecipazione attiva a progetti di sensibilizzazione civica, mobilitazione della cittadinanza e difesa dei prigionieri di coscienza.",
        "Sviluppo di una rigorosa etica professionale orientata al dialogo imparziale e alla cooperazione umanitaria."
      ],
      en: [
        "Systematic examination of international human rights conventions and supranational humanitarian protocols.",
        "Support in documentary research, consulting international sources, and preparing structured briefings.",
        "Active participation in civic mobilization, public awareness campaigns, and advocacy for prisoners of conscience.",
        "Cultivation of rigorous professional ethics grounded in impartial inquiry and humanitarian cooperation."
      ]
    },
    accentColor: '#B76E59'
  },
  {
    id: 'mediocasa',
    organization: 'Mediocasa — Rete Immobiliare',
    role: {
      it: 'Lavoro di Segreteria & Coordinamento Operativo',
      en: 'Administrative Secretary & Operations Coordinator'
    },
    roleCategory: {
      it: 'Attività Professionale / Front & Back Office',
      en: 'Professional Role / Front & Back Office'
    },
    period: {
      it: 'Esperienza Lavorativa',
      en: 'Professional Experience'
    },
    location: {
      it: 'Sansepolcro (AR), Italia',
      en: 'Sansepolcro (Arezzo), Italy'
    },
    description: {
      it: "Gestione integrale dei servizi di segreteria, front-office relazionale, archiviazione pratiche e coordinamento delle comunicazioni esterne.",
      en: "Comprehensive management of front-office reception, administrative correspondence, archival compliance, and external stakeholder relations."
    },
    highlights: {
      it: [
        "Accoglienza qualificata della clientela e gestione dei canali di comunicazione telefonica ed epistolare.",
        "Pianificazione strategica dell'agenda di studio, calendarizzazione degli appuntamenti e rispetto puntuale delle scadenze.",
        "Archiviazione meticolosa, catalogazione e verifica della correttezza formale della documentazione contrattuale.",
        "Capacità dimostrata di mantenere lucidità, precisione e cortesia anche in situazioni ad alta pressione temporale."
      ],
      en: [
        "Qualified front-desk client reception and courteous management of phone and written inquiries.",
        "Strategic appointment scheduling, calendar coordination, and meticulous compliance with deadlines.",
        "Document cataloging, filing, and rigorous formal verification of contractual and administrative papers.",
        "Demonstrated composure, attention to detail, and problem-solving efficiency during high-volume operational cycles."
      ]
    },
    accentColor: '#7A8471'
  }
]

export const educationData: EducationItem[] = [
  {
    id: 'unipg-relazioni-internazionali',
    institution: 'Università degli Studi di Perugia',
    degree: {
      it: 'Laurea Triennale in Relazioni Internazionali',
      en: "Bachelor's Degree in International Relations"
    },
    department: {
      it: 'Dipartimento di Scienze Politiche',
      en: 'Department of Political Science'
    },
    period: {
      it: 'Percorso Accademico Completato',
      en: 'Completed Academic Curriculum'
    },
    location: {
      it: 'Perugia, Italia',
      en: 'Perugia, Italy'
    },
    overview: {
      it: "Corso di studi ad alta caratura interdisciplinare strutturato per fornire una comprensione organica dei fenomeni globali attraverso l'intersezione di quattro pilastri fondamentali: giuridico, economico, linguistico e statistico-demografico.",
      en: "Interdisciplinary degree program designed to provide deep structural understanding of global phenomena through four intersecting pillars: legal, economic, linguistic, and statistical-demographic methodologies."
    },
    disciplines: [
      {
        category: {
          it: 'Ambito Giuridico',
          en: 'Legal Framework'
        },
        courses: {
          it: [
            'Diritto dell’Unione Europea',
            'Diritto Internazionale',
            'Diritto Pubblico',
            'Diritto Privato'
          ],
          en: [
            'European Union Law',
            'Public International Law',
            'Constitutional & Public Law',
            'Private & Civil Law'
          ]
        },
        description: {
          it: "Studio approfondito dell'ordinamento comunitario, della giurisprudenza della Corte di Giustizia UE, dei trattati sovranazionali, delle convenzioni bilaterali e delle garanzie costituzionali dello Stato moderno.",
          en: "In-depth study of EU legal order, ECJ jurisprudence, supranational treaty architecture, bilateral conventions, and constitutional guarantees of contemporary states."
        }
      },
      {
        category: {
          it: 'Ambito Economico & Manageriale',
          en: 'Economic & Managerial Framework'
        },
        courses: {
          it: [
            'Economia Politica',
            'Economia Politica Internazionale',
            'Management Aziendale'
          ],
          en: [
            'Political Economy',
            'International Political Economy',
            'Business & Organizational Management'
          ]
        },
        description: {
          it: 'Modelli micro e macroeconomici, bilance dei pagamenti, istituzioni finanziarie globali (FMI, Banca Mondiale, OMC), catene del valore e logiche decisionali delle organizzazioni complesse.',
          en: 'Micro and macroeconomic modeling, balance of payments, global financial governance (IMF, World Bank, WTO), supply chain dynamics, and organizational decision-making.'
        }
      },
      {
        category: {
          it: 'Ambito Linguistico Specialistico',
          en: 'Linguistic Specialization'
        },
        courses: {
          it: [
            'Lingua Inglese per le Scienze Sociali',
            'Lingua Spagnola e Diplomazia'
          ],
          en: [
            'English for Social Sciences',
            'Spanish for International Relations'
          ]
        },
        description: {
          it: 'Padronanza del lessico diplomatico, socio-politico e giuridico in lingua straniera; redazione di sintesi esecutive, traduzione di atti ufficiali e consultazione critica di report internazionali.',
          en: 'Command of diplomatic, socio-political, and legal terminology in foreign languages; drafting executive summaries and critically parsing primary international documentation.'
        }
      },
      {
        category: {
          it: 'Ambito Statistico & Demografico',
          en: 'Quantitative & Demographic Framework'
        },
        courses: {
          it: [
            'Statistica Descrittiva',
            'Statistica Inferenziale',
            'Calcolo delle Probabilità',
            'Demografia'
          ],
          en: [
            'Descriptive Statistics',
            'Inferential Statistics',
            'Probability Theory',
            'Global Demography'
          ]
        },
        description: {
          it: 'Metodologie quantitative per la stima campionaria, verifica delle ipotesi, analisi delle serie storiche, dinamiche di natalità, mortalità e flussi migratori applicati ai processi geopolitici.',
          en: 'Quantitative methodologies for sample estimation, hypothesis testing, time series analysis, and demographic modeling (fertility, mortality, migration flows) applied to geopolitics.'
        }
      }
    ]
  }
]

export const researchThemes: ResearchTheme[] = [
  {
    id: 'theme-human-rights',
    romanIndex: 'I',
    title: {
      it: 'Convenzioni Sovranazionali e Tutela dei Diritti Fondamentali',
      en: 'Supranational Conventions and Fundamental Rights Protection'
    },
    field: {
      it: 'Diritto Internazionale Umanitario & Terzo Settore',
      en: 'International Humanitarian Law & Civil Society'
    },
    context: {
      it: "Approfondimento sviluppato anche alla luce dell'attività con Amnesty International Italia sul ruolo delle ONG nel monitoraggio dei trattati internazionali e nella denuncia delle violazioni sistematiche.",
      en: "Exploration informed by field experience with Amnesty International Italy on the pivotal role of NGOs in monitoring international covenants and exposing systematic violations."
    },
    methodology: {
      it: 'Analisi comparata delle fonti giurisprudenziali internazionali e monitoraggio dei report di organismi intergovernativi (ONU, Consiglio d’Europa).',
      en: 'Comparative analysis of international judicial sources and systematic review of intergovernmental monitoring reports (UN, Council of Europe).'
    },
    keyThemes: {
      it: [
        'Efficacia vincolante dei trattati umanitari multilaterali',
        'Ruolo delle organizzazioni non governative nella diplomazia pubblica',
        'Garanzie procedurali per la salvaguardia dei rifugiati e richiedenti asilo'
      ],
      en: [
        'Binding efficacy of multilateral humanitarian treaties',
        'Role of non-governmental organizations in track-two diplomacy',
        'Procedural safeguards for refugees and asylum seekers'
      ]
    }
  },
  {
    id: 'theme-eu-law',
    romanIndex: 'II',
    title: {
      it: "L'Ordinamento dell'Unione Europea: Integrazione e Sovranità",
      en: 'The European Union Legal Order: Integration and Sovereignty'
    },
    field: {
      it: 'Diritto dell’Unione Europea & Governance Istituzionale',
      en: 'European Union Law & Institutional Governance'
    },
    context: {
      it: "Analisi della complessa dialettica tra ordinamenti nazionali e diritto comunitario, con particolare attenzione al principio del primato e all'evoluzione delle politiche comuni.",
      en: 'Analysis of the dialectic between national constitutional orders and EU community law, focusing on the primacy principle and the evolution of shared policies.'
    },
    methodology: {
      it: 'Studio esegetico dei trattati istitutivi (TUE, TFUE) e disamina dei leading cases della Corte di Giustizia di Lussemburgo.',
      en: 'Exegetical study of founding treaties (TEU, TFEU) and analysis of landmark judgments by the Court of Justice in Luxembourg.'
    },
    keyThemes: {
      it: [
        'Efficacia diretta e primato del diritto dell’Unione',
        'Equilibrio di poteri tra Commissione, Consiglio e Parlamento Europeo',
        'Processi decisionali e convergenza nelle politiche estere e di sicurezza comune'
      ],
      en: [
        'Direct effect and supremacy of European Union law',
        'Inter-institutional balance between Commission, Council, and Parliament',
        'Decision-making procedures and convergence in common foreign and security policy'
      ]
    }
  },
  {
    id: 'theme-global-economy',
    romanIndex: 'III',
    title: {
      it: 'Economia Politica Internazionale e Interdipendenze di Mercato',
      en: 'International Political Economy and Market Interdependencies'
    },
    field: {
      it: 'Relazioni Economiche Internazionali & Management',
      en: 'International Economic Relations & Management'
    },
    context: {
      it: "Esame delle trasformazioni del commercio globale, delle tensioni tariffarie e del ruolo delle istituzioni multilaterali nella stabilizzazione dei mercati emergenti.",
      en: 'Examination of global trade transformations, tariff diplomacy, and the stabilizing role of multilateral financial institutions across emerging economies.'
    },
    methodology: {
      it: 'Incrocio di modelli teorici macroeconomici con l’analisi empirica dei flussi commerciali e delle dinamiche di catena del valore aziendale.',
      en: 'Cross-referencing macroeconomic theoretical models with empirical trade flow data and corporate value chain logistics.'
    },
    keyThemes: {
      it: [
        'Governance del commercio internazionale e disciplina OMC',
        'Impatto delle sanzioni economiche sulle economie interconnesse',
        'Strategie di management e resilienza organizzativa'
      ],
      en: [
        'International trade governance and WTO dispute resolution',
        'Impact of economic sanctions across interconnected economies',
        'Organizational management strategies and cross-border resilience'
      ]
    }
  },
  {
    id: 'theme-demographics',
    romanIndex: 'IV',
    title: {
      it: 'Metodologie Statistiche e Trend Demografici Globali',
      en: 'Statistical Methodologies and Global Demographic Trends'
    },
    field: {
      it: 'Statistica Inferenziale & Demografia Internazionale',
      en: 'Inferential Statistics & Global Demography'
    },
    context: {
      it: 'Applicazione dei metodi quantitativi per comprendere la transizione demografica, l’invecchiamento della popolazione e le grandi rotte migratorie mondiali.',
      en: 'Application of quantitative methods to assess demographic transition stages, population aging, and global migratory corridors.'
    },
    methodology: {
      it: 'Elaborazione di indici demografici (tassi di fecondità, mortalità, saldo migratorio) e test di ipotesi statistica per la validazione dei trend.',
      en: 'Computation of demographic indices (fertility, mortality, net migration) and statistical hypothesis testing for trend validation.'
    },
    keyThemes: {
      it: [
        'Interpretazione di indicatori demografici complessi per le politiche pubbliche',
        'Modellizzazione probabilistica e campionamento per indagini sociali',
        'Correlazione tra mutamenti demografici e sostenibilità dei sistemi previdenziali'
      ],
      en: [
        'Interpreting complex demographic indicators for public policy',
        'Probabilistic modeling and sample design for social research',
        'Correlations between demographic shifts and welfare sustainability'
      ]
    }
  }
]

export const languageSkills: LanguageSkill[] = [
  {
    name: { it: 'Italiano', en: 'Italian' },
    levelText: { it: 'Madrelingua', en: 'Native Speaker' },
    cefrLevel: 'C2',
    description: {
      it: 'Padronanza madrelingua, eccellente competenza linguistica, argomentativa e stilistica sia in contesti formali/accademici che operativi.',
      en: 'Native proficiency with refined stylistic, rhetorical, and analytical precision across both formal academic discourse and operational contexts.'
    }
  },
  {
    name: { it: 'Spagnolo', en: 'Spanish' },
    levelText: { it: 'Livello B2 Certificato', en: 'Certified B2' },
    cefrLevel: 'B2',
    certification: {
      it: 'Certificazione Ufficiale DELE B2',
      en: 'Official DELE B2 Certification'
    },
    certifyingEntity: 'Instituto Cervantes',
    description: {
      it: "Certificazione ufficiale rilasciata dall'Instituto Cervantes. Piena autonomia nella comprensione di testi complessi, conduzione di relazioni professionali e redazione di testi articolati.",
      en: 'Official diploma awarded by Instituto Cervantes. Full operational autonomy in understanding complex texts, conducting professional exchanges, and drafting articulate arguments.'
    }
  },
  {
    name: { it: 'Inglese', en: 'English' },
    levelText: { it: 'Livello Intermedio (B2)', en: 'Intermediate Level (B2)' },
    cefrLevel: 'B2',
    certification: {
      it: 'Idoneità Linguistica Accademica',
      en: 'Academic Language Proficiency'
    },
    certifyingEntity: 'Università degli Studi di Perugia',
    description: {
      it: 'Esami universitari curriculari sostenuti con profitto. Consultazione quotidiana di fonti dottrinali e report internazionali in lingua originale; comunicazione fluida in contesti professionali.',
      en: 'Successfully completed university curriculum requirements. Regular review of foreign academic literature and international reports; confident professional communication.'
    }
  }
]

export const transversalSkills: SkillCategory[] = [
  {
    title: {
      it: 'Metodo, Analisi & Ricerca',
      en: 'Methodology, Analysis & Research'
    },
    subtitle: {
      it: 'Capacità analitiche e rigore deduttivo derivati dalla formazione interdisciplinare',
      en: 'Analytical capacity and deductive rigor derived from interdisciplinary training'
    },
    items: [
      {
        name: { it: 'Problem Solving Strategico', en: 'Strategic Problem Solving' },
        description: {
          it: 'Capacità di scomporre questioni complesse in variabili gestibili, individuando soluzioni tempestive e ponderate.',
          en: 'Ability to deconstruct multifaceted issues into actionable parameters, formulating timely and balanced solutions.'
        }
      },
      {
        name: { it: 'Attenzione Meticolosa ai Dettagli', en: 'Meticulous Attention to Detail' },
        description: {
          it: 'Cura rigorosa nella redazione di documenti ufficiali, contrattualistica, note informative e dossier di ricerca.',
          en: 'Meticulous precision in reviewing official documentation, contractual terms, informative briefings, and research dossiers.'
        }
      },
      {
        name: { it: 'Elaborazione Quantitativa & Statistica', en: 'Quantitative & Statistical Processing' },
        description: {
          it: 'Competenza nell’analisi di dati inferenziali, demografici e probabilistici per supportare decisioni basate su evidenze.',
          en: 'Competence in inferential, demographic, and probabilistic data analysis to substantiate evidence-based decision making.'
        }
      }
    ]
  },
  {
    title: {
      it: 'Relazione, Comunicazione & Teamwork',
      en: 'Interpersonal, Communication & Teamwork'
    },
    subtitle: {
      it: 'Competenze relazionali affinate nel no-profit, nel front office e nel dialogo accademico',
      en: 'Interpersonal acumen honed in non-profit advocacy, front-office coordination, and academic debate'
    },
    items: [
      {
        name: { it: 'Capacità Comunicative & Sintesi', en: 'Communication & Executive Synthesis' },
        description: {
          it: 'Chiarezza espositiva sia scritta che orale, adattamento del registro linguistico all’interlocutore e public speaking.',
          en: 'Articulate written and oral presentation, adaptive register calibration for institutional audiences, and public speaking.'
        }
      },
      {
        name: { it: 'Collaborazione all’Interno di un Gruppo', en: 'Collaborative Team Dynamics' },
        description: {
          it: 'Spiccata propensione al lavoro di squadra, ascolto attivo, cooperazione orizzontale e valorizzazione del contributo altrui.',
          en: 'Proactive orientation towards cooperative teamwork, active listening, horizontal alignment, and mutual empowerment.'
        }
      },
      {
        name: { it: 'Sensibilità Istituzionale & Terzo Settore', en: 'Institutional Sensitivity & NGO Ethos' },
        description: {
          it: 'Consapevolezza etica, rispetto delle diversità culturali e dedizione all’advocacy per cause di interesse pubblico e umanitario.',
          en: 'Ethical awareness, cultural sensitivity, and genuine commitment to public interest advocacy and humanitarian protection.'
        }
      }
    ]
  },
  {
    title: {
      it: 'Organizzazione, Gestione & Resilienza',
      en: 'Organization, Management & Resilience'
    },
    subtitle: {
      it: 'Pratiche operative per la gestione dei flussi di lavoro in contesti dinamici',
      en: 'Operational practices for workflow mastery in dynamic work environments'
    },
    items: [
      {
        name: { it: 'Capacità Organizzative & Pianificazione', en: 'Organizational Planning & Prioritization' },
        description: {
          it: 'Definizione metodica delle priorità operative, coordinamento di calendari complessi e monitoraggio delle scadenze.',
          en: 'Methodical prioritization of operational tasks, scheduling complex agendas, and rigorous deadline tracking.'
        }
      },
      {
        name: { it: 'Capacità di Lavorare Sotto Stress', en: 'Composure & High-Pressure Resilience' },
        description: {
          it: 'Tenuta emotiva e lucidità cognitiva costante anche a fronte di carichi operativi concentrati e scadenze inderogabili.',
          en: 'Sustained cognitive clarity and emotional composure under demanding workloads and immovable delivery targets.'
        }
      },
      {
        name: { it: 'Segreteria & Back-Office Direzionale', en: 'Executive Secretarial & Back-Office' },
        description: {
          it: 'Gestione riservata della corrispondenza, archiviazione documentale digitale e cartacea, accoglienza professionale.',
          en: 'Confidential correspondence management, structured digital and physical filing, and executive reception standards.'
        }
      }
    ]
  }
]
