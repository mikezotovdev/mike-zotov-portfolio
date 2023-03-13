import { Locale } from '@/types/i18n'
import { APP_URL_BASE } from '@/consts/router'
import { ComplementI18nRoutes, SearchBot, Theme } from '@/types/router'

declare module 'vue-router' {
  export interface RouteMeta {
    locale: Locale;
    siteName: string;
    applicationName: string;
    robots: SearchBot;
    url: typeof APP_URL_BASE | `${typeof APP_URL_BASE}/${string}`;
    title: string;
    description: string;
    image: `${typeof APP_URL_BASE}/${string}.jpg`;
    i18n: ComplementI18nRoutes;
    theme: Theme;
  }
}
