<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { navigationLinks, profileData } from '@/data/portfolioData'
import { Download, Menu, X, FileText } from 'lucide-vue-next'

const { lang, isItalian, setLanguage, t } = useLanguage()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 24
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-paper/95 backdrop-blur-md border-b border-editorial-border/80 shadow-xs py-3.5'
        : 'bg-transparent py-5 lg:py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
      
      <!-- Brand / Monogram -->
      <a
        href="#"
        class="group flex items-center gap-3.5 text-charcoal hover:text-charcoal-deep transition-colors"
      >
        <div class="w-9 h-9 rounded-sm border border-editorial-border bg-white flex items-center justify-center font-serif text-lg font-semibold tracking-wider transition-all duration-300 group-hover:border-editorial-terracotta group-hover:shadow-xs">
          GD
        </div>
        <div class="flex flex-col">
          <span class="font-serif text-lg md:text-xl font-medium tracking-tight text-charcoal leading-none">
            {{ profileData.name }}
          </span>
          <span class="text-[10px] tracking-widest uppercase text-charcoal-faint mt-1 font-sans">
            {{ isItalian ? 'Relazioni Internazionali' : 'International Relations' }}
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] tracking-wide font-medium text-charcoal-muted">
        <a
          v-for="link in navigationLinks"
          :key="link.key"
          :href="link.href"
          class="editorial-link hover:text-charcoal transition-colors py-1"
        >
          {{ t(link.label) }}
        </a>
      </nav>

      <!-- Desktop Actions: Language Selector + CV Button -->
      <div class="hidden md:flex items-center gap-4">
        <!-- Language Switcher -->
        <div class="inline-flex items-center p-1 rounded-sm border border-editorial-border bg-white/70 text-xs font-medium">
          <button
            type="button"
            @click="setLanguage('it')"
            :class="[
              lang === 'it'
                ? 'bg-charcoal text-paper font-semibold shadow-xs'
                : 'text-charcoal-muted hover:text-charcoal'
            ]"
            class="px-2.5 py-1 rounded-xs transition-all duration-200"
            aria-label="Lingua Italiana"
          >
            IT
          </button>
          <span class="text-charcoal-faint text-[10px] px-0.5">/</span>
          <button
            type="button"
            @click="setLanguage('en')"
            :class="[
              lang === 'en'
                ? 'bg-charcoal text-paper font-semibold shadow-xs'
                : 'text-charcoal-muted hover:text-charcoal'
            ]"
            class="px-2.5 py-1 rounded-xs transition-all duration-200"
            aria-label="English Language"
          >
            EN
          </button>
        </div>

        <!-- Download CV Action -->
        <a
          :href="profileData.cvDownloadUrl"
          download="Gaia_DAlessio_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-editorial-border hover:border-charcoal text-xs font-medium text-charcoal bg-white/90 hover:bg-charcoal hover:text-paper transition-all duration-300 shadow-2xs"
        >
          <Download class="w-3.5 h-3.5" />
          <span>{{ isItalian ? 'Curriculum' : 'Download CV' }}</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2.5 md:hidden">
        <!-- Language Switcher Mobile -->
        <div class="inline-flex items-center p-0.5 rounded border border-editorial-border bg-white text-2xs font-medium mr-1">
          <button
            type="button"
            @click="setLanguage('it')"
            :class="lang === 'it' ? 'bg-charcoal text-paper font-semibold' : 'text-charcoal-muted'"
            class="px-2 py-0.5 rounded-xs"
          >
            IT
          </button>
          <button
            type="button"
            @click="setLanguage('en')"
            :class="lang === 'en' ? 'bg-charcoal text-paper font-semibold' : 'text-charcoal-muted'"
            class="px-2 py-0.5 rounded-xs"
          >
            EN
          </button>
        </div>

        <button
          type="button"
          @click="toggleMobileMenu"
          class="p-2 rounded-sm border border-editorial-border bg-white text-charcoal hover:border-charcoal transition-colors"
          :aria-expanded="mobileMenuOpen"
          aria-label="Menu di navigazione"
        >
          <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-b border-editorial-border bg-paper-warm/98 backdrop-blur-lg px-6 py-6 shadow-md"
      >
        <div class="flex flex-col gap-4">
          <a
            v-for="link in navigationLinks"
            :key="link.key"
            :href="link.href"
            @click="closeMobileMenu"
            class="font-serif text-lg tracking-wide text-charcoal hover:text-editorial-terracotta transition-colors py-1 border-b border-editorial-border/40"
          >
            {{ t(link.label) }}
          </a>

          <div class="pt-3 flex flex-col gap-3">
            <a
              :href="profileData.cvDownloadUrl"
              download="Gaia_DAlessio_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeMobileMenu"
              class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm border border-charcoal bg-charcoal text-paper text-xs tracking-wider uppercase font-medium hover:bg-charcoal-deep transition-colors"
            >
              <FileText class="w-4 h-4" />
              <span>{{ isItalian ? 'Scarica Curriculum Vitae (PDF)' : 'Download Curriculum Vitae (PDF)' }}</span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
