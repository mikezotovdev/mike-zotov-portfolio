<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppLinksList from '@/components/utils/app-links-list/AppLinksList.vue'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import vegansurviveCommunityVisitors from './images/vegansurvive-community-visitors.png'
  import vegansurviveCommunityViews from './images/vegansurvive-community-views.png'
  import vegansurviveCommunityWebsite from './images/vegansurvive-community-website.jpg'
  import vegansurviveCommunityBlogPageRecipe from './images/vegansurvive-community-blog-page-recipe.jpg'
  import vegansurviveCommunityBlogPageTastyRecipe from './images/vegansurvive-community-blog-page-tasty-recipe.jpg'
  import vegansurviveCommunityBlogPageFunnyRecipe from './images/vegansurvive-community-blog-page-funny-recipe.jpg'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'Интернет-сообщество vegansurvive',
        clientAndChallenge: 'Собственному интернет-сообществу требуется регулярный контент-менеджмент, модерация, план развития, организация, съемка ютуб-роликов и написание музыкального сопровождения для них. Необходимо создавать оригинальный контент, продумывать способы продвижения сообщества и увеличения активной части аудитории, а также возможные способы монетизации проекта.',
        technologiesAndSolutions: 'Особый, аутентичный стиль общения с аудиторией, выстроенные доверительные, дружеские отношения, создали действительно крупное сообщество с активной аудиторией. Оригинальный контент и умение в SMM позволяют сообществу чаще появляться в рекомендациях в социальных сетях, подробные рецепты и видеоролики не оставляют равнодушными даже самых придирчивых подписчиков. Для монтажа роликов используется Adobe Premiere Pro, планируется переход на DaVinci Resolve. Музыка для роликов создается, сводится и мастерится в FL Studio.',
        results: 'За 8 лет существования сообщества, аудитория органически выросла до 100000 подписчиков, выпущена собственная линейка одежды, запланировано расширение интернет-магазина. Продуманный контент-план и способы органического роста числа подписчиков в ближайшие два года должны, как минимум, удвоить аудиторию сообщества. В планах — открытие собственной точки продажи мерча и коллаборации с дружественными площадками. Также одним из главных достижений является участие меня и моей команды в чемпионате мира по приготовлению фалафеля в Мальмё (Швеция) в 2019 году.',
        screenshots: {
          views: 'Уникальные посетители и просмотры',
          visitors: 'Пик охвата аудитории паблика в вк',
          website: 'Сайт проекта',
          recipe: 'Пример рецепта',
          tastyRecipe: 'Рецепт выпечки',
          funnyRecipe: 'Забавный рецепт'
        },
        links: [
          { link: 'https://vegansurvive.com', text: 'Сайт проекта' },
          { link: 'https://vk.com/vegansurvive/', text: 'Группа вконтакте' },
          { link: 'https://www.youtube.com/vegansurvive', text: 'YouTube' },
          { link: 'https://soundcloud.com/vegansurvive', text: 'Soundcloud' }
        ]
      }
    },
    [Locale.EN]: {
      local: {
        title: 'Internet community vegansurvive',
        clientAndChallenge: 'My own Internet community requires regular content management, moderation, a development plan, organization, shooting YouTube videos and writing music for them. It is necessary to create original content, think over ways to promote the community and increase the active part of the audience, as well as possible ways to monetize the project.',
        technologiesAndSolutions: 'A special, authentic style of communication with the audience, trusting and friendly relations created a really large community with an active audience. Original content and skill in SMM allows vegansurvive to appear more often in recommendations on social networks. Detailed recipes and videos will impress even the most picky subscribers. Adobe Premiere Pro is used for video editing, transition to DaVinci Resolve is planned. Music for videos is created, mixed and mastered in FL Studio on my own.',
        results: 'Over the 8 years of the community\'s existence, the audience has organically grown to 100,000 subscribers, its own merch has been released, and the expansion of the online clothing store is planned. A thoughtful content plan and ways to grow organic subscribers over the next two years should at least double the community\'s audience. We plan to open our own point of sale and collaboration with friendly sites. Also one of the main achievements is the participation of my team and me in the World Falafel Cooking Championships in Malmö (Sweden) in 2019.',
        screenshots: {
          views: 'Unique visitors and views of vk public',
          visitors: 'Visitors traffic of vk public',
          website: 'The website',
          recipe: 'Recipe example',
          tastyRecipe: 'Baking recipe',
          funnyRecipe: 'Funny recipe (banana peel)'
        },
        links: [
          { link: 'https://vegansurvive.com/en/', text: 'Vegansurvive website' },
          { link: 'https://vk.com/vegansurvive/', text: 'VK group' },
          { link: 'https://www.youtube.com/vegansurvive', text: 'YouTube' },
          { link: 'https://soundcloud.com/vegansurvive', text: 'Soundcloud' }
        ]
      }
    }
  }

  const i18n = useI18n({
    messages
  })
</script>

<template>
  <AppArticle class="vegansurvive-community-page">
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
        :src="vegansurviveCommunityVisitors"
        :alt="i18n.t('local.screenshots.views')">
        {{ i18n.t('local.screenshots.views') }}
      </AppFigure>

      <AppFigure
        :src="vegansurviveCommunityViews"
        :alt="i18n.t('local.screenshots.visitors')">
        {{ i18n.t('local.screenshots.visitors') }}
      </AppFigure>

      <AppFigure
        class="vegansurvive-community-page-figure is-website"
        :src="vegansurviveCommunityWebsite"
        :alt="i18n.t('local.screenshots.website')">
        {{ i18n.t('local.screenshots.website') }}
      </AppFigure>

      <AppFigure
        :src="vegansurviveCommunityBlogPageRecipe"
        :alt="i18n.t('local.screenshots.recipe')">
        {{ i18n.t('local.screenshots.recipe') }}
      </AppFigure>

      <AppFigure
        :src="vegansurviveCommunityBlogPageTastyRecipe"
        :alt="i18n.t('local.screenshots.tastyRecipe')">
        {{ i18n.t('local.screenshots.tastyRecipe') }}
      </AppFigure>

      <AppFigure
        class="vegansurvive-community-page-figure is-funny-recipe"
        :src="vegansurviveCommunityBlogPageFunnyRecipe"
        :alt="i18n.t('local.screenshots.funnyRecipe')">
        {{ i18n.t('local.screenshots.funnyRecipe') }}
      </AppFigure>
    </template>

    <template #position>
      <p>{{ $t('projectsList.vegansurviveCommunity.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.vegansurviveCommunity.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.vegansurviveCommunity.tools')"
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
  .vegansurvive-community-page {
    .vegansurvive-community-page-figure {
      &.is-website {
        flex-basis: 100%;
      }

      &.is-funny-recipe {
        max-width: 500px;
        margin: 0 auto;
      }
    }
  }
</style>
