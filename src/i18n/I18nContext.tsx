import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { messages } from './messages'
import type { Locale } from './messages'

type I18nContextValue = {
  locale: Locale
  setLocale: (nextLocale: Locale) => void
  t: (key: string) => string
}

const STORAGE_KEY = 'motions.locale'

const isLocale = (value: string): value is Locale => value === 'ko' || value === 'en'

const detectLocale = (): Locale => {
  const browserLocale = navigator.language.toLowerCase()
  return browserLocale.startsWith('ko') ? 'ko' : 'en'
}

const getInitialLocale = (): Locale => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && isLocale(saved)) {
    return saved
  }
  return detectLocale()
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

const getMessageByPath = (locale: Locale, key: string): string => {
  const value = key
    .split('.')
    .reduce<unknown>((current, segment) => (current as Record<string, unknown>)?.[segment], messages[locale])
  return typeof value === 'string' ? value : key
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale)
    localStorage.setItem(STORAGE_KEY, nextLocale)
  }

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key: string) => getMessageByPath(locale, key),
    }),
    [locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
