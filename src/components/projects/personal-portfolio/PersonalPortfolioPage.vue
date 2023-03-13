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
        title: 'Персональный сайт-портфолио',
        clientAndChallenge: 'Требовалось организовать список проектов, в которых я принимал участие, в виде сайта-портфолио. Разработка самого сайта вылилась в еще один проект с интересными задачами.',
        technologiesAndSolutions: 'Для портфолио была необходима поддержка мультиязычности не только на уровне перевода текста страниц, но и на уровне метаданных: заголовка, описания, open graph метаданных, перевода мультимедиа и семантики сайта (роутинг). Метаданные сильно влияют на SEO-продвижение сайта в поисковой выдаче — готовых решений для интернационализации роутинга без базового префикса (например, /ru/) и маппинга страниц переводов в открытом доступе не было, либо они были недостаточно гибкими. Такой меппинг я реализовал на уровне каждого роута сайта (создал своеобразный аналог WPML — это, пожалуй, самый популярный плагин интернационализации для сайтов на CMS). Кроме перевода ссылок реализовал возможность перевода мультимедиа с асинхронной подгрузкой (картинка качается только тогда, когда это нужно). Асинхронная загрузка также используется для перевода основного текста сайта. Пререндеринг (SSG) позволит поисковым системам правильно индексировать сайт, кстати, обновление метаданных страницы отлично уживается с пререндерингом. В предыдущих проектах поддержка темной цветовой схемы не требовалась, поэтому реализация ее для меня была новой интересной задачей, с которой я легко справился, используя CSS-переменные. В проекте использовал новейший стек технологий — Vue 3 (composition API), TypeScript, Pinia и vite.',
        results: 'Результат — красивый сайт с минималистичным дизайном и продуманным функционалом. Код проекта доступен на гитхабе.',
        links: [{ link: 'https://github.com/mikezotovdev/mike-zotov-portfolio', text: 'Код проекта на Github' }]
      }
    },
    [Locale.EN]: {
      local: {
        title: 'Personal portfolio site',
        clientAndChallenge: 'It was required to organize the list of projects in which I took part in the form of a portfolio site. The development of the site itself resulted in another project with interesting tasks.',
        technologiesAndSolutions: 'For the portfolio, multilingual support was needed not only at the level of translating the text of the pages but also at the level of metadata: title, description, open graph metadata, translation of multimedia, and site semantics (routing). Metadata greatly affects the SEO of a website in search results — there were no ready-made solutions for the internationalization of routing without a basic prefix (e.g. /en/), so I created one. I implemented such a mapping at the level of each route of the site (I created a kind of WPML analog — this is perhaps the most popular internationalization plugin for sites on CMS). In addition to translating links, I implemented the ability to translate multimedia with lazy loading (images are downloaded on demand). Lazy/asynchronous loading is also used for the main content (texts) of the website. Static site generation (SSG or prerendering) allows search engines to index the site correctly, by the way, updating the page metadata gets along well with prerendering. In previous projects, support for the dark color scheme was not required, so implementing it was an interesting new task for me, which I easily coped with. I used the latest front-end technologies — Vue 3 (composition API), TypeScript, Pinia, and vite.',
        results: 'The result is a beautiful website with a minimalistic design and well-thought-out functionality. Check out the code on my GitHub!',
        links: [{ link: 'https://github.com/mikezotovdev/mike-zotov-portfolio', text: 'Project\'s code on Github' }]
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
      <p>{{ $t('projectsList.personalPortfolio.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.personalPortfolio.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.personalPortfolio.tools')"
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
