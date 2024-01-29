import i18n from 'sveltekit-i18n'
import type { Config } from 'sveltekit-i18n'

const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'pt',
			key: 'common',
			loader: async () => (await import('./pt/common.json')).default
		}
	]
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config)
