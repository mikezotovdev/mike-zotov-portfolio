import { RouteName, SearchBot } from '@/types/router'
import { ABOUT_THEME, CONTACTS_THEME, PROJECT_THEME } from '@/consts/theme'
import { APP_URL_BASE } from '@/consts/router'
import { Locale } from '@/types/i18n'
import ProjectsPage from '@/components/projects/ProjectsPage.vue'
import ContactsPage from '@/components/contacts/ContactsPage.vue'
import AboutPage from '@/components/about/AboutPage.vue'
import type { RouteRecordRaw } from 'vue-router'

export const DEFAULT_META_RU = {
  siteName: 'Миша Зотов - фронтенд разработчик',
  applicationName: 'Миша Зотов - фронтенд разработчик',
  robots: SearchBot.INDEX_FOLLOW,
  locale: Locale.RU
}

export const ROUTES_RU: RouteRecordRaw[] = [
  {
    path: '/ru/',
    name: RouteName.HOME_RU,
    component: AboutPage,
    meta: {
      ...DEFAULT_META_RU,
      title: 'Миша Зотов - ведущий фронтенд разработчик',
      description: 'Портфолио ведущего фронтенд разработчика Миши Зотова. JavaScript и Vue.js (2/3) эксперт со знаниями SEO.',
      url: `${APP_URL_BASE}/ru/`,
      theme: ABOUT_THEME,
      image: `${APP_URL_BASE}/sharing/home/obo-mne.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.HOME_EN }
      }
    }
  },
  {
    path: '/ru/proekty/',
    name: RouteName.PROJECTS_RU,
    component: ProjectsPage,
    meta: {
      ...DEFAULT_META_RU,
      title: 'Проекты на Vuejs и SEO-продвижение | Миша Зотов',
      description: 'Список проектов, в которых я участвовал как веб-разработчик. Скриншоты интерфейсов и метрик проектов. Фронтенд и фул-стек разработка, SEO-продвижение и управление командами разработки.',
      url: `${APP_URL_BASE}/ru/proekty/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/projects/proekty.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.PROJECTS_EN }
      }
    }
  },
  {
    path: '/ru/kontakty/',
    name: RouteName.CONTACTS_RU,
    component: ContactsPage,
    meta: {
      ...DEFAULT_META_RU,
      title: 'Контакты | Миша Зотов',
      description: 'Контакты для связи. Почта: mikezotovdev@gmail.com, LinkedIn: linkedin.com/in/mike-zotov/',
      url: `${APP_URL_BASE}/ru/kontakty/`,
      theme: CONTACTS_THEME,
      image: `${APP_URL_BASE}/sharing/contacts/kontakty.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.CONTACTS_EN }
      }
    }
  },
  {
    path: '/ru/proekty/sistema-bronirovaniya-aviabiletov-na-vue-js/',
    name: RouteName.BOOKING_ENGINE_RU,
    component: () => import('@/components/projects/booking-engine/BookingEnginePage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Система бронирования авиабилетов на Vuejs | Миша Зотов',
      description: 'Разработал фронтенд системы бронирования авиабилетов для крупной авиакомпании на Vue.js. Спроектировал архитектуру проекта, реализовал большинство компонентов и страниц адаптивного веб-приложения.',
      url: `${APP_URL_BASE}/ru/proekty/sistema-bronirovaniya-aviabiletov-na-vue-js/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/booking-engine/sistema-bronirovaniya-aviabiletov-na-vue-js.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.BOOKING_ENGINE_EN }
      }
    }
  },
  {
    path: '/ru/proekty/klinicheskie-ispytaniya/',
    name: RouteName.CLINICAL_TRIALS_RU,
    component: () => import('@/components/projects/clinical-trials/ClinicalTrialsPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Цикл приложений отслеживания клинических испытаний | Миша Зотов',
      description: 'Разработал клиентскую и серверную части приложений, помогающих обрабатывать результаты клинических испытаний медицинских препаратов крупной американской компании. Фул-стек разработка на AngularJS и .NET C#.',
      url: `${APP_URL_BASE}/ru/proekty/klinicheskie-ispytaniya/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/clinical-trials/klinicheskie-ispytaniya.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.CLINICAL_TRIALS_EN }
      }
    }
  },
  {
    path: '/ru/proekty/novostnoj-portal-o-vakcinax-i-statistike-zarazheniya-koronavirusom/',
    name: RouteName.CORONAVIRUS_VISUALIZATION_RU,
    component: () => import('@/components/projects/coronavirus-visualization/CoronavirusVisualizationPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Новостной портал о вакцинах и статистике заражения | Миша Зотов',
      description: 'Запустил новостной портал о разработке вакцин от коронавируса и вывел сайт в топ-1 Яндекса за две недели. Подружил Wordpress с приложением на Vue.js, отображающим статистику заражения коронавирусом.',
      url: `${APP_URL_BASE}/ru/proekty/novostnoj-portal-o-vakcinax-i-statistike-zarazheniya-koronavirusom/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/coronavirus-visualization/novostnoj-portal-o-vakcinax-i-statistike-zarazheniya.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.CORONAVIRUS_VISUALIZATION_EN }
      }
    }
  },
  {
    path: '/ru/proekty/sistema-ucheta-nauchnyx-dostizhenij-radoms/',
    name: RouteName.SCIENTIFIC_PUBLICATIONS_RU,
    component: () => import('@/components/projects/scientific-publications/ScientificPublicationsPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Система учета научных достижений RADOMS | Миша Зотов',
      description: 'Приложение, упрощающее жизнь научных сотрудников. Автоматизировал документооборот научной лаборатории: теперь импорт и генерация отчетов заданного образца о научной деятельнности происходит мгновенно с помощью AngularJS, Node.js, Express и  MongoDB.',
      url: `${APP_URL_BASE}/ru/proekty/sistema-ucheta-nauchnyx-dostizhenij-radoms/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/scientific-publications/sistema-ucheta-nauchnyx-dostizhenij.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.SCIENTIFIC_PUBLICATIONS_EN }
      }
    }
  },
  {
    path: '/ru/proekty/sistema-statisticheskogo-analiza-slozhnostej-algoritmov-na-dot-net/',
    name: RouteName.STATISTICAL_ANALYSIS_RU,
    component: () => import('@/components/projects/statistical-analysis/StatisticalAnalysisPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Система статистического анализа сложностей алгоритмов | Миша Зотов',
      description: 'Создал инструмент на .NET C# для эмпирического анализа конкурирующих алгоритмов. Результаты исследований были опубликованы в научных журналах и представлены на международных конференциях по проблемам искусственного интеллекта.',
      url: `${APP_URL_BASE}/ru/proekty/sistema-statisticheskogo-analiza-slozhnostej-algoritmov-na-dot-net/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/statistical-analysis/sistema-statisticheskogo-analiza-slozhnostej-algoritmov-na-dot-net.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.STATISTICAL_ANALYSIS_EN }
      }
    }
  },
  {
    path: '/ru/proekty/optimizator-stoimosti-klika-kontekstnoj-reklamy/',
    name: RouteName.TICKETS_SALE_OPTIMIZATION_RU,
    component: () => import('@/components/projects/tickets-sale-optimization/TicketsSaleOptimizationPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Оптимизатор стоимости клика контекстной рекламы | Миша Зотов',
      description: 'Разработал инструмент на Vue.js, который позволил просчитать точную безубыточную стоимость клика в Яндекс Директе и увеличить трафик сайта на 100%. Благодаря инструменту вычислил прибыльные и убыточные регионы в нише туризма и занял 1 позицию в рекламной выдаче по большинству регионов.',
      url: `${APP_URL_BASE}/ru/proekty/optimizator-stoimosti-klika-kontekstnoj-reklamy/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/tickets-sale-optimization/optimizator-stoimosti-klika-kontekstnoj-reklamy.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.TICKETS_SALE_OPTIMIZATION_EN }
      }
    }
  },
  {
    path: '/ru/proekty/3d-modelirovanie-organizaciya-i-menedzhment-meropriyatij/',
    name: RouteName.EXHIBITION_MANAGEMENT_RU,
    component: () => import('@/components/projects/exhibition-management/ExhibitionManagementPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: '3D-моделирование, организация и менеджмент мероприятий | Миша Зотов',
      description: 'Организую и подготавливаю культурные мероприятия, создаю постеры и объекты искусства. Моделирую выставочные пространства в Blender и 3ds Max и решаю технические вопросы, веду переговоры с партнерами и договариваюсь о выгодных условиях.',
      url: `${APP_URL_BASE}/ru/proekty/3d-modelirovanie-organizaciya-i-menedzhment-meropriyatij/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/exhibition-management/3d-modelirovanie-organizaciya-i-menedzhment-meropriyatij.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.EXHIBITION_MANAGEMENT_EN }
      }
    }
  },
  {
    path: '/ru/proekty/internet-soobshhestvo-vegansurvive/',
    name: RouteName.VEGANSURVIVE_COMMUNITY_RU,
    component: () => import('@/components/projects/vegansurvive-community/VegansurviveCommunityPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Интернет-сообщество vegansurvive | Миша Зотов',
      description: 'Создал крупнейшее веган-сообщество и успешно продвигаю проект уже 7 лет. Разработал и выпустил брендовую линейку одежды и побывал на чемпионате мира по приготовлению фалафеля 🧆.',
      url: `${APP_URL_BASE}/ru/proekty/internet-soobshhestvo-vegansurvive/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/vegansurvive-community/internet-soobschestvo-vegansurvive.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.VEGANSURVIVE_COMMUNITY_EN }
      }
    }
  },
  {
    path: '/ru/proekty/3-milliona-poseshhenij-sajta-v-turisticheskoj-nishe/',
    name: RouteName.TOURISM_TRAFFIC_ARBITRAGE_RU,
    component: () => import('@/components/projects/tourism-traffic-arbitrage/TourismTrafficArbitragePage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: '3 миллиона посещений сайта в туристической нише | Миша Зотов',
      description: 'Создал проект-бенгер в туристической нише с ежемесячной посещаемостью в 700 тысяч пользователей. Проанализировал прибыльность регионов, выполнял кризис-менеджмент, снял все сливки с рынка и закрыл нишу.',
      url: `${APP_URL_BASE}/ru/proekty/3-milliona-poseshhenij-sajta-v-turisticheskoj-nishe/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/tourism-traffic-arbitrage/3-milliona-poseshhenij-sajta-v-turisticheskoj-nishe.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.TOURISM_TRAFFIC_ARBITRAGE_EN }
      }
    }
  },
  {
    path: '/ru/proekty/semanticheskie-yadra-i-reklamnye-obyavleniya/',
    name: RouteName.PAID_TRAFFIC_RU,
    component: () => import('@/components/projects/paid-traffic/PaidTrafficPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Семантические ядра и рекламные объявления для Директа и Google Ads | Миша Зотов',
      description: 'Создал более тридцати семантических ядер и трехсот рекламных объявлений для Яндекс Директа и Google Ads. Монетизировал различные ниши и собирал огромный трафик с органики и рекламы.',
      url: `${APP_URL_BASE}/ru/proekty/semanticheskie-yadra-i-reklamnye-obyavleniya/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/paid-traffic/semanticheskie-yadra-i-reklamnye-obyavleniya.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.PAID_TRAFFIC_EN }
      }
    }
  },
  {
    path: '/ru/proekty/parsing-sajtov-i-seo/',
    name: RouteName.WEB_SCRAPING_RU,
    component: () => import('@/components/projects/web-scraping/WebScrappingPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Парсинг сайтов с помощью Nodejs и SEO | Миша Зотов',
      description: 'Создал сеть сайтов PBN по арбитражу юридического трафика. Оптимизировал тексты и увеличил посещаемость сайтов в два раза. Парсил сайты конкурентов с помощью Node.js и cheerio.',
      url: `${APP_URL_BASE}/ru/proekty/parsing-sajtov-i-seo/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/web-scraping/parsing-sajtov-i-seo.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.WEB_SCRAPING_EN }
      }
    }
  },
  {
    path: '/ru/proekty/personalnyj-sajt-portfolio/',
    name: RouteName.PERSONAL_PORTFOLIO_RU,
    component: () => import('@/components/projects/personal-portfolio/PersonalPortfolioPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Персональный сайт-портфолио | Миша Зотов',
      description: 'О том, как я создавал свое собственное портфолио и с какими вызовами столкнулся. Интернационализация роутинга, Vue 3, TypeScript, vite, SSG, SEO, адаптивный дизайн, css grid, темная тема и многое другое.',
      url: `${APP_URL_BASE}/ru/proekty/personalnyj-sajt-portfolio/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/personal-portfolio/personalnyj-sajt-portfolio.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.PERSONAL_PORTFOLIO_EN }
      }
    }
  },
  {
    path: '/ru/proekty/shvejcarskij-neobank-s-kriptoj/',
    name: RouteName.FLUID_FINANCE_RU,
    component: () => import('@/components/projects/fluid-finance/FluidFinancePage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Швейцарский необанк с криптой | Миша Зотов',
      description: 'Как я разработал банковское приложение с нуля и интегрировал в него крипто-кошелек. Vue 3, TypeScript, интеграция с банковскими и карточными провайдерами, эфириум, веб 3, он/офф рэмп и смарт-контракты.',
      url: `${APP_URL_BASE}/ru/proekty/shvejcarskij-neobank-s-kriptoj/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/fluid-finance/shvejcarskij-neobank-s-kriptoj.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.FLUID_FINANCE_EN }
      }
    }
  },
  {
    path: '/ru/proekty/dao-fandrajzing/',
    name: RouteName.DEEP_DAO_RU,
    component: () => import('@/components/projects/deep-dao/DeepDaoPage.vue'),
    meta: {
      ...DEFAULT_META_RU,
      title: 'Фандрайзинг на смарт-контрактах и DAO | Миша Зотов',
      description: 'Разработал приложение на React (Gatsby) для фандрайзинга DAI, USDC и USDT. Интеграция SSR-приложения с Wallet Connect, ethers.js и wagmi. Заработали $300K в первые дни запуска.',
      url: `${APP_URL_BASE}/ru/proekty/dao-fandrajzing/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/deep-dao/dao-fandrajzing.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.DEEP_DAO_EN }
      }
    }
  }
]
