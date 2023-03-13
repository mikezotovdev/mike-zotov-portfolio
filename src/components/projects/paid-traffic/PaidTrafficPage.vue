<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppLinksList from '@/components/utils/app-links-list/AppLinksList.vue'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'Семантические ядра и рекламные объявления для Яндекс Директа и Google Ads',
        clientAndChallenge: 'Для множества собственных и внешних проектов требовалось создавать семантические ядра и рекламные объявления для Яндекс Директ, Google AdWords и Facebook Ads Manager, проводить анализ ниш. Создание семантического ядра включает в себя парсинг запросов, кластеризацию, парсинг подсветок, поиск тематических слов, составление списка минус-слов и конкурентов. Требовалось создавать ТЗ для копирайтеров, редактировать существующие тексты (рерайтинг, копирайтинг) и анализировать конкурентов, выявляя их преимущества и недостатки. Для проектов было необходимо создание кликабельных, "сочных" заголовков объявлений, проведение A/B тестирования объявлений, поиск посадочных страниц с наибольшей конверсией, автоматизация генерации страниц сайтов для арбитража трафика. Проекты юридической тематики требовали парсинг других сайтов, создание инструментов автоматического рерайтинга статей и автоматической публикации статей на сайтах.',
        technologiesAndSolutions: 'Для сбора запросов использовался Яндекс Wordstat, кластеризация и сбор подсветок производились с помощью онлайн-инструментов с последующей ручной обработкой. Рекламные объявления создавались с учетом объявлений конкурентов, были созданы веб-приложения для автоматизации создания объявлений и их размещения в Яндекс Директе и Google AdWords. Проводился пост-анализ трафика сайта и оптимизация объявлений, обновление списка минус-слов, уточнение запросов, сужение регионов показа, кластеризация объявлений по регионам, написание отдельных объявлений и создание отдельных кампаний для более прибыльных регионов. Созданные ТЗ для копирайтеров позволили получить тексты с необходимыми метриками, позволяющие упростить вывод сайта на необходимую видимость в поисковике Яндекс. Для некоторых проектов дополнительно требовалось связать работу внешних CRM с сайтом, для чего были реализованы специальные плагины и интеграции.',
        results: 'Грамотная структура сайтов и качественно проработанные семантические ядра позволили привлечь органический трафик уже в первые недели после запуска сайтов. Благодаря высокому уровню рекламных объявлений и комплексу инструментов автоматизации, многие рекламные объявления проектов заняли первые места в рекламной выдаче, что позволило привлечь большой трафик на сайты. Большинство сайтов в течение трех-четырех недель вышли в топ-7 первой страницы органической выдачи Яндекса, примерно половина из них вышла в топ-2 еще через два-три месяца. Персональный рекорд — вывод в топ-3 органики Яндекса за неделю, в топ-1 — за две. Привлеченный органический трафик позволил снизить цену за клик в рекламных объявлениях, а на некоторых проектах, после анализа прибыльности, полностью отключить рекламу и перейти исключительно на заработок с органического трафика. Точный просчет стоимости клика в рекламных объявлениях позволил проектам долгое время существовать исключительно за счет платного трафика.',
        links: [
          {
            link: 'https://docs.google.com/spreadsheets/d/1uaN_k85UBXF_vKg1EKPZm0jUBM6qrgqg75SmAXFPYi8/edit#gid=235554991',
            text: 'Семантическое ядро по туризму (путешествия на Пхукет)'
          },
          {
            link: 'https://docs.google.com/spreadsheets/d/1C-pBBatEXrGf5CZYTTnr8E10lo_L6sXPBpOOjx99wmE/edit#gid=1328984839',
            text: 'Семантическое ядро по йоге'
          },
          {
            link: 'https://docs.google.com/spreadsheets/d/1UvkIM0wez92NuJWSJOzJO6Cyp1NrfC5HhPO7lK3c_ZM/edit#gid=1969052959',
            text: 'Семантическое ядро по кормам для животных'
          }
        ]
      }
    },
    [Locale.EN]: {
      local: {
        title: 'Semantic cores and SE advertising in Google and Yandex',
        clientAndChallenge: 'For many of my own and external projects, it was required to create semantic cores and advertisements for Yandex Direct, Google AdWords and Facebook Ads Manager, and to analyze niches. The creation of a semantic core includes parsing queries (keywords), clustering, parsing highlights, searching for thematic words, compiling a list of negative keywords and competitors. It was required to create technical requirements for copywriters, edit existing texts (rewriting, copywriting) and analyze competitors, identifying their advantages and disadvantages. For projects, it was necessary to create clickable, "juicy" ad titles, perform A/B testing of ads, search for landing pages with the highest conversion, and automate the generation of site pages for traffic arbitrage. Legal projects required parsing of other sites, the creation of tools for automatic rewriting of articles and automatic publication of articles on sites.',
        technologiesAndSolutions: 'To collect keywords, Yandex Wordstat was used, clustering and collection of highlights were performed using online tools with subsequent manual processing. Advertisements were created taking into account the ads of competitors, web applications were created to automate the creation of ads and their placement in Yandex Direct and Google AdWords. Post-analysis of site traffic and optimization of ads, updating the list of negative keywords, clarifying queries (keywords), reducing display regions, clustering ads by region, writing separate ads and creating separate campaigns for more profitable regions was carried out. The created technical requirements for copywriters made it possible to obtain texts with the necessary metrics, which make it easy to get a higher rank in search engines. For some projects, it was additionally required to link the work of external CRM with the site, for which special plugins and integrations were implemented.',
        results: 'The correct structure of the sites and well-developed semantic cores allowed to attract organic traffic in the first weeks after the launch of the sites. Due to the high quality of advertisements and a set of automation tools, many project advertisements took first places in the advertising results, which allowed to attract a lot of traffic to the sites. Most sites within three to four weeks reached the top 7 of the first page of Yandex organic search results, about half of them reached the top 2 after another two or three months. Personal record — getting to the top 3 Yandex organics in a week, to the top 1 in two. The attracted organic traffic allowed to reduce the cost per click in advertisements, and on some projects, after analyzing the profitability, completely disable advertising and switch exclusively to earnings from organic traffic. Accurate calculation of the cost per click in advertisements allowed projects to exist for a long time solely due to paid traffic.',
        links: [
          {
            link: 'https://docs.google.com/spreadsheets/d/1uaN_k85UBXF_vKg1EKPZm0jUBM6qrgqg75SmAXFPYi8/edit#gid=235554991',
            text: 'Tourism semantic core — Phuket travel (in Russian)'
          },
          {
            link: 'https://docs.google.com/spreadsheets/d/1C-pBBatEXrGf5CZYTTnr8E10lo_L6sXPBpOOjx99wmE/edit#gid=1328984839',
            text: 'Semantic core for yoga (in Russian)'
          },
          {
            link: 'https://docs.google.com/spreadsheets/d/1UvkIM0wez92NuJWSJOzJO6Cyp1NrfC5HhPO7lK3c_ZM/edit#gid=1969052959',
            text: 'Semantic core for holistic feeds (in Russian)'
          }
        ]
      }
    }
  }

  const i18n = useI18n({
    messages
  })
</script>

<template>
  <AppArticle>
    <template #title>
      {{ i18n.t('local.title') }}
    </template>
    <template #client-and-task>
      <p>{{ i18n.t('local.clientAndChallenge') }}</p>
    </template>
    <template #technologies>
      <p>{{ i18n.t('local.technologiesAndSolutions') }}</p>
    </template>
    <template #results>
      <p>{{ i18n.t('local.results') }}</p>
    </template>

    <template #position>
      {{ $t('projectsList.paidTraffic.position') }}
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.paidTraffic.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.paidTraffic.tools')"
          :key="tool">
          {{ tool }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #links>
      <AppLinksList :links="i18n.tm('local.links')" />
    </template>
  </AppArticle>
</template>
