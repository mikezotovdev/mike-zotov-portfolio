<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppLinksList from '@/components/utils/app-links-list/AppLinksList.vue'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import statisticalAnalysis3dRatioOfCompetingAlgorithmsVariableParameters from './images/statistical-analysis-3d-ratio-of-competing-algorithms-variable-parameters.png'
  import statisticalAnalysis3dRatioOfCompetingAlgorithmsVariation from './images/statistical-analysis-3d-ratio-of-competing-algorithms-variation.png'
  import statisticalAnalysis33dVisualization from './images/statistical-analysis-3d-visualization.png'
  import statisticalAnalysisDistribution from './images/statistical-analysis-distribution.png'
  import statisticalAnalysisHistogram from './images/statistical-analysis-histogram.png'
  import statisticalAnalysisRatio from './images/statistical-analysis-ratio.png'
  import statisticalAnalysisRatioOfAlgorithms from './images/statistical-analysis-ratio-of-algorithms.png'
  import statisticalAnalysisWithDetails from './images/statistical-analysis-with-details.png'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'Система статистического анализа сложностей алгоритмов на C#',
        clientAndChallenge: 'Теоретические оценки сложности алгоритмов бывают неприменимы на практике, если они опираются на латентные свойства объектов: численные характеристики, которые становятся доступными только после построения искомого объекта. В такой ситуации представляется перспективным один из вариантов эмпирического подхода — проведение вычислительных экспериментов и построение на основе обработки их результатов абсолютных и относительных статистических оценок времени исполнения конкурирующих алгоритмов. Для научного проекта лаборатории СПИИРАН требовалось создать инструмент, позволяющий проводить эмпирические оценки алгоритмов построения алгебраических байесовских сетей.',
        technologiesAndSolutions: 'Для проведения статистических экспериментов, был создан комплекс программ и юнит-тестов на C#: генератор данных для экспериментов и анализатор результатов экспериментов. Численные результаты записывались в выходной файл и визуализировались.',
        results: 'Визуализация полученных статистик и их анализ позволил выявить конкурентные преимущества алгоритмов, используемых для построения вторичных структур алгебраических байесовских сетей. Алгоритм статистического сравнения был генерализирован на любые другие конкурирующие алгоритмы. Результаты исследований были опубликованы в научных журналах и представлены на российских и международных конференциях, а также легли в основу моей магистерской диссертации.',
        screenshots: {
          statisticsVariation3d: 'Визуализация отношений скоростей работы алгоритмов',
          distribution: 'Визуализация распределения',
          histogram: 'Визуализация гистограммы',
          statisticsVariation2d: 'Визуализация в виде двумерного графика',
          statisticsVariation2dFrame: 'Визуализация в виде двумерного графика с врезкой'
        },
        links: [
          {
            link: 'https://link.springer.com/chapter/10.1007/978-3-319-33816-3_6',
            text: 'Decremental and Incremental Reshaping of Algebraic Bayesian Networks Global Structures '
          },
          {
            link: 'https://ieeexplore.ieee.org/document/7519677',
            text: 'Minimal join graphs\' set synthesis: Performance statistical estimate of the decremental algorithm'
          },
          {
            link: 'https://ieeexplore.ieee.org/document/7519689',
            text: 'Algebraic Bayesian networks secondary structure synthesis: All possible minimal join graphs\' set capacity estimate'
          }
        ]
      }
    },
    [Locale.EN]: {
      local: {
        title: 'Statistical analysis system for complex algorithms',
        clientAndChallenge: 'Theoretical estimates of the complexity of algorithms are inapplicable in practice if they rely on the latent properties of objects: numerical characteristics that become available only after the construction of the desired object. In such a situation, one of the variants of the empirical approach seems promising — carrying out computational experiments and constructing, on the basis of processing their results, absolute and relative statistical estimates of the execution time of competing algorithms. For a scientific project of the SPIIRAS laboratory, it was required to create a tool that allows to perform empirical estimates of competing algorithms for constructing algebraic Bayesian networks.',
        technologiesAndSolutions: 'To carry out statistical experiments, a complex of programs and unit tests in C# was implemented: a data generator for experiments and an analyzer of the results of experiments. Numerical results were written to the output file and visualized.',
        results: 'The visualization of the obtained statistics and their analysis made it possible to reveal the competitive advantages of the algorithms used to construct the secondary structures of algebraic Bayesian networks. The statistical comparison algorithm has been generalized to any other competing algorithms. The research results were published in academic journals and presented at Russian and international conferences, and also formed the basis of my master\'s thesis.',
        screenshots: {
          statisticsVariation3d: 'Visualizing of algorithms speed',
          distribution: 'Distribution visualization',
          histogram: 'Histogram visualization',
          statisticsVariation2d: 'Two-dimensional graphic',
          statisticsVariation2dFrame: 'Two-dimensional graphic with a frame'
        },
        links: [
          {
            link: 'https://link.springer.com/chapter/10.1007/978-3-319-33816-3_6',
            text: 'Decremental and Incremental Reshaping of Algebraic Bayesian Networks Global Structures '
          },
          {
            link: 'https://ieeexplore.ieee.org/document/7519677',
            text: 'Minimal join graphs\' set synthesis: Performance statistical estimate of the decremental algorithm'
          },
          {
            link: 'https://ieeexplore.ieee.org/document/7519689',
            text: 'Algebraic Bayesian networks secondary structure synthesis: All possible minimal join graphs\' set capacity estimate'
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
    <template #screenshots>
      <AppFigure
        :src="statisticalAnalysis3dRatioOfCompetingAlgorithmsVariableParameters"
        :alt="i18n.t('local.screenshots.statisticsVariation3d')">
        {{ i18n.t('local.screenshots.statisticsVariation3d') }}
      </AppFigure>

      <AppFigure
        :src="statisticalAnalysis3dRatioOfCompetingAlgorithmsVariation"
        :alt="i18n.t('local.screenshots.statisticsVariation3d')">
        {{ i18n.t('local.screenshots.statisticsVariation3d') }}
      </AppFigure>

      <AppFigure
        :src="statisticalAnalysis33dVisualization"
        :alt="i18n.t('local.screenshots.statisticsVariation3d')">
        {{ i18n.t('local.screenshots.statisticsVariation3d') }}
      </AppFigure>

      <AppFigure
        :src="statisticalAnalysisDistribution"
        :alt="i18n.t('local.screenshots.distribution')">
        {{ i18n.t('local.screenshots.distribution') }}
      </AppFigure>

      <AppFigure
        :src="statisticalAnalysisHistogram"
        :alt="i18n.t('local.screenshots.histogram')">
        {{ i18n.t('local.screenshots.histogram') }}
      </AppFigure>

      <AppFigure
        :src="statisticalAnalysisRatio"
        :alt="i18n.t('local.screenshots.statisticsVariation2d')">
        {{ i18n.t('local.screenshots.statisticsVariation2d') }}
      </AppFigure>

      <AppFigure
        :src="statisticalAnalysisRatioOfAlgorithms"
        :alt="i18n.t('local.screenshots.statisticsVariation2dFrame')">
        {{ i18n.t('local.screenshots.statisticsVariation2dFrame') }}
      </AppFigure>

      <AppFigure
        :src="statisticalAnalysisWithDetails"
        :alt="i18n.t('local.screenshots.statisticsVariation2dFrame')">
        {{ i18n.t('local.screenshots.statisticsVariation2dFrame') }}
      </AppFigure>
    </template>

    <template #position>
      <p>{{ $t('projectsList.statisticalAnalysis.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.statisticalAnalysis.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.statisticalAnalysis.tools')"
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
