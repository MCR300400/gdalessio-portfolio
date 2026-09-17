<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { experiencesData } from '@/data/portfolioData'
import { CheckCircle2, Calendar, MapPin } from 'lucide-vue-next'

const { isItalian, t, tArray } = useLanguage()
</script>

<template>
  <section id="percorso" class="py-20 md:py-28 lg:py-32 border-b border-editorial-border bg-paper">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      
      <!-- Section Tag -->
      <div class="flex items-center gap-3 mb-4">
        <span class="font-serif text-sm italic text-editorial-terracotta">02-B</span>
        <span class="h-px w-8 bg-editorial-border"></span>
        <span class="text-2xs uppercase tracking-widest text-charcoal-faint font-semibold">
          {{ isItalian ? 'Esperienze Professionali & Tirocini' : 'Professional Experiences & Internships' }}
        </span>
      </div>

      <!-- Section Title -->
      <div class="max-w-3xl mb-14">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-tight tracking-tight mb-4">
          {{ isItalian ? 'Impegno sul Campo & Rigore Organizzativo' : 'Field Engagement & Administrative Discipline' }}
        </h2>
        <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
          {{ isItalian 
            ? 'Dalla cooperazione per i diritti umani universali alla gestione efficiente dei flussi di segreteria e relazione con il pubblico.'
            : 'From human rights defense and civic advocacy to rigorous workflow management and stakeholder communication.'
          }}
        </p>
      </div>

      <!-- Experiences List (Editorial Cards) -->
      <div class="space-y-10">
        <article
          v-for="(exp, index) in experiencesData"
          :key="exp.id"
          class="editorial-card p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <!-- Subtle vertical accent bar on left -->
          <div
            class="absolute top-0 left-0 bottom-0 w-1"
            :style="{ backgroundColor: exp.accentColor || '#B76E59' }"
          ></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left Info (4 cols) -->
            <div class="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-serif text-xs italic text-charcoal-faint">
                    0{{ index + 1 }} / 0{{ experiencesData.length }}
                  </span>
                  <span class="text-editorial-border">|</span>
                  <span class="text-2xs uppercase tracking-wider font-semibold text-editorial-terracotta">
                    {{ t(exp.roleCategory) }}
                  </span>
                </div>

                <h3 class="font-serif text-2xl sm:text-3xl text-charcoal font-medium leading-snug mb-2">
                  {{ exp.organization }}
                </h3>

                <h4 class="text-sm font-medium text-charcoal-muted mb-4">
                  {{ t(exp.role) }}
                </h4>
              </div>

              <div class="pt-4 border-t border-editorial-border/60 space-y-2 text-xs text-charcoal-faint">
                <div class="flex items-center gap-2">
                  <Calendar class="w-3.5 h-3.5 shrink-0" />
                  <span>{{ t(exp.period) }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <MapPin class="w-3.5 h-3.5 shrink-0" />
                  <span>{{ t(exp.location) }}</span>
                </div>
              </div>
            </div>

            <!-- Right Content: Description & Highlights (8 cols) -->
            <div class="lg:col-span-8 lg:border-l lg:border-editorial-border/60 lg:pl-8 flex flex-col justify-between">
              <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6 font-light">
                {{ t(exp.description) }}
              </p>

              <div>
                <h5 class="text-xs uppercase tracking-wider font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-editorial-terracotta"></span>
                  <span>{{ isItalian ? 'Attività Svolte & Competenze Acquisite' : 'Key Responsibilities & Competencies' }}</span>
                </h5>

                <ul class="space-y-3">
                  <li
                    v-for="(point, pIdx) in tArray(exp.highlights)"
                    :key="pIdx"
                    class="flex items-start gap-3 text-xs sm:text-sm text-charcoal leading-normal"
                  >
                    <CheckCircle2 class="w-4 h-4 text-editorial-sage shrink-0 mt-0.5" />
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </article>
      </div>

    </div>
  </section>
</template>
