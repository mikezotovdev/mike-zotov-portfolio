<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import scientificPublicationsDataFiltering from './images/scientific-publications-data-filtering.png'
  import scientificPublicationsPublicationEditing from './images/scientific-publications-publication-editing.png'
  import scientificPublicationsDataValidation from './images/scientific-publications-data-validation.png'
  import scientificPublicationsDataMapping from './images/scientific-publications-data-mapping.png'
  import scientificPublicationsDataMappingEditing from './images/scientific-publications-data-mapping-editing.png'
  import scientificPublicationsReportExport from './images/scientific-publications-report-export.png'
  import scientificPublicationsReportDownload from './images/scientific-publications-report-download.png'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'Система учета научных достижений RADOMS на MEAN-стеке',
        clientAndChallenge: 'Научной лаборатории СПИИРАН требовалось разработать систему, позволяющую автоматизировать сбор, хранение, обработку, модификацию, агрегацию данных о научных достижениях членов лаборатории и других научных сотрудников. Для подачи заявок на участие в грантах, а также периодического отчета перед образовательными ведомствами, требуется заполнять однообразные файлы, указывая научные достижения определенного спектра (например, участие в научных конференциях, либо публикации в SCOPUS-индексируемых журналах т.д.). Требовалась система, которая позволит автоматизировать обработку таких данных — принимать на вход электронные документы, обрабатывать и добавлять их в систему, а также автоматически создавать отчеты необходимого образца.',
        technologiesAndSolutions: 'В качестве архитектора и ведущего фул-стек разработчика, создал структуру проекта и модель документно-ориентированной базы данных, реализовал аутентификацию пользователей, функции добавления, редактирования и удаления сведений о научных достижениях, фильтрацию данных на стороне клиента. Реализовал возможность пакетной обработки данных: импорт записей из *.xls файлов и их меппинг на поля базы данных. Создана возможность экспорта данных в документы *.doc, *.xls, согласно заданным ГОСТам. Добавлена возможность импорта данных о научных достижениях из elib, реализованы административные страницы для обработки статистических данных о публикациях и пользователях системы. Создан адаптивный дизайн приложения, которым удобно пользоваться с планшетов и мобильных устройств. Проводил обучение и менторство стажеров-разработчиков.',
        results: 'Реализованное приложение позволило научной лаборатории автоматизировать подачу отчетов и заявок на гранты, снизить административную нагрузку. Приложение разрешило проблему сбора, обработки и актуализации информации о научных достижениях. Несколько студентов лаборатории, вовлеченных в проект, защитили курсовые и выпускные квалификационные работы на базе проекта.',
        screenshots: {
          dataFiltering: 'Главный вид приложения и фильтрация данных',
          publicationEditing: 'Редактирование информации о публикации',
          dataValidation: 'Валидация данных',
          dataMapping: 'Маппинг полей импортированного документа на поля БД',
          dataMappingEditing: 'Редактирование данных перед добавлением в БД',
          exportReport: 'Экспорт отчета, настройка',
          downloadReport: 'Список отчетов для скачивания'
        }
      }
    },
    [Locale.EN]: {
      local: {
        title: 'Outcomes management system for researchers',
        clientAndChallenge: 'The department of St. Petersburg Institute for Informatics and Automation of the Russian Academy of Sciences (SPIIRAS) asked for the application, which could automate the import of the outcomes of academic research and also automate the generation of reports. These reports are recurrently requested by the educational authorities and also used in applications for participation in grants. Such a report could contain a specific set of outcomes of academic research (such as participation in scientific conferences, or publications in SCOPUS-indexed journals, etc.), the template of the report could have different forms and should be built in different formats.',
        technologiesAndSolutions: 'As a full-stack developer and architecture of the project, I developed the structure of the project and the data model for the document database. I implemented the authentication, the major features such as adding and importing *.xls files (and further mapping of the fields) with publications outcomes to the system and also modifying and removing them. Data filtering and batch data manipulation were also implemented and added to the system. The importing of the outcomes from elibrary service was also implemented. The application was optimized for tablet and phone usage. Conducted training and mentoring of interns-developers.',
        results: 'The implemented application allowed the scientific laboratory to automate the submission of reports and applications for grants, and to reduce the administrative burden. The application solved the problem of collecting, processing and updating information about academic outcomes. Several laboratory students involved in the project successfully graduated from the University with the qualification papers based on the basis of the project.',
        screenshots: {
          dataFiltering: 'The main view and data filtering',
          publicationEditing: 'Outcomes data editing',
          dataValidation: 'Data validation',
          dataMapping: 'Mapping of the imported document to the DB fields',
          dataMappingEditing: 'Data editing before adding to the DB',
          exportReport: 'Report export tuning',
          downloadReport: 'List of reports for download'
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
        :src="scientificPublicationsDataFiltering"
        :alt="i18n.t('local.screenshots.dataFiltering')">
        {{ i18n.t('local.screenshots.dataFiltering') }}
      </AppFigure>

      <AppFigure
        :src="scientificPublicationsPublicationEditing"
        :alt="i18n.t('local.screenshots.publicationEditing')">
        {{ i18n.t('local.screenshots.publicationEditing') }}
      </AppFigure>

      <AppFigure
        :src="scientificPublicationsDataValidation"
        :alt="i18n.t('local.screenshots.dataValidation')">
        {{ i18n.t('local.screenshots.dataValidation') }}
      </AppFigure>

      <AppFigure
        :src="scientificPublicationsDataMapping"
        :alt="i18n.t('local.screenshots.dataMapping')">
        {{ i18n.t('local.screenshots.dataMapping') }}
      </AppFigure>

      <AppFigure
        :src="scientificPublicationsDataMappingEditing"
        :alt="i18n.t('local.screenshots.dataMappingEditing')">
        {{ i18n.t('local.screenshots.dataMappingEditing') }}
      </AppFigure>

      <AppFigure
        :src="scientificPublicationsReportExport"
        :alt="i18n.t('local.screenshots.exportReport')">
        {{ i18n.t('local.screenshots.exportReport') }}
      </AppFigure>

      <AppFigure
        :src="scientificPublicationsReportDownload"
        :alt="i18n.t('local.screenshots.downloadReport')">
        {{ i18n.t('local.screenshots.downloadReport') }}
      </AppFigure>
    </template>

    <template #position>
      <p>{{ $t('projectsList.scientificPublications.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.scientificPublications.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.scientificPublications.tools')"
          :key="tool">
          {{ tool }}
        </AppChipsItem>
      </AppChips>
    </template>
  </AppArticle>
</template>
