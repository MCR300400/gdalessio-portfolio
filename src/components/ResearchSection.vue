<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { researchThemes } from '@/data/portfolioData'
import { BookOpen, Search, Scale, Globe2, TrendingUp, BarChart3 } from 'lucide-vue-next'

const { isItalian, t, tArray } = useLanguage()

function getIconForTheme(index: number) {
  switch (index) {
    case 0: return Scale
    case 1: return Globe2
    case 2: return TrendingUp
    case 3: return BarChart3
    default: return BookOpen
  }
}
</script>

<template>
  <section id="ricerca" class="py-20 md:py-28 lg:py-32 border-b border-editorial-border bg-paper-warm/30">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      
      <!-- Section Tag -->
      <div class="flex items-center gap-3 mb-4">
        <span class="font-serif text-sm italic text-editorial-terracotta">03</span>
        <span class="h-px w-8 bg-editorial-border"></span>
        <span class="text-2xs uppercase tracking-widest text-charcoal-faint font-semibold">
          {{ isItalian ? 'Ricerca & Ambiti Tematici' : 'Research & Academic Fields' }}
        </span>
      </div>

      <!-- Section Title -->
      <div class="max-w-3xl mb-14">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-tight tracking-tight mb-4">
          {{ isItalian 
            ? 'Ambiti di Studio, Metodologie & Focus Istituzionali' 
            : 'Academic Inquiry, Methodologies & Institutional Focus' 
          }}
        </h2>
        <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
          {{ isItalian 
            ? 'Una rassegna strutturata delle aree tematiche e metodologiche sviluppate nel corso degli studi in Relazioni Internazionali, con focus sull’intersezione tra diritto, economia, diritti umani e scienze quantitative.' 
            : 'A structured overview of core thematic and methodological concentrations developed across the International Relations curriculum, spanning law, economics, human rights, and quantitative methods.' 
          }}
        </p>
      </div>

      <!-- Grid of Research Themes -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <article
          v-for="(theme, index) in researchThemes"
          :key="theme.id"
          class="editorial-card p-6 sm:p-8 flex flex-col justify-between group hover:border-editorial-terracotta/50"
        >
          <div>
            <!-- Header of card -->
            <div class="flex items-center justify-between pb-4 border-b border-editorial-border/60 mb-6">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-xs bg-paper-warm border border-editorial-border flex items-center justify-center font-serif text-xs font-semibold text-charcoal">
                  {{ theme.romanIndex }}
                </div>
                <span class="text-2xs uppercase tracking-wider font-semibold text-editorial-terracotta">
                  {{ t(theme.field) }}
                </span>
              </div>

              <component
                :is="getIconForTheme(index)"
                class="w-4 h-4 text-charcoal-faint group-hover:text-editorial-terracotta transition-colors"
              />
            </div>

            <!-- Title -->
            <h3 class="font-serif text-xl sm:text-2xl text-charcoal font-medium leading-snug mb-4">
              {{ t(theme.title) }}
            </h3>

            <!-- Context -->
            <p class="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6 font-light">
              {{ t(theme.context) }}
            </p>

            <!-- Methodology callout -->
            <div class="p-4 rounded-xs bg-paper-warm/80 border border-editorial-border/70 mb-6">
              <span class="block text-2xs uppercase tracking-wider font-semibold text-charcoal-faint mb-1.5 flex items-center gap-1.5">
                <Search class="w-3 h-3 text-editorial-terracotta" />
                {{ isItalian ? 'Approccio Metodologico' : 'Methodological Approach' }}
              </span>
              <p class="text-xs text-charcoal-muted leading-relaxed italic">
                {{ t(theme.methodology) }}
              </p>
            </div>
          </div>

          <!-- Key Themes / Highlights -->
          <div class="pt-4 border-t border-editorial-border/60">
            <span class="block text-2xs uppercase tracking-wider font-semibold text-charcoal-faint mb-3">
              {{ isItalian ? 'Direttrici di Analisi' : 'Key Analytical Pillars' }}
            </span>
            <ul class="space-y-2">
              <li
                v-for="(item, kIdx) in tArray(theme.keyThemes)"
                :key="kIdx"
                class="flex items-center gap-2 text-xs text-charcoal"
              >
                <span class="text-editorial-terracotta text-2xs">✦</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
