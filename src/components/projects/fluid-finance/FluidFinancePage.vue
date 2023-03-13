<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppLinksList from '@/components/utils/app-links-list/AppLinksList.vue'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import fluidSendMoneyOptions from './images/fluid-send-money-options.jpg'
  import fluidSendMoneyInternal from './images/fluid-send-money-internal.jpg'
  import fluidSendMoneyByLink from './images/fluid-send-money-by-link.jpg'
  import fluidProfile2faPreference from './images/fluid-profile-2fa-preference.jpg'
  import fluidMainAppScreen from './images/fluid-main-app-screen.jpg'
  import fluidCurrencyFx from './images/fluid-currency-fx.jpg'
  import fluidSendMoneyViaUkFasterPayments from './images/fluid-send-money-via-uk-faster-payments.jpg'
  import fluidVirtualCardDetails from './images/fluid-virtual-card-details.jpg'
  import fluidWeb3WalletConnect from './images/fluid-web3-wallet-connect.jpg'
  import fluidBankingCardScreen from './images/fluid-banking-card-screen.jpg'
  import fluidMobileViewAccountsCryptoAndCards from './images/fluid-mobile-view-accounts-crypto-and-cards.jpg'
  import fluidMobilePdfStatement from './images/fluid-mobile-pdf-statement.jpg'
  import AppTitledList from '@/components/utils/app-titled-list/AppTitledList.vue'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'Швейцарский необанк с криптой',
        clientAndChallenge: 'Я пришел в стартап на самом раннем этапе в качестве ведущего фронтенд-разработчика. Требовалось разработать веб-приложение, которое предоставляет банковские функции, такие как карточные программы и обмен валют, а также функции по работе с криптовалютами, такие как mint, redeem, обмен и бриджинг (он/офф рэмп) между CeFi и DeFi.',
        technologiesAndSolutions: 'Первоначально проект был запущен на Vue.js (2), JavaScript и Web3Modal (v1), которая предоставляет API для взаимодействия со смарт-контрактами. Vuex использовался как система управления состоянием. Использовались сервисы REST API и WebSockets. За время моей работы проект был переведен на Vue 3, TypeScript, Pinia, ethers.js (wagmi) и Wallet Connect (v2). Во время своей работы я реализовал большинство основных фичей и флоу, в том числе ключевые компоненты для библиотеки пользовательского интерфейса. В качестве ведущего фронтенд разработчика я также отвечал за ревью кода и фасилитировал все вопросы фронтенд команды и технического директора. Кроме того, я отвечал за найм и собеседования кандидатов, а также за проведение демо для CEO, инвесторов, потенциальных партнеров и коммьюнити.',

        featuresListTitle: 'Вот краткий список наиболее ценных функций, которые я реализовал самостоятельно.',

        ceFiFeaturesListTitle: 'Банковские фичи',
        ceFiFeaturesList: [
          'Поддержка 27 различных валют',
          'Создание банковских счетов',
          'Выпуск и управление виртуальными картами',
          'Выпуск и управление физическими картами',
          'Поддержка 17 типов международных и местных переводов (например, SWIFT/SEPA/ACH/CLABE/...)',
          'Внутренние переводы по email/телефону/никнейму',
          'Внешние переводы по ссылке или электронной почте для незарегистрированных пользователей',
          'Обмен валют',
          'Пополнение счета по банковским реквизитам',
          'Пополнение счета картой',
          'Пополнение счета через PayPal',
          'Двухфакторная аутентификация с помощью OTP или подписи Web3 кошелька',
          'KYC',
          'Покупка акций компании',

          'Отчеты о транзакциях и счетах в формате PDF',
          'Кросс-клиентские шаблоны электронных писем'
        ],

        deFiFeaturesListTitle: 'Крипто фичи',
        deFiFeaturesList: [
          'Взаимодействие с Web3 кошельками и смарт-контрактами — вызов методов чтения и записи',
          'Поддержка нескольких чейнов — Arbitrum и Mainnet',
          'Получение и отслеживание балансов криптоактивов',
          'Мультипул свап (ребята, если вы читаете это на русском, переключитесь на английский, слишком кринжово звучит все)',
          'Минт и редим — обмен по курсу 1:1 стейблкоина на фиат и обратно',
          'Покупка и продажа криптовалют через Kraken API',
          'Отправка крипты внутри системы на кастодиальный кошелек',
          'Отправка крипты на некастодиальный кошелек (вывод)',
          'Вайтлистинг кошелька',
          'Подписание сообщений',
          'Добавление токена в Метамаск'
        ],

        results: 'Веб-приложение насчитывает 120 000 пользователей из 42 стран. Общее количество активных пользователей в месяц составляет 25 000. Ежемесячный доход достиг 500 000 долларов, самая крупная транзакция — 600 000 долларов, а ежемесячный объем транзакций — 5 000 000 долларов.',
        screenshots: {
          fluidMainAppScreen: 'Главный экран',
          fluidWeb3WalletConnect: 'Подключение веб 3 кошелька',
          fluidCurrencyFx: 'Обмен валют',
          fluidSendMoneyOptions: 'Варианты отправки денег',
          fluidSendMoneyInternal: 'Внутренний перевод',
          fluidSendMoneyViaUkFasterPayments: 'Международный перевод через UK FP',
          fluidSendMoneyByLink: 'Отправка денег по ссылке',
          fluidBankingCardScreen: 'Управление картой',
          fluidVirtualCardDetails: 'Детали карты',
          fluidProfile2faPreference: 'Настройки двухфакторной аутентификации',
          fluidMobileViewAccountsCryptoAndCards: 'Мобильный вид',
          fluidMobilePdfStatement: 'Отчет о транзакции в формате PDF'
        },
        links: [
          { link: 'https://app.fluid.ch', text: 'Веб-приложение Fluid' }
        ]
      }
    },
    [Locale.EN]: {
      local: {
        title: 'Swiss neobank crypto start-up',
        clientAndChallenge: 'I entered the start-up at a very early stage as a lead front-end developer. It was required to develop the web application, that provides banking features like cards program and currency fx, and also crypto features like mint, redeem, swap, and a core feature — bridging between CeFi and DeFi.',
        technologiesAndSolutions: 'The project was initially started with Vue.js (2), JavaScript, and Web3Modal (v1) library that provides the API to interact with smart contracts. Vuex was used as a state-management system. REST API and WebSockets services were used. During my work, the project was migrated to Vue 3, TypeScript, Pinia, ethers.js (wagmi), and Wallet Connect (v2) libraries. I implemented most of the core features and flows as well as the key components for the UI library. As a lead front-end developer, I was also responsible for reviewing my colleagues\' code and facilitating all the questions from the FE team and CTO. On top of that, I was responsible for hiring and interviewing candidates and holding the demos for the CEO, investors, potential partners, and the community.',

        featuresListTitle: 'Here is a short list of the most valuable features that I implemented on my own.',

        ceFiFeaturesListTitle: 'Traditional finance',
        ceFiFeaturesList: [
          'Support of 27 different currencies',
          'Creating banking accounts',
          'Issuing and managing virtual cards',
          'Issuing and managing physical cards',
          'Support of 17 international and domestic transfer types (e.g. SWIFT/SEPA/ACH/CLABE/...)',
          'Internal transfers via email/phone/nickname',
          'External transfers via link or email for not registered users',
          'Currency fx',
          'Top up an account via bank details',
          'Top up an account via card',
          'Top up an account via PayPal',
          '2-Factor Authentication via OTP or Web3 wallet signature',
          'KYC flow',
          'Buy company shares',

          'Transaction and account PDF statements',
          'Cross-client email templates'
        ],

        deFiFeaturesListTitle: 'Crypto finance',
        deFiFeaturesList: [
          'Interaction with Web3 wallets and smart contracts, i.e. calling read and write methods',
          'Multi-chain support — Arbitrum and Mainnet',
          'Fetching and watching crypto-assets balances',
          'Multi-pool swap',
          'Crypto mint and redeem — fx with 1:1 rate from stablecoin to fiat and back',
          'Buy and sell crypto via Kraken API',
          'Send crypto internally to a custodial wallet',
          'Send crypto to a non-custodial wallet (withdrawal)',
          'Wallet whitelisting',
          'Signing messages',
          'Adding token to Metamask'
        ],

        results: 'The web application has 120,000 total users from 42 countries. The total count of monthly active users is 25,000. Monthly revenue reached $500,000, the biggest transaction is $600,000 and the monthly transaction volume is $5,000,000.',
        screenshots: {
          fluidMainAppScreen: 'Main screen',
          fluidWeb3WalletConnect: 'Web3 wallet connect',
          fluidCurrencyFx: 'Currency fx',
          fluidSendMoneyOptions: 'Send money options',
          fluidSendMoneyInternal: 'Send money internal',
          fluidSendMoneyViaUkFasterPayments: 'Send money externally via UK FP',
          fluidSendMoneyByLink: 'Send money by link',
          fluidBankingCardScreen: 'Card managing',
          fluidVirtualCardDetails: 'Card details',
          fluidProfile2faPreference: '2FA preferences',
          fluidMobileViewAccountsCryptoAndCards: 'Mobile view',
          fluidMobilePdfStatement: 'PDF transaction statement'
        },
        links: [
          { link: 'https://app.fluid.ch', text: 'Fluid web app' }
        ]
      }
    }
  }

  const i18n = useI18n({
    messages
  })
</script>

<template>
  <AppArticle class="fluid-finance-page">
    <template #title>
      {{ i18n.t('local.title') }}
    </template>
    <template #client-and-task>
      <p>{{ i18n.t('local.clientAndChallenge') }}</p>
    </template>
    <template #technologies>
      <p class="fluid-finance-page-paragraph">
        {{ i18n.t('local.technologiesAndSolutions') }}
      </p>

      <h3 class="fluid-finance-page-subtitle">
        {{ i18n.t('local.featuresListTitle') }}
      </h3>

      <div class="fluid-finance-page-lists">
        <AppTitledList :items="i18n.tm('local.ceFiFeaturesList') as string[]">
          {{ i18n.t('local.ceFiFeaturesListTitle') }}
        </AppTitledList>

        <AppTitledList :items="i18n.tm('local.deFiFeaturesList') as string[]">
          {{ i18n.t('local.deFiFeaturesListTitle') }}
        </AppTitledList>
      </div>
    </template>
    <template #results>
      <p>{{ i18n.t('local.results') }}</p>
    </template>
    <template #screenshots>
      <AppFigure
        :src="fluidMainAppScreen"
        :alt="i18n.t('local.screenshots.fluidMainAppScreen')">
        {{ i18n.t('local.screenshots.fluidMainAppScreen') }}
      </AppFigure>

      <AppFigure
        :src="fluidWeb3WalletConnect"
        :alt="i18n.t('local.screenshots.fluidWeb3WalletConnect')">
        {{ i18n.t('local.screenshots.fluidWeb3WalletConnect') }}
      </AppFigure>

      <AppFigure
        :src="fluidCurrencyFx"
        :alt="i18n.t('local.screenshots.fluidCurrencyFx')">
        {{ i18n.t('local.screenshots.fluidCurrencyFx') }}
      </AppFigure>

      <AppFigure
        :src="fluidSendMoneyOptions"
        :alt="i18n.t('local.screenshots.fluidSendMoneyOptions')">
        {{ i18n.t('local.screenshots.fluidSendMoneyOptions') }}
      </AppFigure>

      <AppFigure
        :src="fluidSendMoneyInternal"
        :alt="i18n.t('local.screenshots.fluidSendMoneyInternal')">
        {{ i18n.t('local.screenshots.fluidSendMoneyInternal') }}
      </AppFigure>

      <AppFigure
        :src="fluidSendMoneyViaUkFasterPayments"
        :alt="i18n.t('local.screenshots.fluidSendMoneyViaUkFasterPayments')">
        {{ i18n.t('local.screenshots.fluidSendMoneyViaUkFasterPayments') }}
      </AppFigure>

      <AppFigure
        :src="fluidSendMoneyByLink"
        :alt="i18n.t('local.screenshots.fluidSendMoneyByLink')">
        {{ i18n.t('local.screenshots.fluidSendMoneyByLink') }}
      </AppFigure>

      <AppFigure
        :src="fluidBankingCardScreen"
        :alt="i18n.t('local.screenshots.fluidBankingCardScreen')">
        {{ i18n.t('local.screenshots.fluidBankingCardScreen') }}
      </AppFigure>

      <AppFigure
        :src="fluidVirtualCardDetails"
        :alt="i18n.t('local.screenshots.fluidVirtualCardDetails')">
        {{ i18n.t('local.screenshots.fluidVirtualCardDetails') }}
      </AppFigure>

      <AppFigure
        :src="fluidProfile2faPreference"
        :alt="i18n.t('local.screenshots.fluidProfile2faPreference')">
        {{ i18n.t('local.screenshots.fluidProfile2faPreference') }}
      </AppFigure>

      <AppFigure
        :src="fluidMobileViewAccountsCryptoAndCards"
        :alt="i18n.t('local.screenshots.fluidMobileViewAccountsCryptoAndCards')">
        {{ i18n.t('local.screenshots.fluidMobileViewAccountsCryptoAndCards') }}
      </AppFigure>

      <AppFigure
        :src="fluidMobilePdfStatement"
        :alt="i18n.t('local.screenshots.fluidMobilePdfStatement')">
        {{ i18n.t('local.screenshots.fluidMobilePdfStatement') }}
      </AppFigure>
    </template>

    <template #position>
      <p>{{ $t('projectsList.fluidFinance.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.fluidFinance.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.fluidFinance.tools')"
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
  @use '@/styles/utils/mixins.scss' as mixins;

  .fluid-finance-page {
    .fluid-finance-page-paragraph {
      margin-bottom: fun.space(10);
    }

    .fluid-finance-page-subtitle {
      margin-bottom: fun.space(10);
      @include mixins.text-h3;
    }

    .fluid-finance-page-lists {
      display: flex;
      gap: fun.space(10);

      @include mixins.mobile {
        flex-wrap: wrap;
      }
    }
  }
</style>
