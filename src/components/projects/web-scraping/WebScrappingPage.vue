<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppLinksList from '@/components/utils/app-links-list/AppLinksList.vue'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import webScrapingOptimizedText from './images/web-scraping-optimized-text.jpg'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'Парсинг сайтов на Node.js и SEO',
        clientAndChallenge: 'Проектам по арбитражу трафика в юридической нише требовался инструмент для парсинга сайтов конкурентов, а также автоматизированный рерайт статей и их публикация на сайтах. Требовалось выявлять страницы с наибольшей конверсией, проводить оптимизацию распределения ключевых слов на страницах сайтов.',
        technologiesAndSolutions: 'Для парсинга сайтов конкурентов использовался Node.js и библиотека cheerio, преобразованные данные экспортировались в БД MySQL. Для оптимизации мета информации страниц проводился ручной анализ выдачи.',
        results: 'Автоматизированный парсинг позволил создать сетку сайтов (PBN) за минимальное время, с ее помощью продвигались другие сайты. После ручной оптимизации текстов одного из топовых сайтов, удалось увеличить его трафик в два раза. Лучший проект из юридической ниши в высоко конкурентной тематике получил трафик в 20000 посетителей в месяц в течение года.',
        screenshots: {
          trafficAfterOptimization: 'Трафик сайта увеличился вдвое после оптимизации текстов и мета данных'
        }
      }
    },
    [Locale.EN]: {
      local: {
        title: 'Websites parsing via Node.js and SEO',
        clientAndChallenge: 'Traffic arbitrage projects in the legal niche required a tool for scraping competitors\' sites, as well as automated rewriting of articles and their publication on sites. It was required to identify the pages with the highest conversion, to optimize the distribution of keywords on the pages of the sites.',
        technologiesAndSolutions: 'Node.js and the cheerio library were used to parse competitors\' sites, the converted data was exported to the MySQL database. To optimize the meta information of the pages, a manual analysis of the search results was carried out.',
        results: 'Automated parsing made it possible to create a network of sites (PBN) in a minimum time, the PBN was used to promote other sites. After manual optimization of the texts of one of the top sites, I managed to double its traffic. The best project from a legal niche in a highly competitive niche received traffic of 20,000 visitors per month for a year.',
        screenshots: {
          trafficAfterOptimization: 'The website traffic doubled after optimizing text metrics and meta data'
        }
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
    <template #screenshots>
      <AppFigure
        :src="webScrapingOptimizedText"
        :alt="i18n.t('local.screenshots.trafficAfterOptimization')">
        {{ i18n.t('local.screenshots.trafficAfterOptimization') }}
      </AppFigure>
    </template>

    <template #position>
      <p>{{ $t('projectsList.webScraping.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.webScraping.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.webScraping.tools')"
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
