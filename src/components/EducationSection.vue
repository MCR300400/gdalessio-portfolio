<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { educationData } from '@/data/portfolioData'
import { GraduationCap, Layers } from 'lucide-vue-next'

const { isItalian, t, tArray } = useLanguage()
const education = educationData[0]
</script>

<template>
  <section class="py-20 md:py-24 border-b border-editorial-border bg-paper-warm/40">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      
      <!-- Section Tag -->
      <div class="flex items-center gap-3 mb-4">
        <span class="font-serif text-sm italic text-editorial-terracotta">02-A</span>
        <span class="h-px w-8 bg-editorial-border"></span>
        <span class="text-2xs uppercase tracking-widest text-charcoal-faint font-semibold">
          {{ isItalian ? 'Istruzione Superiore' : 'Higher Education' }}
        </span>
      </div>

      <!-- Main Heading -->
      <div class="max-w-3xl mb-12">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-tight tracking-tight mb-4">
          {{ isItalian ? 'Percorso Accademico & Fondamenti Disciplinari' : 'Academic Curriculum & Core Foundations' }}
        </h2>
        <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
          {{ t(education.overview) }}
        </p>
      </div>

      <!-- University Institution Card -->
      <div class="p-6 sm:p-8 bg-white border border-editorial-border rounded-xs shadow-xs mb-12">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-editorial-border/70">
          <div>
            <div class="flex items-center gap-2 text-2xs uppercase tracking-wider text-editorial-terracotta font-semibold mb-1.5">
              <GraduationCap class="w-4 h-4" />
              <span>{{ t(education.degree) }}</span>
            </div>
            <h3 class="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
              {{ education.institution }}
            </h3>
            <p class="text-xs text-charcoal-muted mt-1">
              {{ t(education.department) }} — {{ t(education.location) }}
            </p>
          </div>

          <div class="flex items-center gap-3">
            <span class="editorial-tag bg-editorial-sand/40 border-editorial-border">
              {{ t(education.period) }}
            </span>
          </div>
        </div>

        <!-- 4 Disciplinary Pillars as detailed in CV -->
        <div class="pt-8">
          <div class="text-xs uppercase tracking-wider text-charcoal-faint font-semibold mb-6 flex items-center gap-2">
            <Layers class="w-3.5 h-3.5" />
            <span>{{ isItalian ? 'Quadro Didattico & Aree di Esame Superate' : 'Curricular Examination Fields' }}</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(discipline, idx) in education.disciplines"
              :key="idx"
              class="p-5 rounded-xs border border-editorial-border/80 bg-paper/60 hover:bg-white hover:border-charcoal/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span class="text-2xs font-serif italic text-editorial-terracotta mb-1 block">
                  Modulo {{ idx + 1 }}
                </span>
                <h4 class="font-serif text-base font-semibold text-charcoal mb-3">
                  {{ t(discipline.category) }}
                </h4>

                <!-- Courses List -->
                <ul class="space-y-2 mb-4">
                  <li
                    v-for="(course, cIdx) in tArray(discipline.courses)"
                    :key="cIdx"
                    class="flex items-start gap-2 text-xs text-charcoal font-medium"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-editorial-terracotta/70 mt-1.5 shrink-0"></span>
                    <span>{{ course }}</span>
                  </li>
                </ul>
              </div>

              <div class="pt-3 border-t border-editorial-border/60">
                <p class="text-[11px] text-charcoal-muted leading-relaxed italic">
                  {{ t(discipline.description) }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
