<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import tourismTrafficArbitrageStart from './images/tourism-traffic-arbitrage-start.jpg'
  import tourismTrafficArbitrageAfterDrop from './images/tourism-traffic-arbitrage-after-drop.jpg'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: '3 миллиона посещений сайта в туристической нише',
        clientAndChallenge: 'Для создания проекта-бэнгера в туристической нише требовалось глубоко проанализировать рынок, после запуска — выявлять страницы с наибольшей конверсией, регулярно проводить анализ конкурентов, изучать отчеты Яндекс Метрики. Требовалось автоматизировать генерацию посадочных страниц, а также проводить оптимизацию заголовков, описаний страниц и рекламных объявлений. Проекты туристической ниши требовали выявление прибыльных регионов для вхождения и стратегическое планирование, кризис-менеджмент.',
        technologiesAndSolutions: 'Был выполнен парсинг выдачи Яндекса и Google, составлен список рекламодателей по ключевым запросам, создан отчет о рентабельности вхождения в туристическую нишу.',
        results: 'Был создан шаблон для сайтов, который позволил запустить более 30 туристических сайтов с минимальными трудозатратами в течение полугода. В самом успешном проекте из туристической ниши пиковая посещаемость сайта составила более 700000 в месяц, ежедневная посещаемость доходила до 30000 пользователей. Для проектов была разработана система отслеживания трафика сайта (utm-метки), позволяющая отслеживать источник конверсии даже после ухода с посадочной страницы сайта в систему партнеров, где стандартными средствами источник конверсии отследить невозможно. Такой подход позволил выявить наиболее прибыльные источники трафика и максимизировать прибыль. Грамотная структура сайтов и качественно проработанные семантические ядра позволили привлечь органический трафик уже в первые недели после запуска сайтов (персональный рекорд — вывод в топ-3 Яндекса за неделю, в топ-1 — за две).',
        screenshots: {
          beforeDrop: 'Трафик сайта до отключения партнерской программы',
          afterDrop: 'Восстановление позиций сайта после отключения партнерской программы'
        }
      }
    },
    [Locale.EN]: {
      local: {
        title: '3 million website visitors in tourism niche',
        clientAndChallenge: 'To create a banger project in the tourism niche, it was required to deeply analyze the market, after launch — to identify the pages with the highest conversion, regularly analyze competitors, and investigate Yandex Metrika (an analog of Google Analytics in Russia) reports. It was required to automate the generation of landing pages, as well as to optimize meta titles, descriptions and PPC advertisements. Crisis management and strategic planning were required as well.',
        technologiesAndSolutions: 'The results of Yandex and Google SERPs were parsed and compiled into a list of advertisers for the specific set of keywords. The report on the profitability of entering the travel niche was created.',
        results: 'A website template was created, which allowed me to launch more than 30 travel sites with minimal effort within six months. In the most successful project from the tourism niche, the peak site traffic was over 700,000 users per month, with daily traffic reaching up to 30,000 users. A system for tracking the website traffic (utm tags) was developed, which allows me to track the source of conversion even after leaving the landing page of the site to the partner system, where it is impossible to track the source of conversion by standard methods. This approach allowed me to identify the most profitable traffic sources and maximize profits. Well-developed semantic cores made it possible to attract organic traffic in the first weeks after the launch of the sites (personal record — getting to the top 3 of Yandex in a week, to the top 1 — in two).',
        screenshots: {
          beforeDrop: 'Website traffic before the drop of the partnership program',
          afterDrop: 'Restoring website positions after disabling the affiliate program'
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
        :src="tourismTrafficArbitrageStart"
        :alt="i18n.t('local.screenshots.beforeDrop')">
        {{ i18n.t('local.screenshots.beforeDrop') }}
      </AppFigure>

      <AppFigure
        :src="tourismTrafficArbitrageAfterDrop"
        :alt="i18n.t('local.screenshots.afterDrop')">
        {{ i18n.t('local.screenshots.afterDrop') }}
      </AppFigure>
    </template>

    <template #position>
      <p>{{ $t('projectsList.tourismTrafficArbitrage.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.tourismTrafficArbitrage.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.tourismTrafficArbitrage.tools')"
          :key="tool">
          {{ tool }}
        </AppChipsItem>
      </AppChips>
    </template>
  </AppArticle>
</template>
