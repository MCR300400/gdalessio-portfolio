<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { profileData } from '@/data/portfolioData'

const { isItalian, t, tArray } = useLanguage()
</script>

<template>
  <section id="profilo" class="py-20 md:py-28 lg:py-32 border-b border-editorial-border bg-paper">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      
      <!-- Section Header -->
      <div class="flex items-center gap-3 mb-4">
        <span class="font-serif text-sm italic text-editorial-terracotta">01</span>
        <span class="h-px w-8 bg-editorial-border"></span>
        <span class="text-2xs uppercase tracking-widest text-charcoal-faint font-semibold">
          {{ isItalian ? 'Profilo & Identità Accademica' : 'Academic Profile & Identity' }}
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
        <!-- Title Left (5 cols) -->
        <div class="lg:col-span-5">
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-tight tracking-tight mb-6">
            {{ isItalian 
              ? 'Coniugare analisi giuridico-economica, etica pubblica e dinamismo operativo.'
              : 'Bridging legal-economic inquiry, public ethics, and operational dynamism.'
            }}
          </h2>
          
          <div class="p-6 bg-white border border-editorial-border rounded-xs shadow-xs space-y-4">
            <h3 class="text-xs uppercase tracking-wider font-semibold text-charcoal pb-3 border-b border-editorial-border/60">
              {{ isItalian ? 'Dati Anagrafici & Istituzionali' : 'Institutional Credentials' }}
            </h3>

            <dl class="space-y-3 text-xs">
              <div class="flex justify-between py-1 border-b border-editorial-border/40">
                <dt class="text-charcoal-faint">{{ isItalian ? 'Data di nascita' : 'Date of Birth' }}</dt>
                <dd class="font-medium text-charcoal">{{ t(profileData.birthDateFormatted) }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-editorial-border/40">
                <dt class="text-charcoal-faint">{{ isItalian ? 'Nazionalità' : 'Nationality' }}</dt>
                <dd class="font-medium text-charcoal">{{ t(profileData.nationality) }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-editorial-border/40">
                <dt class="text-charcoal-faint">{{ isItalian ? 'Patente' : 'Driving License' }}</dt>
                <dd class="font-medium text-charcoal">{{ t(profileData.drivingLicense) }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-editorial-border/40">
                <dt class="text-charcoal-faint">{{ isItalian ? 'Residenza' : 'Residence' }}</dt>
                <dd class="font-medium text-charcoal text-right">{{ t(profileData.residence) }}</dd>
              </div>
              <div class="flex justify-between py-1">
                <dt class="text-charcoal-faint">{{ isItalian ? 'Domicilio' : 'Domicile' }}</dt>
                <dd class="font-medium text-charcoal text-right">{{ t(profileData.domicile) }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Narrative Bio Right (7 cols) -->
        <div class="lg:col-span-7 flex flex-col gap-6 text-sm sm:text-base leading-relaxed text-charcoal-muted">
          <p
            v-for="(paragraph, index) in tArray(profileData.narrativeBio)"
            :key="index"
            class="first-letter:text-3xl first-letter:font-serif first-letter:font-normal first-letter:text-charcoal first-letter:mr-1"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>

      <!-- Core Focus Areas (4 cards) -->
      <div class="pt-8 border-t border-editorial-border">
        <div class="flex items-center justify-between mb-8">
          <div>
            <span class="text-2xs uppercase tracking-widest text-charcoal-faint block mb-1">
              {{ isItalian ? 'Aree di Specializzazione' : 'Specialization Pillars' }}
            </span>
            <h3 class="font-serif text-2xl text-charcoal">
              {{ isItalian ? 'Direttrici di Studio & Ricerca' : 'Lines of Study & Research' }}
            </h3>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(area, index) in profileData.focusAreas"
            :key="index"
            class="editorial-card p-6 flex flex-col justify-between group"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="font-serif text-xs italic text-editorial-terracotta">
                  #0{{ index + 1 }}
                </span>
                <span class="editorial-tag">
                  {{ t(area.tag) }}
                </span>
              </div>
              
              <h4 class="font-serif text-lg text-charcoal font-medium mb-2.5 group-hover:text-charcoal-deep transition-colors">
                {{ t(area.title) }}
              </h4>
              
              <p class="text-xs leading-relaxed text-charcoal-muted">
                {{ t(area.description) }}
              </p>
            </div>

            <div class="pt-4 mt-4 border-t border-editorial-border/60 flex items-center justify-between text-2xs text-charcoal-faint">
              <span>Competenza Certificata</span>
              <span class="text-editorial-terracotta">✦</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
