<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'Цикл приложений отслеживания клинических испытаний',
        clientAndChallenge: 'Компании «Johnson & Johnson» требовался цикл приложений для управления данными о клинических испытаниях, которые включали бы добавление, модифицирование, отслеживание и обработку данных, а также интерфейс для работы с базой данных.',
        technologiesAndSolutions: 'В ходе многолетней работы с компанией, было разработано несколько веб-приложений, каждое из которых решало спектр задач из отдельных аспектов управления данными. В проектах занимался разработкой фронтенд части приложений, самостоятельно выпустил два мажорных релиза, над которыми работал как фул-стек разработчик. Реализовал множество отдельных компонентов приложений, занимался архитектурными задачами, вопросами производительности, виртуализацией табличных данных, разработкой базы данных приложения, миграцией данных, коммуникацией с командой заказчика.',
        results: 'Приложения были реализованы и развернуты, пользователи систем теперь могут самостоятельно, без помощи IT-специалистов, обрабатывать данные о клинических испытаниях. Современный интерфейс и простота приложений позволяет затрачивать минимальные ресурсы на обучение персонала. Автоматизированные email-рассылки об обновлениях данных приоритетных исследований позволяют оптимизировать использование рабочего времени.',
        info: 'Скриншоты недоступны из-за политики конфиденциальности проекта.'
      }
    },
    [Locale.EN]: {
      local: {
        title: 'Clinical trials tracking system',
        clientAndChallenge: ' «Johnson & Johnson» company asked for a series of applications for managing the results of clinical trials. The applications aimed to add, modify and track the trials data and metadata, and the interface for working with the database.',
        technologiesAndSolutions: 'In the course of many years of work with the company, several applications were implemented, each of which covered a range of tasks from individual aspects of data management. I built front-end for the applications, but also worked as a full-stack developer and independently released two major releases. Implemented different components, worked on architecture issues, performance-related issues, virtualized table-data, developed the database, performed data-migration, and communicated with the team of the customer.',
        results: 'The applications were implemented and deployed. Now, the users of the systems can process clinical trials data on their own, without the help of IT specialists. The modern interface and simplicity of the applications allow you to spend minimal resources on staff training. Automated email updates for priority research data allow you to optimize the use of working time.',
        info: 'The screenshots are not available due to the security policy of the given project.'
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
      <p>{{ $t('projectPage.screenshotsUnavailable') }}</p>
    </template>

    <template #position>
      <p>{{ $t('projectsList.clinicalTrials.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.clinicalTrials.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.clinicalTrials.tools')"
          :key="tool">
          {{ tool }}
        </AppChipsItem>
      </AppChips>
    </template>
  </AppArticle>
</template>
