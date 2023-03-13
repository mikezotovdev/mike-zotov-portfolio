import { RouteName, SearchBot } from '@/types/router'
import { ABOUT_THEME, CONTACTS_THEME, PROJECT_THEME } from '@/consts/theme'
import { APP_URL_BASE } from '@/consts/router'
import { Locale } from '@/types/i18n'
import ProjectsPage from '@/components/projects/ProjectsPage.vue'
import ContactsPage from '@/components/contacts/ContactsPage.vue'
import AboutPage from '@/components/about/AboutPage.vue'
import type { RouteRecordRaw } from 'vue-router'

export const DEFAULT_META_EN = {
  siteName: 'Mike Zotov - front-end developer',
  applicationName: 'Mike Zotov - front-end developer',
  robots: SearchBot.INDEX_FOLLOW,
  locale: Locale.EN
}

export const ROUTES_EN: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.HOME_EN,
    component: AboutPage,
    meta: {
      ...DEFAULT_META_EN,
      title: 'Mike Zotov - Senior Front-end Developer',
      description: 'The portfolio of a senior front-end developer Mike Zotov. Vue.js (2/3), and JavaScript (TS) expert with a computer science background.',
      url: APP_URL_BASE,
      theme: ABOUT_THEME,
      image: `${APP_URL_BASE}/sharing/home/about.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.HOME_RU }
      }
    }
  },
  {
    path: '/projects/',
    name: RouteName.PROJECTS_EN,
    component: ProjectsPage,
    meta: {
      ...DEFAULT_META_EN,
      title: 'Vuejs portfolio projects - cases and solutions | Mike Zotov',
      description: 'Here are the projects on which I worked as a front-end developer, a full-stack developer, or an SEO-specialist. Screenshots and more.',
      url: `${APP_URL_BASE}/projects/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/projects/projects.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.PROJECTS_RU }
      }
    }
  },
  {
    path: '/contacts/',
    name: RouteName.CONTACTS_EN,
    component: ContactsPage,
    meta: {
      ...DEFAULT_META_EN,
      title: 'Contacts | Mike Zotov',
      description: 'My contacts. Email: mikezotovdev@gmail.com, LinkedIn: linkedin.com/in/mike-zotov/.',
      url: `${APP_URL_BASE}/contacts/`,
      theme: CONTACTS_THEME,
      image: `${APP_URL_BASE}/sharing/contacts/contacts.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.CONTACTS_RU }
      }
    }
  },
  {
    path: '/projects/booking-engine/',
    name: RouteName.BOOKING_ENGINE_EN,
    component: () => import('@/components/projects/booking-engine/BookingEnginePage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'Booking engine system on Vuejs | Mike Zotov',
      description: 'Developed the front-end of a booking engine system for an airline company on Vue.js with an adaptive design. Set up the architecture of the app and implemented most of the components and pages.',
      url: `${APP_URL_BASE}/projects/booking-engine/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/booking-engine/booking-engine-system-on-vue-js.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.BOOKING_ENGINE_RU }
      }
    }
  },
  {
    path: '/projects/clinical-trials/',
    name: RouteName.CLINICAL_TRIALS_EN,
    component: () => import('@/components/projects/clinical-trials/ClinicalTrialsPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'Clinical trials tracking system | Mike Zotov',
      description: 'Developed the front-end and the back-end for the biggest company in the pharmaceuticals industry. Used AngularJS and .NET C#, worked with different databases like MySQL, MS SQL, and Oracle.',
      url: `${APP_URL_BASE}/projects/clinical-trials/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/clinical-trials/clinical-trials-tracking-system.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.CLINICAL_TRIALS_RU }
      }
    }
  },
  {
    path: '/projects/coronavirus-visualization/',
    name: RouteName.CORONAVIRUS_VISUALIZATION_EN,
    component: () => import('@/components/projects/coronavirus-visualization/CoronavirusVisualizationPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'News portal about COVID-19 vaccines and infection statistics | Mike Zotov',
      description: 'Run a news portal about COVID-19 vaccines and pushed the website to top-1 rank in SERP. Helped Wordpress to get along with Vue.js statistical SPA.',
      url: `${APP_URL_BASE}/projects/coronavirus-visualization/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/coronavirus-visualization/covid-19-vaccines-new-portal-and-infection-statistics.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.CORONAVIRUS_VISUALIZATION_RU }
      }
    }
  },
  {
    path: '/projects/scientific-publications/',
    name: RouteName.SCIENTIFIC_PUBLICATIONS_EN,
    component: () => import('@/components/projects/scientific-publications/ScientificPublicationsPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'Outcomes management system for researchers RADOMS | Mike Zotov',
      description: 'Built the app that makes it easy to work with documents for researchers. Automated the reports producing and importing via MEAN stack: AngularJS, Node.js, Express, and MongoDB.',
      url: `${APP_URL_BASE}/projects/scientific-publications/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/scientific-publications/outcomes-management-system-for-researchers.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.SCIENTIFIC_PUBLICATIONS_RU }
      }
    }
  },
  {
    path: '/projects/statistical-analysis/',
    name: RouteName.STATISTICAL_ANALYSIS_EN,
    component: () => import('@/components/projects/statistical-analysis/StatisticalAnalysisPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'Statistical analysis system for complex algorithms | Mike Zotov',
      description: 'Built the app for empiric analysis of competing algorithms on the .NET framework (C#). Published the results in academic journals, and spoke at international scientific conferences on artificial intelligence (AI).',
      url: `${APP_URL_BASE}/projects/statistical-analysis/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/statistical-analysis/statistical-analysis-system-for-complex-algorithms.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.STATISTICAL_ANALYSIS_RU }
      }
    }
  },
  {
    path: '/projects/tickets-sale-optimization/',
    name: RouteName.TICKETS_SALE_OPTIMIZATION_EN,
    component: () => import('@/components/projects/tickets-sale-optimization/TicketsSaleOptimizationPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'Optimizer for PPC-advertising | Mike Zotov',
      description: 'Developed a Vue.js application that calculates the exact profitable click cost for Google Ads and Yandex Direct. Boost the traffic by 100%. Detected profitable regions and became top-1 advertiser.',
      url: `${APP_URL_BASE}/projects/tickets-sale-optimization/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/tickets-sale-optimization/optimizer-for-ppc-advertising.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.TICKETS_SALE_OPTIMIZATION_RU }
      }
    }
  },
  {
    path: '/projects/exhibition-management/',
    name: RouteName.EXHIBITION_MANAGEMENT_EN,
    component: () => import('@/components/projects/exhibition-management/ExhibitionManagementPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: '3D-modeling, organizing and event-management | Mike Zotov',
      description: 'Organizing and preparing cultural events, creating posters, and art objects. Creating 3D models of exhibition spaces in Blender and 3ds Max and solving technical issues. Negotiating with partners and working for favorable terms.',
      url: `${APP_URL_BASE}/projects/exhibition-management/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/exhibition-management/3d-modeling-organizing-and-event-management.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.EXHIBITION_MANAGEMENT_RU }
      }
    }
  },
  {
    path: '/projects/vegansurvive-community/',
    name: RouteName.VEGANSURVIVE_COMMUNITY_EN,
    component: () => import('@/components/projects/vegansurvive-community/VegansurviveCommunityPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'Internet community vegansurvive | Mike Zotov',
      description: 'Created the biggest vegan community and successfully lead the project for 7 years in a row! Developed brand clothes (merch) and took part in Falafel world\'s championship 🧆.',
      url: `${APP_URL_BASE}/projects/vegansurvive-community/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/vegansurvive-community/internet-community-vegansurvive.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.VEGANSURVIVE_COMMUNITY_RU }
      }
    }
  },
  {
    path: '/projects/tourism-traffic-arbitrage/',
    name: RouteName.TOURISM_TRAFFIC_ARBITRAGE_EN,
    component: () => import('@/components/projects/tourism-traffic-arbitrage/TourismTrafficArbitragePage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: '3 million website visitors in tourism niche | Mike Zotov',
      description: 'A banger project with 700K traffic per month. Analyzed regions profitability, performed crisis management, took all the cream off the market and literally closed the niche.',
      url: `${APP_URL_BASE}/projects/tourism-traffic-arbitrage/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/tourism-traffic-arbitrage/tourism-traffic-arbitrage.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.TOURISM_TRAFFIC_ARBITRAGE_RU }
      }
    }
  },
  {
    path: '/projects/paid-traffic/',
    name: RouteName.PAID_TRAFFIC_EN,
    component: () => import('@/components/projects/paid-traffic/PaidTrafficPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'Semantic cores and advertising in Google Ads and Yandex Direct | Mike Zotov',
      description: 'Created more than 30 semantic cores and 300 advertisements for Google Ads and Yandex Direct. Monetized various niches and gained huge traffic from organic and advertising.',
      url: `${APP_URL_BASE}/projects/paid-traffic/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/paid-traffic/paid-traffic.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.PAID_TRAFFIC_RU }
      }
    }
  },
  {
    path: '/projects/web-scraping-and-seo/',
    name: RouteName.WEB_SCRAPING_EN,
    component: () => import('@/components/projects/web-scraping/WebScrappingPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'Websites scraping via Nodejs and SEO | Mike Zotov',
      description: 'Built a PBN for legal niche traffic arbitrage. Optimized texts and doubled website traffic. Parsed the websites of competitors via Node.js and cheerio.',
      url: `${APP_URL_BASE}/projects/web-scraping-and-seo/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/web-scraping/web-scraping-and-seo.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.WEB_SCRAPING_RU }
      }
    }
  },
  {
    path: '/projects/personal-portfolio/',
    name: RouteName.PERSONAL_PORTFOLIO_EN,
    component: () => import('@/components/projects/personal-portfolio/PersonalPortfolioPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'Personal portfolio site | Mike Zotov',
      description: 'How I built the website and what challenges I faced. Internationalization of the routing, Vue 3, TypeScript, SSG, SEO, responsive design, css grid, dark theme, and more.',
      url: `${APP_URL_BASE}/projects/personal-portfolio/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/personal-portfolio/personal-portfolio.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.PERSONAL_PORTFOLIO_RU }
      }
    }
  },
  {
    path: '/projects/fluid-finance/',
    name: RouteName.FLUID_FINANCE_EN,
    component: () => import('@/components/projects/fluid-finance/FluidFinancePage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'Swiss neobank super-app with crypto | Mike Zotov',
      description: 'How I built a banking application that provides on/off ramp for crypto with Vue 3 and TypeScript. Integration with banking providers, physical and virtual cards, savings, and Web 3 services.',
      url: `${APP_URL_BASE}/projects/fluid-finance/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/fluid-finance/swiss-neo-bank-start-up.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.FLUID_FINANCE_RU }
      }
    }
  },
  {
    path: '/projects/deep-dao/',
    name: RouteName.DEEP_DAO_EN,
    component: () => import('@/components/projects/deep-dao/DeepDaoPage.vue'),
    meta: {
      ...DEFAULT_META_EN,
      title: 'DAO crypto investments | Mike Zotov',
      description: 'Here is a story about how I integrated with Web 3 tools like Wallet Connect, ethers.js, and wagmi using React and Gatsby. SSR application for rising DAI, USDC, and USDT funds via smart contracts.',
      url: `${APP_URL_BASE}/projects/deep-dao/`,
      theme: PROJECT_THEME,
      image: `${APP_URL_BASE}/sharing/projects/deep-dao/dao-crypto-investments.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.DEEP_DAO_RU }
      }
    }
  }
]
