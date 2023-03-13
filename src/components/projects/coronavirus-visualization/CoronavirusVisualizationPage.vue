<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppLinksList from '@/components/utils/app-links-list/AppLinksList.vue'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import coronavirusVisualizationStatistics from './images/coronavirus-visualization-statistics.jpg'
  import coronavirusTraffic from './images/coronavirus-traffic.jpg'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'Новостной портал о вакцинах и статистике заражения',
        clientAndChallenge: 'Стартапу по освещению новостей, связанных с разработкой вакцин от коронавируса, требовалось разработать структуру сайта, провести анализ конкурентов, стратегическое планирование и составить контент-план. Важно было получить трастовые ссылки на сайт для быстрого органического роста позиций сайта. Требовалось разработать и интегрировать интерактивный график, отражающий статистики заражения коронавирусом, а также добавить возможность встраивания графика на другие сайты и экспорта графика в виде jpg-файла.',
        technologiesAndSolutions: 'На момент создания портала не было единого источника новостей по теме вакцин от коронавируса, был изучен и составлен список актуальных первоисточников (в первую очередь — зарубежных), статьи из которых впоследствии переводились и публиковались на сайте. В качестве системы управления контентом был выбран WordPress, фреймворка для отображения статистик — Vue.js. Разработано семантическое ядро, собраны и изучены преимущества конкурентов, разработано и интегрировано адаптивное Vue.js-приложение для визуализации статистик, настроен кросспостинг в социальные сети, разработана система отслеживания трафика сайта (utm-метки).',
        results: 'Сайт был выведен в топ Яндекса в течение недели по основным ключевым запросам, получено множество обратных ссылок на материалы сайта, в том числе с государственных интернет-ресурсов (*.gov домены). Отлажен процесс публикации новостей раньше любых других российских СМИ.',
        screenshots: {
          statisticsInfo: 'Отображение статистики заражения',
          traffic: 'Трафик сайта'
        },
        links: [{
          link: 'https://coronavaccine.ru/karta-zarazheniya-koronavirusom-i-statistika/',
          text: 'Карта заражения и визуализация статистик'
        }]
      }
    },
    [Locale.EN]: {
      local: {
        title: 'COVID-19 vaccines news portal and infection statistics',
        clientAndChallenge: 'The coronavirus vaccine news portal startup needed to design a website structure, perform a competitor analysis and strategic planning, schedule a content plan. It was highly significant to receive trust links to the website for a better organic boost. The graphics for infection statistics was also requested with a feature of exporting the graphics as a jpg-file and embedding graphics on other sites.',
        technologiesAndSolutions: 'At the moment the portal was created, there wasn\'t any single source on the coronavirus vaccine news, so the list of actual origin sources were created (the list mainly contains foreign sources), the academic articles were translated and published on the website. WordPress was chosen as a CMS, and Vue.js for displaying infection statistics. The semantic core for the website was compounded, the competitor analysis was performed, the responsive Vue.js-application was integrated to the website and cross-posting to the social medias was configured, as well as the system for traffic source tracking (utm-meta tags).',
        results: 'The site was boosted and ranked to top-1 position in Yandex in two weeks for the significant keywords. Lots of backlinks, including from government domains, were received, the process of publishing news earlier than any other Russian mass media was established.',
        screenshots: {
          statisticsInfo: 'Infection statistics',
          traffic: 'Website traffic'
        },
        links: [{
          link: 'https://coronavaccine.ru/karta-zarazheniya-koronavirusom-i-statistika/',
          text: 'Infection map and statistics visualization'
        }]
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
        :src="coronavirusVisualizationStatistics"
        :alt="i18n.t('local.screenshots.statisticsInfo')">
        {{ i18n.t('local.screenshots.statisticsInfo') }}
      </AppFigure>

      <AppFigure
        :src="coronavirusTraffic"
        :alt="i18n.t('local.screenshots.traffic')">
        {{ i18n.t('local.screenshots.traffic') }}
      </AppFigure>
    </template>

    <template #position>
      <p>{{ $t('projectsList.coronavirusVisualization.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.coronavirusVisualization.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.coronavirusVisualization.tools')"
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
