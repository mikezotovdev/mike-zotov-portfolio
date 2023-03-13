<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppLinksList from '@/components/utils/app-links-list/AppLinksList.vue'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import bookingEngineMainView from './images/booking-engine-main-view.png'
  import bookingEngineAdditionalServicesSeatSelect from './images/booking-engine-additional-services-seat-select.png'
  import bookingEnginePassengersServices from './images/booking-engine-passengers-services.png'
  import bookingEngineMobileSeatChoosing from './images/booking-engine-mobile-seat-choosing.png'
  import bookingEngineMobileWarning from './images/booking-engine-mobile-warning.png'
  import bookingEngineLanguageSelect from './images/booking-engine-language-select.png'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'Система бронирования авиабилетов на Vue.js',
        clientAndChallenge: 'Заказчик — крупнейшая российская авиакомпания «Уральские авиалинии», выполняющая внутренние и международные рейсы. Клиент был заинтересован в создании современного веб-сервиса по бронированию авиабилетов, которым также можно пользоваться с мобильных устройств с ограниченным доступом в интернет.',
        technologiesAndSolutions: 'В качестве ведущего фронтенд-разработчика и архитектора приложения, я выбрал фреймворк Vue.js. В краткие сроки реализовал тестовую версию приложения с фейк-данными для демонстрации заказчику. Реализовал большинство компонентов и страниц приложения, валидацию, интернационализацию, согласовывал и разрабатывал модель данных приложения, предлагал улучшения UI/UX характеристик.',
        results: 'Приложение реализовано и введено в эксплуатацию. Современный адаптивный дизайн приложения создает лучшее впечатление от пользования системой бронирования и о самой авиакомпании. Оптимизация приложения под мобильные устройства позволяет бронировать авиабилеты с таким же удобством, как и с компьютера.',
        screenshots: {
          mainView: 'Главный вид приложения',
          i18n: 'Интернационализация',
          seatService: 'Выбор места в модальном окне',
          dataValidation: 'Валидация данных',
          responsiveDesign: 'Адаптивный дизайн компонентов',
          mobileWarning: 'Модальное окно с предупреждением'
        },
        links: [{ link: 'https://www.uralairlines.ru/', text: 'Сайт бронирования авиабилетов' }]
      }
    },
    [Locale.EN]: {
      local: {
        title: 'Booking online system on Vue.js',
        clientAndChallenge: 'The customer — one of the largest airline companies in Russia, which operates domestic and international flights. The client was interested in having a modern web-service for online airline tickets booking, with cross-device access and small application size.',
        technologiesAndSolutions: 'As a senior front-end developer and architecture of the project, I chose the framework Vue.js. In a short period I implemented a test version of the application with fake data in order to demonstrate it to the customer. I implemented most of the components and pages of the application, including validation and internationalization; also discussed and developed the data model of the application, proposed different UI/UX improvements.',
        results: 'The application was successfully implemented and deployed. The modern responsive interface of the app creates the best impression from the use of the booking engine system and from the company itself. The application is optimized for mobile-use as good as the desktop version.',
        screenshots: {
          mainView: 'Main view of the app',
          i18n: 'Internationalization',
          seatService: 'Seat choosing in a modal window',
          dataValidation: 'Data validation',
          responsiveDesign: 'Responsive design of components',
          mobileWarning: 'Mobile warning modal window'
        },
        links: [{ link: 'https://www.uralairlines.ru/', text: 'Booking online system' }]
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
        :src="bookingEngineMainView"
        :alt="i18n.t('local.screenshots.mainView')">
        {{ i18n.t('local.screenshots.mainView') }}
      </AppFigure>

      <AppFigure
        :src="bookingEngineAdditionalServicesSeatSelect"
        :alt="i18n.t('local.screenshots.seatService')">
        {{ i18n.t('local.screenshots.seatService') }}
      </AppFigure>

      <AppFigure
        :src="bookingEnginePassengersServices"
        :alt="i18n.t('local.screenshots.dataValidation')">
        {{ i18n.t('local.screenshots.dataValidation') }}
      </AppFigure>

      <AppFigure
        :src="bookingEngineLanguageSelect"
        :alt="i18n.t('local.screenshots.i18n')">
        {{ i18n.t('local.screenshots.i18n') }}
      </AppFigure>

      <AppFigure
        :src="bookingEngineMobileSeatChoosing"
        :alt="i18n.t('local.screenshots.responsiveDesign')">
        {{ i18n.t('local.screenshots.responsiveDesign') }}
      </AppFigure>

      <AppFigure
        :src="bookingEngineMobileWarning"
        :alt="i18n.t('local.screenshots.mobileWarning')">
        {{ i18n.t('local.screenshots.mobileWarning') }}
      </AppFigure>
    </template>

    <template #position>
      <p>{{ $t('projectsList.bookingEngine.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.bookingEngine.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.bookingEngine.tools')"
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
