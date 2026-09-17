<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { languageSkills, transversalSkills } from '@/data/portfolioData'
import { Languages, Award, Check, Sparkles, Brain, Users, Clock } from 'lucide-vue-next'

const { isItalian, t } = useLanguage()

function getCategoryIcon(idx: number) {
  switch (idx) {
    case 0: return Brain
    case 1: return Users
    case 2: return Clock
    default: return Sparkles
  }
}
</script>

<template>
  <section id="competenze" class="py-20 md:py-28 lg:py-32 border-b border-editorial-border bg-paper">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      
      <!-- Section Tag -->
      <div class="flex items-center gap-3 mb-4">
        <span class="font-serif text-sm italic text-editorial-terracotta">04</span>
        <span class="h-px w-8 bg-editorial-border"></span>
        <span class="text-2xs uppercase tracking-widest text-charcoal-faint font-semibold">
          {{ isItalian ? 'Competenze & Abilità' : 'Competencies & Languages' }}
        </span>
      </div>

      <!-- Section Title -->
      <div class="max-w-3xl mb-14">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-tight tracking-tight mb-4">
          {{ isItalian ? 'Padronanza Linguistica & Rigore Metodologico' : 'Linguistic Command & Methodological Rigor' }}
        </h2>
        <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
          {{ isItalian 
            ? 'Competenze comunicative certificate, standard QCER internazionali e attitudini operative consolidate nella pratica accademica e lavorativa.' 
            : 'Formally certified language competencies, CEFR international benchmarks, and interpersonal skills proven across academic and operational contexts.' 
          }}
        </p>
      </div>

      <!-- Part 1: Language Skills (CEFR Framework - No fake percentages) -->
      <div class="mb-16">
        <div class="flex items-center justify-between mb-8 pb-3 border-b border-editorial-border">
          <div class="flex items-center gap-2">
            <Languages class="w-4 h-4 text-editorial-terracotta" />
            <h3 class="font-serif text-xl sm:text-2xl text-charcoal font-medium">
              {{ isItalian ? 'Quadro Comune Europeo di Riferimento per le Lingue (QCER)' : 'Common European Framework of Reference for Languages (CEFR)' }}
            </h3>
          </div>
          <span class="text-2xs uppercase tracking-wider text-charcoal-faint hidden sm:inline">
            {{ isItalian ? 'Standard Ufficiali' : 'Official Standards' }}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(lang, lIdx) in languageSkills"
            :key="lIdx"
            class="editorial-card p-6 flex flex-col justify-between"
          >
            <div>
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h4 class="font-serif text-2xl text-charcoal font-semibold">
                    {{ t(lang.name) }}
                  </h4>
                  <span class="text-xs text-charcoal-muted mt-0.5 block font-medium">
                    {{ t(lang.levelText) }}
                  </span>
                </div>

                <div class="px-2.5 py-1 rounded-xs bg-paper-warm border border-editorial-border font-serif text-sm font-semibold text-charcoal tracking-wide">
                  {{ lang.cefrLevel }}
                </div>
              </div>

              <div
                v-if="lang.certification"
                class="mb-4 p-3 rounded-xs bg-editorial-terracotta/5 border border-editorial-terracotta/20 text-xs"
              >
                <div class="flex items-center gap-1.5 text-editorial-terracotta font-semibold mb-1">
                  <Award class="w-3.5 h-3.5 shrink-0" />
                  <span>{{ t(lang.certification) }}</span>
                </div>
                <p class="text-[11px] text-charcoal-muted">
                  {{ isItalian ? 'Rilasciato da:' : 'Issued by:' }} {{ lang.certifyingEntity }}
                </p>
              </div>

              <p class="text-xs leading-relaxed text-charcoal-muted font-light">
                {{ t(lang.description) }}
              </p>
            </div>

            <div class="pt-4 mt-5 border-t border-editorial-border/60 flex items-center justify-between text-2xs text-charcoal-faint">
              <span>{{ isItalian ? 'Verificato su CV' : 'Verified on CV' }}</span>
              <Check class="w-3.5 h-3.5 text-editorial-sage" />
            </div>
          </div>
        </div>
      </div>

      <!-- Part 2: Transversal & Methodological Skills (Structured Columns) -->
      <div>
        <div class="flex items-center justify-between mb-8 pb-3 border-b border-editorial-border">
          <div class="flex items-center gap-2">
            <Brain class="w-4 h-4 text-editorial-terracotta" />
            <h3 class="font-serif text-xl sm:text-2xl text-charcoal font-medium">
              {{ isItalian ? 'Competenze Trasversali & Organizzative' : 'Transversal & Methodological Competencies' }}
            </h3>
          </div>
          <span class="text-2xs uppercase tracking-wider text-charcoal-faint hidden sm:inline">
            {{ isItalian ? 'Pratiche & Soft Skills' : 'Practices & Soft Skills' }}
          </span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            v-for="(cat, cIdx) in transversalSkills"
            :key="cIdx"
            class="p-6 bg-white border border-editorial-border rounded-xs shadow-xs flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center gap-2.5 mb-3">
                <div class="w-7 h-7 rounded-xs bg-paper-warm border border-editorial-border flex items-center justify-center text-charcoal">
                  <component :is="getCategoryIcon(cIdx)" class="w-3.5 h-3.5" />
                </div>
                <h4 class="font-serif text-lg font-semibold text-charcoal">
                  {{ t(cat.title) }}
                </h4>
              </div>

              <p class="text-xs text-charcoal-muted mb-6 leading-relaxed italic border-b border-editorial-border/60 pb-3">
                {{ t(cat.subtitle) }}
              </p>

              <div class="space-y-4">
                <div
                  v-for="(item, iIdx) in cat.items"
                  :key="iIdx"
                  class="space-y-1"
                >
                  <div class="flex items-center gap-2">
                    <span class="w-1 h-1 rounded-full bg-editorial-terracotta"></span>
                    <span class="text-xs font-semibold text-charcoal">
                      {{ t(item.name) }}
                    </span>
                  </div>
                  <p class="text-[11px] text-charcoal-muted leading-relaxed pl-3 font-light">
                    {{ t(item.description) }}
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-3 border-t border-editorial-border/60 flex items-center justify-between text-2xs text-charcoal-faint">
              <span>{{ isItalian ? 'Area di Eccellenza' : 'Domain of Excellence' }}</span>
              <span class="text-editorial-terracotta text-2xs">✦</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
