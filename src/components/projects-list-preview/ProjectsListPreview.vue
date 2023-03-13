<script setup lang="ts">
  import AppArticlePreview from '@/components/utils/app-article-preview/AppArticlePreview.vue'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import { reactive } from 'vue'
  import AppTextColorLine from '@/components/utils/app-text-color-line/AppTextColorLine.vue'
  import { Color } from '@/types/color'
  import { ColorLineType } from '@/types/color-line-type'

  import fluidFinancePreview from './images/fluid-finance-preview.jpg'
  import deepDaoPreview from './images/deep-dao-preview.jpg'
  import bookingEnginePreview from './images/booking-engine-preview.jpg'
  import personalPortfolioPreview from './images/personal-portfolio-preview.jpg'
  import ticketsSaleOptimizationPreview from './images/tickets-sale-optimization-preview.jpg'
  import clinicalTrialsPreview from './images/clinical-trials-preview.jpg'
  import scientificPublicationsPreview from './images/scientific-publications-preview.jpg'
  import coronavirusVisualizationPreview from './images/coronavirus-visualization-preview.jpg'
  import statisticalAnalysisPreview from './images/statistical-analysis-preview.jpg'
  import webScrapingPreview from './images/web-scraping-preview.jpg'
  import tourismTrafficArbitragePreview from './images/tourism-traffic-arbitrage-preview.jpg'
  import paidTrafficPreview from './images/paid-traffic-preview.jpg'
  import vegansurviveCommunityPreview from './images/vegansurvive-community-preview.jpg'
  import exhibitionManagementPreview from './images/exhibition-management-preview.jpg'

  const props = withDefaults(
    defineProps<{
      isHeader?: boolean;
      isExtraProjectsShown?: boolean;
    }>(),
    {
      isHeader: true,
      isExtraProjectsShown: false
    }
  )

  const state = reactive({
    isExtraProjectsShown: props.isExtraProjectsShown
  })

  const toggleIsShowMore = () => {
    state.isExtraProjectsShown = !state.isExtraProjectsShown
  }

  const titleTag = props.isHeader ? 'h2' : 'h3'
</script>

<template>
  <div class="projects-list-preview">
    <div class="projects-list">
      <AppArticlePreview
        class="projects-list-item"
        :src="fluidFinancePreview"
        :link="{name: $t('routeNames.projects.fluidFinance')}"
        :alt="$t('projectsList.deepDao.title')">
        <template #number>
          01.
        </template>
        <template #title>
          <component :is="titleTag">
            {{ $t('projectsList.fluidFinance.title') }}
          </component>
        </template>
        <template #subtitle>
          {{ $t('projectsList.fluidFinance.position') }}
        </template>
        <template #description>
          {{ $t('projectsList.fluidFinance.description') }}
        </template>
        <template #tags>
          <AppChips>
            <AppChipsItem
              v-for="technology in $tm('projectsList.fluidFinance.technologies') as string[]"
              :key="technology"
              :type="ChipsType.GREEN">
              {{ technology }}
            </AppChipsItem>

            <AppChipsItem
              v-for="tool in $tm('projectsList.fluidFinance.tools') as string[]"
              :key="tool">
              {{ tool }}
            </AppChipsItem>
          </AppChips>
        </template>
      </AppArticlePreview>

      <AppArticlePreview
        class="projects-list-item"
        :src="deepDaoPreview"
        :link="{name: $t('routeNames.projects.deepDao')}"
        :alt="$t('projectsList.deepDao.title')">
        <template #number>
          02.
        </template>
        <template #title>
          <component :is="titleTag">
            {{ $t('projectsList.deepDao.title') }}
          </component>
        </template>
        <template #subtitle>
          {{ $t('projectsList.deepDao.position') }}
        </template>
        <template #description>
          {{ $t('projectsList.deepDao.description') }}
        </template>
        <template #tags>
          <AppChips>
            <AppChipsItem
              v-for="technology in $tm('projectsList.deepDao.technologies') as string[]"
              :key="technology"
              :type="ChipsType.GREEN">
              {{ technology }}
            </AppChipsItem>

            <AppChipsItem
              v-for="tool in $tm('projectsList.deepDao.tools') as string[]"
              :key="tool">
              {{ tool }}
            </AppChipsItem>
          </AppChips>
        </template>
      </AppArticlePreview>

      <AppArticlePreview
        class="projects-list-item"
        :src="bookingEnginePreview"
        :link="{name: $t('routeNames.projects.bookingEngine')}"
        :alt="$t('projectsList.bookingEngine.title')">
        <template #number>
          03.
        </template>
        <template #title>
          <component :is="titleTag">
            {{ $t('projectsList.bookingEngine.title') }}
          </component>
        </template>
        <template #subtitle>
          {{ $t('projectsList.bookingEngine.position') }}
        </template>
        <template #description>
          {{ $t('projectsList.bookingEngine.description') }}
        </template>
        <template #tags>
          <AppChips>
            <AppChipsItem
              v-for="technology in $tm('projectsList.bookingEngine.technologies') as string[]"
              :key="technology"
              :type="ChipsType.GREEN">
              {{ technology }}
            </AppChipsItem>

            <AppChipsItem
              v-for="tool in $tm('projectsList.bookingEngine.tools') as string[]"
              :key="tool">
              {{ tool }}
            </AppChipsItem>
          </AppChips>
        </template>
      </AppArticlePreview>

      <AppArticlePreview
        class="projects-list-item"
        :src="personalPortfolioPreview"
        :link="{name: $t('routeNames.projects.personalPortfolio')}"
        :alt="$t('projectsList.personalPortfolio.title')">
        <template #number>
          04.
        </template>
        <template #title>
          <component :is="titleTag">
            {{ $t('projectsList.personalPortfolio.title') }}
          </component>
        </template>
        <template #subtitle>
          {{ $t('projectsList.personalPortfolio.position') }}
        </template>
        <template #description>
          {{ $t('projectsList.personalPortfolio.description') }}
        </template>
        <template #tags>
          <AppChips>
            <AppChipsItem
              v-for="technology in $tm('projectsList.personalPortfolio.technologies') as string[]"
              :key="technology"
              :type="ChipsType.GREEN">
              {{ technology }}
            </AppChipsItem>

            <AppChipsItem
              v-for="tool in $tm('projectsList.personalPortfolio.tools') as string[]"
              :key="tool">
              {{ tool }}
            </AppChipsItem>
          </AppChips>
        </template>
      </AppArticlePreview>

      <AppArticlePreview
        class="projects-list-item"
        :src="ticketsSaleOptimizationPreview"
        :link="{name: $t('routeNames.projects.ticketsSaleOptimization')}"
        :alt="$t('projectsList.ticketsSaleOptimization.title')">
        <template #number>
          05.
        </template>
        <template #title>
          <component :is="titleTag">
            {{ $t('projectsList.ticketsSaleOptimization.title') }}
          </component>
        </template>
        <template #subtitle>
          {{ $t('projectsList.ticketsSaleOptimization.position') }}
        </template>
        <template #description>
          {{ $t('projectsList.ticketsSaleOptimization.description') }}
        </template>
        <template #tags>
          <AppChips>
            <AppChipsItem
              v-for="technology in $tm('projectsList.ticketsSaleOptimization.technologies') as string[]"
              :key="technology"
              :type="ChipsType.GREEN">
              {{ technology }}
            </AppChipsItem>

            <AppChipsItem
              v-for="tool in $tm('projectsList.ticketsSaleOptimization.tools') as string[]"
              :key="tool">
              {{ tool }}
            </AppChipsItem>
          </AppChips>
        </template>
      </AppArticlePreview>

      <AppArticlePreview
        class="projects-list-item"
        :src="clinicalTrialsPreview"
        :link="{name: $t('routeNames.projects.clinicalTrials')}"
        :alt="$t('projectsList.clinicalTrials.title')">
        <template #number>
          06.
        </template>
        <template #title>
          <component :is="titleTag">
            {{ $t('projectsList.clinicalTrials.title') }}
          </component>
        </template>
        <template #subtitle>
          {{ $t('projectsList.clinicalTrials.position') }}
        </template>
        <template #description>
          {{ $t('projectsList.clinicalTrials.description') }}
        </template>
        <template #tags>
          <AppChips>
            <AppChipsItem
              v-for="technology in $tm('projectsList.clinicalTrials.technologies') as string[]"
              :key="technology"
              :type="ChipsType.GREEN">
              {{ technology }}
            </AppChipsItem>

            <AppChipsItem
              v-for="tool in $tm('projectsList.clinicalTrials.tools') as string[]"
              :key="tool">
              {{ tool }}
            </AppChipsItem>
          </AppChips>
        </template>
      </AppArticlePreview>

      <AppArticlePreview
        class="projects-list-item"
        :src="scientificPublicationsPreview"
        :link="{name: $t('routeNames.projects.scientificPublications')}"
        :alt="$t('projectsList.scientificPublications.title')">
        <template #number>
          07.
        </template>
        <template #title>
          <component :is="titleTag">
            {{ $t('projectsList.scientificPublications.title') }}
          </component>
        </template>
        <template #subtitle>
          {{ $t('projectsList.scientificPublications.position') }}
        </template>
        <template #description>
          {{ $t('projectsList.scientificPublications.description') }}
        </template>
        <template #tags>
          <AppChips>
            <AppChipsItem
              v-for="technology in $tm('projectsList.scientificPublications.technologies') as string[]"
              :key="technology"
              :type="ChipsType.GREEN">
              {{ technology }}
            </AppChipsItem>

            <AppChipsItem
              v-for="tool in $tm('projectsList.scientificPublications.tools') as string[]"
              :key="tool">
              {{ tool }}
            </AppChipsItem>
          </AppChips>
        </template>
      </AppArticlePreview>

      <AppArticlePreview
        class="projects-list-item"
        :src="coronavirusVisualizationPreview"
        :link="{name: $t('routeNames.projects.coronavirusVisualization')}"
        :alt="$t('projectsList.coronavirusVisualization.title')">
        <template #number>
          08.
        </template>
        <template #title>
          <component :is="titleTag">
            {{ $t('projectsList.coronavirusVisualization.title') }}
          </component>
        </template>
        <template #subtitle>
          {{ $t('projectsList.coronavirusVisualization.position') }}
        </template>
        <template #description>
          {{ $t('projectsList.coronavirusVisualization.description') }}
        </template>
        <template #tags>
          <AppChips>
            <AppChipsItem
              v-for="technology in $tm('projectsList.coronavirusVisualization.technologies') as string[]"
              :key="technology"
              :type="ChipsType.GREEN">
              {{ technology }}
            </AppChipsItem>

            <AppChipsItem
              v-for="tool in $tm('projectsList.coronavirusVisualization.tools') as string[]"
              :key="tool">
              {{ tool }}
            </AppChipsItem>
          </AppChips>
        </template>
      </AppArticlePreview>

      <AppArticlePreview
        class="projects-list-item"
        :src="statisticalAnalysisPreview"
        :link="{name: $t('routeNames.projects.statisticalAnalysis')}"
        :alt="$t('projectsList.statisticalAnalysis.title')">
        <template #number>
          09.
        </template>
        <template #title>
          <component :is="titleTag">
            {{ $t('projectsList.statisticalAnalysis.title') }}
          </component>
        </template>
        <template #subtitle>
          {{ $t('projectsList.statisticalAnalysis.position') }}
        </template>
        <template #description>
          {{ $t('projectsList.statisticalAnalysis.description') }}
        </template>
        <template #tags>
          <AppChips>
            <AppChipsItem
              v-for="technology in $tm('projectsList.statisticalAnalysis.technologies') as string[]"
              :key="technology"
              :type="ChipsType.GREEN">
              {{ technology }}
            </AppChipsItem>

            <AppChipsItem
              v-for="tool in $tm('projectsList.statisticalAnalysis.tools') as string[]"
              :key="tool">
              {{ tool }}
            </AppChipsItem>
          </AppChips>
        </template>
      </AppArticlePreview>

      <AppArticlePreview
        class="projects-list-item"
        :src="webScrapingPreview"
        :link="{name: $t('routeNames.projects.webScraping')}"
        :alt="$t('projectsList.webScraping.title')">
        <template #number>
          10.
        </template>
        <template #title>
          <component :is="titleTag">
            {{ $t('projectsList.webScraping.title') }}
          </component>
        </template>
        <template #subtitle>
          {{ $t('projectsList.webScraping.position') }}
        </template>
        <template #description>
          {{ $t('projectsList.webScraping.description') }}
        </template>
        <template #tags>
          <AppChips>
            <AppChipsItem
              v-for="technology in $tm('projectsList.webScraping.technologies') as string[]"
              :key="technology"
              :type="ChipsType.GREEN">
              {{ technology }}
            </AppChipsItem>

            <AppChipsItem
              v-for="tool in $tm('projectsList.webScraping.tools') as string[]"
              :key="tool">
              {{ tool }}
            </AppChipsItem>
          </AppChips>
        </template>
      </AppArticlePreview>

      <TransitionGroup name="opacity-transition">
        <template v-if="state.isExtraProjectsShown">
          <AppArticlePreview
            class="projects-list-item"
            key="tourism-traffic-arbitrage"
            :src="tourismTrafficArbitragePreview"
            :link="{name: $t('routeNames.projects.tourismTrafficArbitrage')}"
            :alt="$t('projectsList.tourismTrafficArbitrage.title')">
            <template #number>
              11.
            </template>
            <template #title>
              <component :is="titleTag">
                {{ $t('projectsList.tourismTrafficArbitrage.title') }}
              </component>
            </template>
            <template #subtitle>
              {{ $t('projectsList.tourismTrafficArbitrage.position') }}
            </template>
            <template #description>
              {{ $t('projectsList.tourismTrafficArbitrage.description') }}
            </template>
            <template #tags>
              <AppChips>
                <AppChipsItem
                  v-for="technology in $tm('projectsList.tourismTrafficArbitrage.technologies') as string[]"
                  :key="technology"
                  :type="ChipsType.GREEN">
                  {{ technology }}
                </AppChipsItem>

                <AppChipsItem
                  v-for="tool in $tm('projectsList.tourismTrafficArbitrage.tools') as string[]"
                  :key="tool">
                  {{ tool }}
                </AppChipsItem>
              </AppChips>
            </template>
          </AppArticlePreview>

          <AppArticlePreview
            class="projects-list-item"
            key="paid-traffic"
            :src="paidTrafficPreview"
            :link="{name: $t('routeNames.projects.paidTraffic')}"
            :alt="$t('projectsList.paidTraffic.title')">
            <template #number>
              12.
            </template>
            <template #title>
              <component :is="titleTag">
                {{ $t('projectsList.paidTraffic.title') }}
              </component>
            </template>
            <template #subtitle>
              {{ $t('projectsList.paidTraffic.position') }}
            </template>
            <template #description>
              {{ $t('projectsList.paidTraffic.description') }}
            </template>
            <template #tags>
              <AppChips>
                <AppChipsItem
                  v-for="technology in $tm('projectsList.paidTraffic.technologies') as string[]"
                  :key="technology"
                  :type="ChipsType.GREEN">
                  {{ technology }}
                </AppChipsItem>

                <AppChipsItem
                  v-for="tool in $tm('projectsList.paidTraffic.tools') as string[]"
                  :key="tool">
                  {{ tool }}
                </AppChipsItem>
              </AppChips>
            </template>
          </AppArticlePreview>

          <AppArticlePreview
            class="projects-list-item"
            key="vegansurvive-community"
            :src="vegansurviveCommunityPreview"
            :link="{name: $t('routeNames.projects.vegansurviveCommunity')}"
            :alt="$t('projectsList.vegansurviveCommunity.title')">
            <template #number>
              13.
            </template>
            <template #title>
              <component :is="titleTag">
                {{ $t('projectsList.vegansurviveCommunity.title') }}
              </component>
            </template>
            <template #subtitle>
              {{ $t('projectsList.vegansurviveCommunity.position') }}
            </template>
            <template #description>
              {{ $t('projectsList.vegansurviveCommunity.description') }}
            </template>
            <template #tags>
              <AppChips>
                <AppChipsItem
                  v-for="technology in $tm('projectsList.vegansurviveCommunity.technologies') as string[]"
                  :key="technology"
                  :type="ChipsType.GREEN">
                  {{ technology }}
                </AppChipsItem>

                <AppChipsItem
                  v-for="tool in $tm('projectsList.vegansurviveCommunity.tools') as string[]"
                  :key="tool">
                  {{ tool }}
                </AppChipsItem>
              </AppChips>
            </template>
          </AppArticlePreview>

          <AppArticlePreview
            class="projects-list-item"
            key="exhibition-management"
            :src="exhibitionManagementPreview"
            :link="{name: $t('routeNames.projects.exhibitionManagement')}"
            :alt="$t('projectsList.exhibitionManagement.title')">
            <template #number>
              14.
            </template>
            <template #title>
              <component :is="titleTag">
                {{ $t('projectsList.exhibitionManagement.title') }}
              </component>
            </template>
            <template #subtitle>
              {{ $t('projectsList.exhibitionManagement.position') }}
            </template>
            <template #description>
              {{ $t('projectsList.exhibitionManagement.description') }}
            </template>
            <template #tags>
              <AppChips>
                <AppChipsItem
                  v-for="technology in $tm('projectsList.exhibitionManagement.technologies') as string[]"
                  :key="technology"
                  :type="ChipsType.GREEN">
                  {{ technology }}
                </AppChipsItem>

                <AppChipsItem
                  v-for="tool in $tm('projectsList.exhibitionManagement.tools') as string[]"
                  :key="tool">
                  {{ tool }}
                </AppChipsItem>
              </AppChips>
            </template>
          </AppArticlePreview>
        </template>
      </TransitionGroup>
    </div>

    <button
      v-if="!props.isExtraProjectsShown"
      class="projects-list-preview-button button"
      type="button"
      @click="toggleIsShowMore">
      <Transition
        name="opacity-out-in-transition"
        mode="out-in">
        <AppTextColorLine
          v-if="state.isExtraProjectsShown"
          class="projects-list-preview-button-text"
          is="span"
          :color="Color.GREEN"
          :type="ColorLineType.MEDIUM">
          {{ $t('misc.showLess') }}
        </AppTextColorLine>

        <AppTextColorLine
          v-else
          class="projects-list-preview-button-text"
          is="span"
          :color="Color.GREEN"
          :type="ColorLineType.MEDIUM">
          {{ $t('misc.showMore') }}
        </AppTextColorLine>
      </Transition>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  .projects-list-preview {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: fun.space(25);

    .projects-list-preview-button-text {
      @include mixins.text-h3;

      @include mixins.mobile {
        @include mixins.text-h4;
      }
    }
  }

  .projects-list {
    display: flex;
    flex-flow: column;
    gap: fun.space(25);
  }
</style>
