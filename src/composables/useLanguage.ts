import { ref, computed } from 'vue'
import type { Language, LocalizedString, LocalizedArray } from '@/types/portfolio'

const currentLanguage = ref<Language>('it')

// Check if a saved preference exists
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('gd_preferred_lang') as Language | null
  if (saved === 'it' || saved === 'en') {
    currentLanguage.value = saved
  }
}

export function useLanguage() {
  const lang = computed(() => currentLanguage.value)
  const isItalian = computed(() => currentLanguage.value === 'it')
  const isEnglish = computed(() => currentLanguage.value === 'en')

  function setLanguage(newLang: Language) {
    currentLanguage.value = newLang
    if (typeof window !== 'undefined') {
      localStorage.setItem('gd_preferred_lang', newLang)
      document.documentElement.lang = newLang
    }
  }

  function toggleLanguage() {
    setLanguage(currentLanguage.value === 'it' ? 'en' : 'it')
  }

  function t(localized: LocalizedString | undefined): string {
    if (!localized) return ''
    return localized[currentLanguage.value] || localized.it || ''
  }

  function tArray(localized: LocalizedArray | undefined): string[] {
    if (!localized) return []
    return localized[currentLanguage.value] || localized.it || []
  }

  return {
    lang,
    isItalian,
    isEnglish,
    setLanguage,
    toggleLanguage,
    t,
    tArray
  }
}
