<script setup lang="ts">
  import AppArticle from '@/components/utils/app-article/AppArticle.vue'
  import { Locale } from '@/types/i18n'
  import { useI18n } from 'vue-i18n'
  import AppChips from '@/components/utils/app-chips/AppChips.vue'
  import AppChipsItem from '@/components/utils/app-chips/AppChipsItem.vue'
  import { ChipsType } from '@/types/chips-type'
  import AppLinksList from '@/components/utils/app-links-list/AppLinksList.vue'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'

  import deepDaoApplication from './images/deep-dao-application.jpg'
  import deepDaoWalletConnect from './images/deep-dao-wallet-connect.jpg'

  const messages: Record<Locale, any> = {
    [Locale.RU]: {
      local: {
        title: 'DEEP DAO — привлечение $300K инвестиций через криптовалюты',
        clientAndChallenge: 'В очередном раунде привлечения инвестиций в швейцарский крипто-стартап, появилась необходимость в создании веб-приложения, интегрированного с крипто-кошельком и смарт-контрактами. Требовалось в кратчайшие сроки интегрировать поддержку фондирования с помощью трех ERC-20 токенов — DAI, USDC и USDT в мейннете эфириума. Также требовалось выводить текущий баланс токенов пользователя, иметь возможность добавлять токен в свой крипто-кошелек и использовать промокод для получения дополнительных (бонусных) токенов.',
        technologiesAndSolutions: 'В SSR-приложение, реализованного на React (Gatsby), внедрил поддержку Web3 Modal (WalletConnect). Общение со смарт-контрактами реализовал через библиотеку wagmi и ethers.js.',
        results: 'Полностью реализовал флоу от подключения кошелька до сообщения об успешном депозите токенов. Реализованное приложение позволило привлечь $300K уже в первые два дня запуска. Привлечение инвестиций через криптовалюты позволило задействовать новые пользовательские аудитории, готовые к фондированию через криптовалюты, но не через фиат.',
        screenshots: {
          application: 'Главный экран приложения с выбором токенов и балансами',
          walletConnect: 'Интеграция Wallet Connect'
        },
        links: [{ link: 'https://deepdao.fi/', text: 'Сайт проекта Deep DAO' }]
      }
    },
    [Locale.EN]: {
      local: {
        title: 'DAO crypto investments',
        clientAndChallenge: 'In the next round of attracting investments in a Swiss crypto startup, there was a need to create a web application integrated with crypto wallets and smart contracts. It was necessary to integrate funding support using three ERC-20 tokens — DAI, USDC, and USDT in the Ethereum Mainnet. It was also required to display the current balance of the user\'s tokens, be able to add a token to their crypto wallet, and use a promo code to receive additional (bonus) tokens.',
        technologiesAndSolutions: 'Implemented support for Web3 Modal (WalletConnect) in an SSR application implemented on React (Gatsby). Integrated support for smart contracts via ethers.js, and wagmi libraries.',
        results: 'Implemented from the scratch the flow from connecting the web3 wallet to the message about the successful deposit of tokens. The implemented application allowed the startup to raise $300K in the first two days of launch. Attracting investments through cryptocurrencies made it possible to engage new user audiences that are ready for funding through cryptocurrencies, but not through fiat.',
        screenshots: {
          application: 'Main application screen with a token selector and balances',
          walletConnect: 'Wallet Connect integration'
        },
        links: [{ link: 'https://deepdao.fi/', text: 'Deep DAO website' }]
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
        :src="deepDaoApplication"
        :alt="i18n.t('local.screenshots.application')">
        {{ i18n.t('local.screenshots.application') }}
      </AppFigure>

      <AppFigure
        :src="deepDaoWalletConnect"
        :alt="i18n.t('local.screenshots.walletConnect')">
        {{ i18n.t('local.screenshots.walletConnect') }}
      </AppFigure>
    </template>

    <template #position>
      <p>{{ $t('projectsList.deepDao.position') }}</p>
    </template>
    <template #technologies-stack>
      <AppChips>
        <AppChipsItem
          v-for="technology in $tm('projectsList.deepDao.technologies')"
          :key="technology"
          :type="ChipsType.GREEN">
          {{ technology }}
        </AppChipsItem>
      </AppChips>
    </template>
    <template #tools-stack>
      <AppChips>
        <AppChipsItem
          v-for="tool in $tm('projectsList.deepDao.tools')"
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
