<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import ticketsSaleOptimizationApplication from './images/tickets-sale-optimization-application.png'
  import ticketsSaleOptimizationTraffic from './images/tickets-sale-optimization-traffic.jpg'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'Оптимизатор стоимости клика контекстной рекламы на Vue.js',
        clientAndChallenge: 'Собственному стартапу по арбитражу туристического трафика требовалась оптимизация стоимости контекстной рекламы, для чего необходим механизм для анализа прибыльных и убыточных регионов продаж. Требовалось разработать приложение, получающее на вход данные о продажах билетов и затраты на рекламу из Яндекс Директа, на выход — ROI каждого из городов-продаж, точную максимальную стоимость клика в указанном регионе, число продаж и другие метрики.',
        technologiesAndSolutions: 'Для обработки и меппинга данных использовалась библиотека lodash, создан парсер для данных из Яндекс Директа, использованный фронтенд-фреймворк — Vue.js. Реализована возможность фильтрации по типу продаж (авиабилетов и билетов на поезд), городам продаж (отправления и прибытия), реализован алгоритм агрегации нескольких транзакций в одну конверсию, подсчет максимально окупаемой цены за клик в контекстной рекламе.',
        results: 'Реализованное приложение позволило оптимизировать затраты на рекламу, отключить показ объявлений в неокупаемых регионах, максимизировать продажи и выявить пиковое время и дни продаж. Благодаря приложению удалось войти в ТОП-2 вебмастеров-арбитражников тревел-трафика.',
        screenshots: {
          application: 'Главный вид приложения',
          traffic: 'Трафик сайта: в середине марта инструмент внедрен, трафик сайта удвоился. Середина мая — прекращение работы партнерской программы, поиск альтернативы.'
        }
      }
    },
    [Locale.EN]: {
      local: {
        title: 'Optimizer for PPC-advertising',
        clientAndChallenge: 'My own travel arbitrage startup needed to optimize the cost of contextual advertising (PPC), which requires a mechanism to analyze profitable and unprofitable sales regions. It was required to develop an application that receives data on ticket sales and advertising costs from Yandex Direct as input. The output should contain the ROI of each of the selling cities, the exact maximum cost per click in the specified region, the number of sales and other significant metrics.',
        technologiesAndSolutions: 'To process and map data, the lodash library was used, a parser for the data from Yandex Direct was implemented; Vue.js was used as the front-end framework. The ability to filter by the type of sales (air tickets and train tickets), sales cities (departure and arrival) has been implemented, an algorithm has been implemented for aggregating several transactions into one conversion, calculating the maximum payback price per click in contextual advertising.',
        results: 'The implemented application allowed me to optimize advertising costs, disable ad impressions in unprofitable regions, maximize sales, and identify peak times and days of sales. Thanks to the application, I managed to enter the top-2 webmasters of travel traffic arbitrage.',
        screenshots: {
          application: 'The main page of the application',
          traffic: 'Website traffic: the tool was implemented in mid-March, the site traffic doubled. Mid-May — termination of the affiliate program, search for an alternative.'
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
        :src="ticketsSaleOptimizationApplication"
        :alt="i18n.t('local.screenshots.application')">
        {{ i18n.t('local.screenshots.application') }}
      </AppFigure>

      <AppFigure
        :src="ticketsSaleOptimizationTraffic"
        :alt="i18n.t('local.screenshots.traffic')">
        {{ i18n.t('local.screenshots.traffic') }}
      </AppFigure>
    </template>

    <template #position>
      <p>{{ $t('projectsList.ticketsSaleOptimization.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.ticketsSaleOptimization.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.ticketsSaleOptimization.tools')"
          :key="tool">
          {{ tool }}
        </AppChipsItem>
      </AppChips>
    </template>
  </AppArticle>
</template>
