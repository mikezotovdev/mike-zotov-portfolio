import { RouteName } from '@/types/router'
import { Technology } from '@/types/technology'
import { ProgrammingLanguage } from '@/types/programming-language'
import { Tool } from '@/types/tool'

export const MESSAGES = {
  mikeZotov: 'Mike Zotov',
  nav: {
    about: 'About me',
    projects: 'Projects',
    contacts: 'Contacts'
  },
  footer: {
    about: '@:nav.about',
    projects: '@:nav.projects',
    contacts: '@:nav.contacts',
    shortTitle: '@:welcomeSection.shortTitle',
    copyright: 'Mike Zotov. All Rights Reserved.',
    links: 'Links'
  },
  routeNames: {
    home: RouteName.HOME_EN,
    projects: {
      root: RouteName.PROJECTS_EN,
      fluidFinance: RouteName.FLUID_FINANCE_EN,
      deepDao: RouteName.DEEP_DAO_EN,
      bookingEngine: RouteName.BOOKING_ENGINE_EN,
      clinicalTrials: RouteName.CLINICAL_TRIALS_EN,
      coronavirusVisualization: RouteName.CORONAVIRUS_VISUALIZATION_EN,
      scientificPublications: RouteName.SCIENTIFIC_PUBLICATIONS_EN,
      statisticalAnalysis: RouteName.STATISTICAL_ANALYSIS_EN,
      ticketsSaleOptimization: RouteName.TICKETS_SALE_OPTIMIZATION_EN,
      exhibitionManagement: RouteName.EXHIBITION_MANAGEMENT_EN,
      vegansurviveCommunity: RouteName.VEGANSURVIVE_COMMUNITY_EN,
      tourismTrafficArbitrage: RouteName.TOURISM_TRAFFIC_ARBITRAGE_EN,
      paidTraffic: RouteName.PAID_TRAFFIC_EN,
      webScraping: RouteName.WEB_SCRAPING_EN,
      personalPortfolio: RouteName.PERSONAL_PORTFOLIO_EN
    },
    contacts: RouteName.CONTACTS_EN
  },
  welcomeSection: {
    mike: 'Mike',
    zotov: 'Zotov',
    shortTitle: 'Senior Front-end Developer',
    about: '@:nav.about',
    projects: '@:nav.projects',
    skills: 'Skills',
    contacts: '@:nav.contacts',
    brief: 'I build user-friendly applications that people like.'
  },
  aboutSection: {
    about: '@:nav.about',
    aboutBlock: {
      p1: 'Hi! My name is Mike, I have built commercial apps since 2014. I know JavaScript (ES5+) superbly, write on TypeScript, and use Vue (2/3), Vuex, and Pinia on a daily basis. I\'m a punctual and sociable front-end developer with good soft skills.',
      p2: 'I write extendable and neat code, and know how to build scalable web applications. I pay attention to the details, edge-cases and stability of my solutions. On top of that, I easily get along with people and can lead a front-end team.',
      education: 'Education',
      educationList: {
        p1: '«Sreda obucheniya», Faculty of Contemporary Art;',
        p2: 'St. Petersburg State University, Mathematics & Mechanics Faculty (master of computer science);',
        p3: 'St. Petersburg State University, Mathematics & Mechanics Faculty (bachelor of computer science).'
      },
      photoAlt: 'Mike Zotov - photo'
    }
  },
  projectsPage: {
    project: 'Projects'
  },
  projectPage: {
    clientAndChallenge: 'Client and challenge',
    technologiesAndSolutions: 'Technologies and solutions',
    results: 'Results',
    position: 'Position in the project',
    technologyStack: 'Technology stack',
    toolsStack: 'Tools stack',
    screenshots: 'Screenshots',
    screenshotsUnavailable: 'The screenshots are not available due to the security policy of the given project.',
    links: 'Links'
  },
  projectsList: {
    fluidFinance: {
      title: 'Swiss neobank start-up',
      description: 'Implemented a bridge between CeFi and DeFi. Integrated 17 international and domestic money transfer types like SWIFT/SEPA/ACH/CLABE, 27 currencies + their fx, physical and virtual cards program. Implemented crypto buy and withdrawal via smart contract interaction and from the Kraken API.',
      position: 'Lead front-end developer',
      technologies: [
        Technology.VUE_3,
        ProgrammingLanguage.TS,
        Technology.PINIA,
        Technology.VUEX,
        Technology.DECIMAL_JS,
        Technology.WEB3,
        Technology.WALLET_CONNECT,
        Technology.ETHERS_JS,
        Technology.WAGMI,
        Technology.SCSS,
        Technology.VUELIDATE
      ],
      tools: [Tool.FIGMA, Tool.JIRA, Tool.GIT]
    },
    deepDao: {
      title: 'DAO crypto investments',
      description: 'Implemented a React application (Gatsby) to close the third round of funding for a startup. Integrated Web3 wallets and ABI of smart contracts DAI, USDC, and USDT. Added the ability to deposit tokens through smart contracts and display current balances.',
      position: 'Lead front-end developer',
      technologies: [
        Technology.REACT,
        Technology.GATSBY,
        Technology.WEB3,
        Technology.WALLET_CONNECT,
        Technology.ETHERS_JS,
        Technology.WAGMI,
        Technology.SCSS
      ],
      tools: [Tool.FIGMA, Tool.JIRA, Tool.GIT]
    },
    bookingEngine: {
      title: 'Booking engine system on Vue.js',
      description: 'Modern booking engine system on Vue.js. Set up the architecture of the web application and implemented most of the components and pages.',
      position: 'Senior front-end developer',
      technologies: [
        Technology.VUE_JS,
        Technology.SCSS,
        Technology.VUE_I18N,
        Technology.VUELIDATE,
        Technology.LODASH,
        Technology.DATE_FNS,
        Technology.SOFT_SKILLS
      ],
      tools: [Tool.JIRA, Tool.GIT, Tool.PHOTOSHOP]
    },
    clinicalTrials: {
      title: 'Clinical trials tracking system',
      description: 'Developed the front-end and the back-end for the biggest company in the pharmaceutical industry. Worked with different databases and published two major releases.',
      position: 'Full-stack developer',
      technologies: [
        Technology.ANGULAR_JS,
        Technology.LODASH,
        Technology.LESS,
        Technology.BOOTSTRAP,
        Technology.MATERIALIZECSS,
        Technology.ASP_NET,
        ProgrammingLanguage.C_SHARP,
        Technology.MS_SQL,
        Technology.MY_SQL,
        Technology.ORACLE
      ],
      tools: [Tool.JIRA, Tool.SVN, Tool.UI_UX]
    },
    coronavirusVisualization: {
      title: 'COVID-19 vaccines news portal and infection statistics',
      description: 'Run a news portal about COVID-19 vaccines and pushed the website to top-1 rank in SERP in two weeks. Helped Wordpress to get along with Vue.js application, which shows infection statistics.',
      position: 'PO/PM, SEO-specialist, full-stack developer',
      technologies: [
        Technology.VUE_JS,
        Technology.APEX_CHARTS,
        Technology.WORDPRESS,
        Technology.PHP,
        Technology.SEO,
        Technology.SOFT_SKILLS
      ],
      tools: [Tool.YANDEX_WORDSTAT, Tool.GIT, Tool.PHOTOSHOP, Tool.UI_UX]
    },
    scientificPublications: {
      title: 'Outcomes management system for researchers',
      description: 'The application makes it easy to work with documents for researchers. Automated the workflow of a scientific laboratory: now the import and generation of reports are performed instantly.',
      position: 'PM, full-stack developer, UI/UX',
      technologies: [
        Technology.ANGULAR_JS,
        Technology.NODE_JS,
        Technology.EXPRESS,
        Technology.LODASH,
        Technology.CHEERIO,
        Technology.MONGO_DB,
        Technology.PASSPORT_OAUTH,
        Technology.SCSS,
        Technology.MATERIALIZECSS,
        Technology.SOFT_SKILLS
      ],
      tools: [Tool.BITBUCKET, Tool.GIT, Tool.PHOTOSHOP, Tool.UI_UX]
    },
    statisticalAnalysis: {
      title: 'Statistical analysis system for complex algorithms',
      description: 'Built the app for empiric analysis of competing algorithms on the .NET framework (C#). The research results were published in academic journals and presented at international scientific conferences on artificial intelligence (AI).',
      position: 'Back-end developer, researcher',
      technologies: [
        Technology.DOT_NET,
        ProgrammingLanguage.C_SHARP,
        Technology.UNIT_TEST
      ],
      tools: [Tool.GIT]
    },
    ticketsSaleOptimization: {
      title: 'Optimizer for PPC-advertising',
      description: 'Developed a Vue.js application that calculates the exact profitable click cost for Google Ads and Yandex Direct, boosted the traffic by 100%. Thanks to the app I detected profitable and nonprofitable regions in the tourism niche and pushed my ads to the top-1 position.',
      position: 'Senior front-end developer, SEO-specialist',
      technologies: [
        Technology.VUE_JS,
        Technology.LODASH,
        Technology.APEX_CHARTS,
        Technology.WORDPRESS,
        Technology.SEO
      ],
      tools: [Tool.GOOGLE_ADS, Tool.YANDEX_METRIKA, Tool.YANDEX_DIRECT]
    },
    exhibitionManagement: {
      title: '3D-modeling, organizing, and event management',
      description: 'Organizing and preparing cultural events, creating posters, and art objects. Creating 3D models of exhibition spaces in Blender and 3ds Max and solving technical issues. Negotiating with partners and working for favorable terms.',
      position: '3D-modeler, art-manager',
      technologies: [Technology.SOFT_SKILLS],
      tools: [Tool.BLENDER, Tool.MAX_3DS, Tool.PHOTOSHOP]
    },
    vegansurviveCommunity: {
      title: 'Internet community vegansurvive',
      description: "Created the biggest vegan community and successfully lead the project for 7 years in a row! Developed brand clothes (merch) and took part in Falafel world's championship \uD83E\uDDC6.",
      position: 'PO, SEO/SMM-specialist',
      technologies: [
        Technology.VUE_JS,
        Technology.WORDPRESS,
        Technology.WOO_COMMERCE,
        Technology.WPML,
        Technology.SEO_SMM,
        Technology.SOFT_SKILLS
      ],
      tools: [Tool.PHOTOSHOP, Tool.ADOBE_PREMIERE_PRO, Tool.FL_STUDIO]
    },
    tourismTrafficArbitrage: {
      title: '3 million website visitors in the tourism niche',
      description: 'A banger project with 700K traffic per month. Analyzed regions profitability, performed crisis management, took all the cream off the market and literally closed the niche.',
      position: 'SEO and PPC specialist',
      technologies: [
        Technology.WORDPRESS,
        Technology.PHP,
        Technology.SEO
      ],
      tools: [Tool.GOOGLE_ADS, Tool.YANDEX_WORDSTAT, Tool.YANDEX_METRIKA, Tool.YANDEX_DIRECT]
    },
    paidTraffic: {
      title: 'Semantic cores and SE advertising',
      description: 'Created more that 30 semantic cores and 300 advertisements for Google Ads and Yandex Direct. Monetized various niches and gained huge traffic from organic and advertising.',
      position: 'PPC specialist',
      technologies: [
        Technology.VUE_JS,
        Technology.WORDPRESS,
        Technology.WOO_COMMERCE,
        Technology.WPML,
        Technology.SEO_SMM,
        Technology.SOFT_SKILLS
      ],
      tools: [Tool.PHOTOSHOP, Tool.ADOBE_PREMIERE_PRO, Tool.FL_STUDIO]
    },
    webScraping: {
      title: 'Websites parsing via Node.js and SEO',
      description: 'Built a PBN for legal niche traffic arbitrage. Optimized texts and doubled website traffic. Parsed the websites of competitors via Node.js and cheerio.',
      position: 'Back-end developer, SEO-specialist',
      technologies: [
        Technology.NODE_JS,
        Technology.CHEERIO,
        Technology.WORDPRESS,
        Technology.PHP,
        Technology.MY_SQL,
        Technology.SEO
      ],
      tools: [Tool.YANDEX_WORDSTAT, Tool.YANDEX_METRIKA]
    },
    personalPortfolio: {
      title: 'Personal portfolio site',
      description: 'It was required to organize the list of projects in which I took part in the form of a portfolio site. The development of the site itself resulted in another project with interesting tasks.',
      position: 'Senior front-end developer, SEO-specialist',
      technologies: [
        Technology.VUE_3,
        ProgrammingLanguage.TS,
        Technology.PINIA,
        Technology.VITE,
        Technology.SCSS,
        Technology.VUE_I18N,
        Technology.SSG,
        Technology.SEO
      ],
      tools: [Tool.GIT, Tool.PHOTOSHOP]
    }
  },
  skillsSection: {
    skills: 'Skills',
    skillsTitles: {
      verbalLanguages: 'Verbal languages',
      programmingLanguages: 'Programming languages',
      frameworksAndTechnologies: 'Frameworks and technologies',
      librariesAndPlugins: 'Libraries and plugins',
      softSkills: 'Soft skills'
    },
    skillsList: {
      verbalLanguages: [
        'English — advanced (C1)',
        'Russian — native',
        'Ukrainian — intermediate (B1)',
        'Dutch — beginner (~A1)'
      ],
      programmingLanguages: [
        ProgrammingLanguage.JS,
        ProgrammingLanguage.TS,
        ProgrammingLanguage.HTML,
        ProgrammingLanguage.SCSS_CSS,
        ProgrammingLanguage.TSQL,
        ProgrammingLanguage.C_SHARP,
        `${ProgrammingLanguage.PASCAL} \uD83D\uDE42`
      ],
      frameworksAndTechnologies: [
        Technology.VUE_JS,
        Technology.VUE_3,
        Technology.WEB3,
        Technology.ANGULAR_JS,
        Technology.NODE_JS,
        Technology.DOT_NET,
        Technology.MS_SQL,
        Technology.ORACLE,
        Technology.MY_SQL,
        Technology.MONGO_DB
      ],
      librariesAndPlugins: [
        Technology.PINIA,
        Technology.VUEX,
        Technology.WALLET_CONNECT,
        Technology.ETHERS_JS,
        Technology.WAGMI,
        Technology.VUE_I18N,
        Technology.VUE_ROUTER,
        Technology.VUELIDATE,
        Technology.AXIOS,
        Technology.DECIMAL_JS,
        Technology.JWT,
        Technology.VANILLA_JS,
        Technology.MATERIALIZECSS,
        Technology.BOOTSTRAP,
        Technology.LODASH,
        Technology.DATE_FNS,
        Technology.APEX_CHARTS
      ],
      softSkills: [
        'Working in a startup',
        'Leading a FE team',
        'Learnability',
        'Analytical (critical) thinking',
        'Problem-solving',
        'Decision-making',
        'Creativity',
        'Product owning',
        'Project management',
        'Teamwork',
        'Stress management',
        'Mentoring',
        'Flexibility and adaptability',
        'Communication'
      ]
    }
  },
  contactsSection: {
    contacts: 'Contacts',
    email: 'Email: ',
    linkedInBase: 'LinkedIn',
    linkedIn: 'LinkedIn: '
  },
  notFoundPage: {
    notFound: 'Page not found :('
  },
  misc: {
    readMore: 'Read more...',
    cvRus: 'CV (in Russian)',
    cvEng: 'CV (in English)',
    showMore: 'Show more projects',
    showLess: 'Show less projects',
    dark: 'Dark',
    light: 'Light',
    system: 'System'
  }
}
