<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppLinksList from '@/components/utils/app-links-list/AppLinksList.vue'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import exhibitionManagementRealView01 from './images/exhibition-management-real-view-01.jpg'
  import exhibitionManagementRealView02 from './images/exhibition-management-real-view-02.jpg'
  import exhibitionManagementRealView03 from './images/exhibition-management-real-view-03.jpg'
  import exhibitionManagementRealView04 from './images/exhibition-management-real-view-04.jpg'
  import exhibitionManagementRealView05 from './images/exhibition-management-real-view-05.jpg'
  import exhibitionManagementRealView06 from './images/exhibition-management-real-view-06.jpg'
  import exhibitionManagementRealView07 from './images/exhibition-management-real-view-07.jpg'
  import exhibitionManagementRealView08 from './images/exhibition-management-real-view-08.jpg'
  import exhibitionManagementRender01 from './images/exhibition-management-render-01.jpg'
  import exhibitionManagementRender02 from './images/exhibition-management-render-02.jpg'
  import exhibitionManagementRender03 from './images/exhibition-management-render-03.jpg'
  import exhibitionManagementRender04 from './images/exhibition-management-render-04.jpg'
  import exhibitionManagementRender05 from './images/exhibition-management-render-05.jpg'
  import exhibitionManagementRender06 from './images/exhibition-management-render-06.jpg'
  import exhibitionManagementRender07 from './images/exhibition-management-render-07.jpg'
  import exhibitionManagementRender08 from './images/exhibition-management-render-08.jpg'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: '3D-моделирование, организация и менеджмент мероприятий',
        clientAndChallenge: 'Собственному арт-объединению на регулярной основе требуется арт-менеджмент выставок, включающий в себя организацию, согласование и техническую поддержку. Требуется организация и координация участников, согласование выставочного плана с галереями, составление смет выставок, согласование условий лояльности с типографиями и создание 3D-макетов выставочных помещений. Также требуется распределение финансовых и человеческих ресурсов, поиск источников финансирования и партнеров выставок.',
        technologiesAndSolutions: 'Для успешного проведения выставок требуются софт-навыки, позволяющие не только договариваться с художниками в неформальных беседах, но и вести деловые переговоры с выставочными партнерами. Такие переговоры позволяют получать финансовую выгоду от проведения выставок и выражаются в виде крупных скидок на заказы печати выставочных работ или в виде денежных компенсаций со стороны галерей. Техническая часть проекта включает в себя визуализации выставочных пространств с помощью Blender\'а и поиск подходящего оборудования для демонстрации цифровых объектов выставок.',
        results: '3D-визуализации выставок позволяют создавать более точные, яркие и запоминающиеся выставочные проекты, экономить финансы и оптимизировать использование человеческих ресурсов. Навыки арт-менеджмента и переговорщика позволяют получать более выгодные выставочные залы и финансовую поддержку институций.',
        screenshots: {
          render: 'Рендер экспозиции',
          realView: 'Реальный вид экспозиции'
        },
        links: [{
          link: 'https://www.behance.net/mikezotovart',
          text: 'Behance с постерами для выставки'
        }]
      }
    },
    [Locale.EN]: {
      local: {
        title: '3D-modeling, organizing and event management',
        clientAndChallenge: 'An own art association on a regular basis requires art management of exhibitions, which includes the organization and technical support. Organization and coordination of participants, coordination of the exhibition plan with galleries, drawing up estimates for exhibitions, agreeing on the terms of loyalty with printing houses and creating 3D layouts of exhibition premises is required. It also requires the distribution of financial and human resources, the search for funding sources and partners for exhibitions.',
        technologiesAndSolutions: 'Successful exhibitions require soft skills that allow not only to negotiate with artists in informal conversations, but also to conduct business negotiations with exhibition partners. Such negotiations allow receiving financial benefits from exhibitions and are expressed in the form of large discounts on orders for printing exhibition works or in the form of monetary compensation from galleries. The technical part of the project includes visualization of exhibition spaces using Blender and the search for suitable equipment to demonstrate digital objects of exhibitions.',
        results: '3D visualizations of exhibitions allow you to create more accurate, vivid and memorable exhibition projects, save finances and optimize the use of human resources. Art management and negotiation skills allow you to get more profitable exhibition halls and financial support from institutions.',
        screenshots: {
          render: 'Exhibition render',
          realView: 'Real exhibition view'
        },
        links: [{
          link: 'https://www.behance.net/mikezotovart',
          text: 'Behance with exhibition posters'
        }]
      }
    }
  }

  const i18n = useI18n({
    messages
  })
</script>

<template>
  <AppArticle class="exhibition-management-page">
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
        :src="exhibitionManagementRender01"
        :alt="i18n.t('local.screenshots.render')">
        {{ i18n.t('local.screenshots.render') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRealView01"
        :alt="i18n.t('local.screenshots.realView')">
        {{ i18n.t('local.screenshots.realView') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRender02"
        :alt="i18n.t('local.screenshots.render')">
        {{ i18n.t('local.screenshots.render') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRealView02"
        :alt="i18n.t('local.screenshots.realView')">
        {{ i18n.t('local.screenshots.realView') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRender03"
        :alt="i18n.t('local.screenshots.render')">
        {{ i18n.t('local.screenshots.render') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRealView03"
        :alt="i18n.t('local.screenshots.realView')">
        {{ i18n.t('local.screenshots.realView') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRender04"
        :alt="i18n.t('local.screenshots.render')">
        {{ i18n.t('local.screenshots.render') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRealView04"
        :alt="i18n.t('local.screenshots.realView')">
        {{ i18n.t('local.screenshots.realView') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRender05"
        :alt="i18n.t('local.screenshots.render')">
        {{ i18n.t('local.screenshots.render') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRealView05"
        :alt="i18n.t('local.screenshots.realView')">
        {{ i18n.t('local.screenshots.realView') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRender06"
        :alt="i18n.t('local.screenshots.render')">
        {{ i18n.t('local.screenshots.render') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRealView06"
        :alt="i18n.t('local.screenshots.realView')">
        {{ i18n.t('local.screenshots.realView') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRender07"
        :alt="i18n.t('local.screenshots.render')">
        {{ i18n.t('local.screenshots.render') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRealView07"
        :alt="i18n.t('local.screenshots.realView')">
        {{ i18n.t('local.screenshots.realView') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRender08"
        :alt="i18n.t('local.screenshots.render')">
        {{ i18n.t('local.screenshots.render') }}
      </AppFigure>

      <AppFigure
        :src="exhibitionManagementRealView08"
        :alt="i18n.t('local.screenshots.realView')">
        {{ i18n.t('local.screenshots.realView') }}
      </AppFigure>
    </template>

    <template #position>
      {{ $t('projectsList.exhibitionManagement.position') }}
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.exhibitionManagement.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.exhibitionManagement.tools')"
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

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;

  .exhibition-management-page {
    :deep(.app-article-misc-screenshots > .app-figure) {
      flex-basis: calc(50% - #{fun.space(5)});
    }
  }
</style>
