import { RouteName } from '@/types/router'
import { Technology } from '@/types/technology'
import { Tool } from '@/types/tool'
import { ProgrammingLanguage } from '@/types/programming-language'

export const MESSAGES = {
  mikeZotov: 'Миша Зотов',
  nav: {
    about: 'Обо мне',
    projects: 'Проекты',
    contacts: 'Контакты'
  },
  footer: {
    about: '@:nav.about',
    projects: '@:nav.projects',
    contacts: '@:nav.contacts',
    shortTitle: '@:welcomeSection.shortTitle',
    copyright: 'Миша Зотов. Все права защищены.',
    links: 'Ссылки'
  },
  routeNames: {
    home: RouteName.HOME_RU,
    projects: {
      root: RouteName.PROJECTS_RU,
      fluidFinance: RouteName.FLUID_FINANCE_RU,
      deepDao: RouteName.DEEP_DAO_RU,
      bookingEngine: RouteName.BOOKING_ENGINE_RU,
      clinicalTrials: RouteName.CLINICAL_TRIALS_RU,
      coronavirusVisualization: RouteName.CORONAVIRUS_VISUALIZATION_RU,
      scientificPublications: RouteName.SCIENTIFIC_PUBLICATIONS_RU,
      statisticalAnalysis: RouteName.STATISTICAL_ANALYSIS_RU,
      ticketsSaleOptimization: RouteName.TICKETS_SALE_OPTIMIZATION_RU,
      exhibitionManagement: RouteName.EXHIBITION_MANAGEMENT_RU,
      vegansurviveCommunity: RouteName.VEGANSURVIVE_COMMUNITY_RU,
      tourismTrafficArbitrage: RouteName.TOURISM_TRAFFIC_ARBITRAGE_RU,
      paidTraffic: RouteName.PAID_TRAFFIC_RU,
      webScraping: RouteName.WEB_SCRAPING_RU,
      personalPortfolio: RouteName.PERSONAL_PORTFOLIO_RU
    },
    contacts: RouteName.CONTACTS_RU
  },
  welcomeSection: {
    mike: 'Миша',
    zotov: 'Зотов',
    shortTitle: 'Ведущий фронтенд разработчик',
    about: '@:nav.about',
    projects: '@:nav.projects',
    skills: 'Навыки',
    contacts: '@:nav.contacts',
    brief: 'Создаю удобные веб-приложения, которые нравятся людям.'
  },
  aboutSection: {
    about: '@:nav.about',
    aboutBlock: {
      p1: 'Привет! Меня зовут Миша, я занимаюсь коммерческой разработкой веб-приложений с 2014 года. Превосходно знаю JavaScript (ES5+), пишу на TypeScript, использую Vue (2/3), Vuex и Pinia. Я коммуникабельный и пунктуальный фронтенд разработчик с развитыми гибкими навыками.',
      p2: 'Знаю как реализовать веб-приложение любого масштаба, пишу расширяемый и понятный код. Уделяю внимание деталям, пограничным случаям и стабильности приложений. Умею лидировать фронтенд команду и хорошо уживаюсь в коллективе.',
      education: 'Образование',
      educationList: {
        p1: 'ВШ «Среда обучения», факультет современного искусства;',
        p2: 'СПбГУ, математико-механический факультет (магистр);',
        p3: 'СПбГУ, математико-механический факультет (бакалавр).'
      },
      photoAlt: 'Миша Зотов - фотография'
    }
  },
  projectsPage: {
    project: 'Проекты'
  },
  projectPage: {
    clientAndChallenge: 'Клиент и задача',
    technologiesAndSolutions: 'Технологии и решения',
    results: 'Результаты',
    position: 'Позиция в проекте',
    technologyStack: 'Стек технологий',
    toolsStack: 'Стек инструментов',
    screenshots: 'Скриншоты',
    screenshotsUnavailable: 'Скриншоты недоступны из-за политики конфиденциальности проекта.',
    links: 'Ссылки'
  },
  projectsList: {
    fluidFinance: {
      title: 'Швейцарский необанк с криптой',
      description: 'Интегрировал 17 международных и местных типов платежей (SWIFT/SEPA/ACH/CLABE/...), 27 валют и их конвертацию, программу физических и виртуальных карт. Реализовал покупку крипты и вывод ее через смарт-контракты, а также API Kraken\'а.',
      position: 'Ведущий фронтенд разработчик',
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
      title: 'DEEP DAO — $300K инвестиций через смарт-контракты',
      description: 'Создал приложение на React (Gatsby) для закрытия третьего раунда финансирования стартапа. Интегрировал Web3 кошельки и ABI смарт-контрактов DAI, USDC и USDT. Добавил возможность депозита токенов через смарт-контракты и отображение текущих балансов.',
      position: 'Ведущий фронтенд разработчик',
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
      title: 'Система бронирования авиабилетов',
      description: 'Современное адаптивное приложение по бронированию авиабилетов, разработанное на Vue.js. Спроектировал архитектуру фронтенда проекта, реализовал большинство компонентов и страниц приложения.',
      position: 'Ведущий фронтенд разработчик',
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
      title: 'Цикл приложений для отслеживания результатов клинических испытаний',
      description: 'Разработал клиентскую и серверную части приложений, помогающих обрабатывать результаты клинических испытаний медицинских препаратов одной крупной американской компании.',
      position: 'Фул-стек разработчик',
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
      title: 'Новостной портал о вакцинах и статистике заражения',
      description: 'Запустил новостной портал о разработке вакцин от коронавируса и вывел сайт в топ-1 Яндекса за две недели. Подружил Wordpress с приложением на Vue.js, отображающим статистику заражения коронавирусом.',
      position: 'PO/PM, SEO-специалист, фул-стек разработчик',
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
      title: 'Система учета научных достижений',
      description: 'Приложение, упрощающее жизнь научных сотрудников. Автоматизировал документооборот научной лаборатории: теперь импорт и генерация отчетов заданного образца о научной деятельности происходит мгновенно.',
      position: 'PM, фул-стек разработчик, UI/UX',
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
      title: 'Система статистического анализа сложностей алгоритмов',
      description: 'Создал инструмент для эмпирического анализа конкурирующих алгоритмов. Результаты исследований были опубликованы в научных журналах и представлены на международных конференциях по проблемам искусственного интеллекта.',
      position: 'Бекенд разработчик, научный сотрудник лаборатории',
      technologies: [
        Technology.DOT_NET,
        ProgrammingLanguage.C_SHARP,
        Technology.UNIT_TEST
      ],
      tools: [Tool.GIT]
    },
    ticketsSaleOptimization: {
      title: 'Оптимизатор стоимости клика контекстной рекламы',
      description: 'Разработал инструмент, который позволил просчитать точную безубыточную стоимость клика в Яндекс Директе и увеличить трафик сайта на 100%. Благодаря инструменту вычислил прибыльные и убыточные регионы в нише туризма и занял 1 позицию в рекламной выдаче по большинству регионов.',
      position: 'Ведущий фронтенд разработчик, SEO-специалист',
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
      title: '3D-моделирование, организация и менеджмент мероприятий',
      description: 'Организую и подготавливаю культурные мероприятия, создаю постеры и объекты искусства. Моделирую выставочные пространства и решаю технические вопросы, веду переговоры с партнерами и договариваюсь о выгодных условиях.',
      position: '3D-проектировщик, арт-менеджер',
      technologies: [Technology.SOFT_SKILLS],
      tools: [Tool.BLENDER, Tool.MAX_3DS, Tool.PHOTOSHOP]
    },
    vegansurviveCommunity: {
      title: 'Интернет-сообщество vegansurvive',
      description: 'Создал крупнейшее веган-сообщество и успешно продвигаю проект уже 7 лет. Разработал и выпустил брендовую линейку одежды и побывал на чемпионате мира по приготовлению фалафеля \uD83E\uDDC6.',
      position: 'PO, SEO/SMM-специалист',
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
      title: '3 миллиона посещений сайта в туристической нише',
      description: 'Создал проект-бенгер в туристической нише с ежемесячной посещаемостью в 700 тысяч пользователей. Проанализировал прибыльность регионов, выполнял кризис-менеджмент, снял все сливки с рынка и закрыл нишу.',
      position: 'Специалист по контекстной рекламе и SEO',
      technologies: [
        Technology.WORDPRESS,
        Technology.PHP,
        Technology.SEO
      ],
      tools: [Tool.GOOGLE_ADS, Tool.YANDEX_WORDSTAT, Tool.YANDEX_METRIKA, Tool.YANDEX_DIRECT]
    },
    paidTraffic: {
      title: 'Семантические ядра и рекламные объявления',
      description: 'Создал более тридцати семантических ядер и трехсот рекламных объявлений. Монетизировал различные ниши и собирал огромный трафик с органики и рекламы.',
      position: 'Специалист по контекстной рекламе',
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
      title: 'Парсинг сайтов и SEO',
      description: 'Создал сеть сайтов по арбитражу юридического трафика. Оптимизировал тексты и увеличил посещаемость сайтов в два раза.',
      position: 'Бекенд разработчик, SEO-специалист',
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
      title: 'Персональный сайт-портфолио',
      description: 'Требовалось организовать список проектов, в которых я принимал участие, в виде сайта-портфолио. Разработка самого сайта вылилась в еще один проект с интересными задачами.',
      position: 'Ведущий фронтенд разработчик, SEO-специалист',
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
    skills: 'Навыки',
    skillsTitles: {
      verbalLanguages: 'Вербальные языки',
      programmingLanguages: 'Языки программирования',
      frameworksAndTechnologies: 'Фреймворки и технологии',
      librariesAndPlugins: 'Библиотеки и плагины',
      softSkills: 'Гибкие навыки'
    },
    skillsList: {
      verbalLanguages: [
        'Английский — продвинутый (C1)',
        'Русский — носитель',
        'Украинский — средний (B1)',
        'Нидерландский — начальный (~A1)'
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
        'Работа в стартапе',
        'Лидирование фронтенд команды',
        'Обучаемость',
        'Аналитическое (критическое) мышление',
        'Решение проблем',
        'Принятие решений',
        'Креативность',
        'Командная работа',
        'Владение продуктом',
        'Управление проектами',
        'Стресс-менеджмент',
        'Менторство',
        'Гибкость и адаптивность',
        'Коммуникабельность'
      ]
    }
  },
  contactsSection: {
    contacts: 'Контакты',
    email: 'Электронная почта: ',
    linkedInBase: 'LinkedIn',
    linkedIn: 'LinkedIn: '
  },
  notFoundPage: {
    notFound: 'Страница не найдена :('
  },
  misc: {
    readMore: 'Читать далее...',
    cvRus: 'CV (на русском)',
    cvEng: 'CV (на английском)',
    showMore: 'Показать больше проектов',
    showLess: 'Показать меньше проектов',
    dark: 'Темная',
    light: 'Светлая',
    system: 'Системная'
  }
}
