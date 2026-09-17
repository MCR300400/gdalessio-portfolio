<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { profileData, navigationLinks } from '@/data/portfolioData'
import { ArrowUp } from 'lucide-vue-next'

const { isItalian, t } = useLanguage()
const currentYear = computed(() => new Date().getFullYear())

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-paper-warm border-t border-editorial-border py-16 lg:py-20 text-charcoal">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      
      <!-- Top Row: Colophon, Navigation & Direct Links -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-editorial-border/80">
        
        <!-- Brand & Summary (5 cols) -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-sm border border-editorial-border bg-white flex items-center justify-center font-serif text-sm font-semibold">
              GD
            </div>
            <span class="font-serif text-xl font-medium tracking-tight text-charcoal">
              {{ profileData.name }}
            </span>
          </div>

          <p class="text-xs text-charcoal-muted max-w-sm leading-relaxed font-light">
            {{ isItalian 
              ? 'Dossier accademico e professionale in Relazioni Internazionali. Ricerca documentale, diritto sovranazionale e diritti umani.' 
              : 'Academic and professional dossier in International Relations. Documentary research, supranational law, and human rights advocacy.' 
            }}
          </p>

          <p class="text-2xs text-charcoal-faint">
            {{ profileData.domicile.it }} • {{ profileData.residence.it }}
          </p>
        </div>

        <!-- Quick Section Links (4 cols) -->
        <div class="md:col-span-4">
          <span class="text-2xs uppercase tracking-widest text-charcoal-faint font-semibold block mb-4">
            {{ isItalian ? 'Indice del Documento' : 'Document Index' }}
          </span>
          <ul class="space-y-2.5 text-xs text-charcoal-muted">
            <li v-for="link in navigationLinks" :key="link.key">
              <a :href="link.href" class="editorial-link hover:text-charcoal transition-colors">
                {{ t(link.label) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Document Info & Back to Top (3 cols) -->
        <div class="md:col-span-3 flex flex-col justify-between items-start md:items-end">
          <div>
            <span class="text-2xs uppercase tracking-widest text-charcoal-faint font-semibold block mb-2">
              {{ isItalian ? 'Formato' : 'Format' }}
            </span>
            <span class="text-xs text-charcoal-muted block">Cloudflare Pages Static Build</span>
            <span class="text-2xs text-charcoal-faint block mt-1">Vue 3 + Vite + Tailwind CSS</span>
          </div>

          <button
            type="button"
            @click="scrollToTop"
            class="mt-6 md:mt-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xs border border-editorial-border bg-white text-xs text-charcoal hover:border-charcoal hover:bg-paper-warm transition-all duration-300"
            :title="isItalian ? 'Torna all’inizio' : 'Back to top'"
          >
            <span>{{ isItalian ? 'Torna in cima' : 'Back to top' }}</span>
            <ArrowUp class="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <!-- Bottom Row: Copyright & Credits -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-2xs text-charcoal-faint">
        <p>
          &copy; {{ currentYear }} {{ profileData.name }}. {{ isItalian ? 'Tutti i diritti riservati.' : 'All rights reserved.' }}
        </p>
        
        <p class="italic font-serif">
          {{ isItalian ? 'Dossier accademico redatto su fonti documentali e percorsi formativi certificati.' : 'Academic dossier compiled from verified curriculum records and official credentials.' }}
        </p>
      </div>

    </div>
  </footer>
</template>
