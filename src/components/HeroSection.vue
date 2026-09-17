<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { profileData } from '@/data/portfolioData'
import { ArrowDownRight, Download, Award } from 'lucide-vue-next'

const { isItalian, t } = useLanguage()
</script>

<template>
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-36 border-b border-editorial-border overflow-hidden">
    <!-- Subtle architectural background accents -->
    <div class="absolute inset-0 pointer-events-none opacity-40">
      <div class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-editorial-border to-transparent"></div>
    </div>

    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left Column: Typographic Presentation (7 cols) -->
        <div class="lg:col-span-7 flex flex-col items-start">
          
          <!-- Category kicker -->
          <div class="inline-flex items-center gap-2.5 px-3 py-1 rounded-xs border border-editorial-border bg-white/80 mb-6 text-2xs uppercase tracking-widest text-charcoal-muted">
            <span class="w-1.5 h-1.5 rounded-full bg-editorial-terracotta"></span>
            <span>{{ isItalian ? 'Curriculum Accademico & Professionale' : 'Academic & Professional Dossier' }}</span>
          </div>

          <!-- Main Title / Name -->
          <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-charcoal leading-[0.95] tracking-tight mb-4">
            Gaia <br class="hidden sm:inline" />
            <span class="italic font-light text-charcoal-deep">D’Alessio</span>
          </h1>

          <!-- Role & Faculty Tagline -->
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6 text-base sm:text-lg font-serif text-charcoal-muted">
            <span class="text-charcoal font-medium">{{ t(profileData.roleTitle) }}</span>
            <span class="text-editorial-terracotta text-sm">✦</span>
            <span>Università degli Studi di Perugia</span>
          </div>

          <!-- Editorial Statement -->
          <p class="text-sm sm:text-base md:text-lg font-light leading-relaxed text-charcoal-muted max-w-2xl mb-8">
            {{ t(profileData.editorialStatement) }}
          </p>

          <!-- Core Metas: Authentic credentials from CV -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl py-5 border-y border-editorial-border mb-9 text-xs">
            <div>
              <span class="block text-2xs uppercase tracking-wider text-charcoal-faint mb-1">
                {{ isItalian ? 'Formazione' : 'Discipline' }}
              </span>
              <span class="font-serif text-sm text-charcoal font-medium">Relazioni Internazionali</span>
            </div>
            <div>
              <span class="block text-2xs uppercase tracking-wider text-charcoal-faint mb-1">
                {{ isItalian ? 'Certificazione' : 'Diploma' }}
              </span>
              <span class="font-serif text-sm text-charcoal font-medium">DELE B2 Cervantes</span>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <span class="block text-2xs uppercase tracking-wider text-charcoal-faint mb-1">
                {{ isItalian ? 'Sedi Operative' : 'Locations' }}
              </span>
              <span class="font-serif text-sm text-charcoal font-medium">Perugia / Sansepolcro</span>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4">
            <a
              href="#percorso"
              class="inline-flex items-center gap-2.5 px-6 py-3 rounded-xs bg-charcoal text-paper font-sans text-xs tracking-wider uppercase font-medium hover:bg-charcoal-deep transition-all duration-300 shadow-xs group"
            >
              <span>{{ isItalian ? 'Esplora il Percorso' : 'Explore Trajectory' }}</span>
              <ArrowDownRight class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              :href="profileData.cvDownloadUrl"
              download="Gaia_DAlessio_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xs border border-editorial-border bg-white text-charcoal font-sans text-xs tracking-wider uppercase font-medium hover:border-charcoal hover:bg-paper-warm transition-all duration-300"
            >
              <Download class="w-3.5 h-3.5 text-editorial-terracotta" />
              <span>{{ isItalian ? 'Scarica CV Ufficiale (PDF)' : 'Download Official CV' }}</span>
            </a>
          </div>

        </div>

        <!-- Right Column: Editorial Portrait Frame (5 cols) -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-sm lg:max-w-md">
            
            <!-- Fine perimeter frame -->
            <div class="relative p-2.5 bg-white border border-editorial-border shadow-editorial rounded-xs">
              
              <!-- Subtle decorative corner ticks -->
              <div class="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-charcoal/40"></div>
              <div class="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-charcoal/40"></div>
              <div class="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-charcoal/40"></div>
              <div class="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-charcoal/40"></div>

              <!-- Portrait Photo -->
              <div class="relative aspect-[3/4] overflow-hidden bg-paper-warm rounded-2xs">
                <img
                  :src="profileData.avatarUrl"
                  :alt="profileData.name"
                  class="w-full h-full object-cover object-center filter grayscale contrast-[1.02] hover:grayscale-0 transition-all duration-700 ease-out"
                  loading="eager"
                />
                
                <!-- Gentle warm film tint -->
                <div class="absolute inset-0 bg-editorial-terracotta/5 mix-blend-multiply pointer-events-none"></div>
              </div>

              <!-- Photo Caption / Colophon -->
              <div class="pt-3 pb-1 px-1 flex items-center justify-between text-2xs text-charcoal-muted border-t border-editorial-border/60 mt-2.5">
                <div class="flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-editorial-sage"></span>
                  <span class="font-serif tracking-wide italic">Gaia D’Alessio</span>
                </div>
                <span class="tracking-widest uppercase text-charcoal-faint">Perugia, Italia</span>
              </div>
            </div>

            <!-- Floated Badge (Amnesty & Education) -->
            <div class="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-xs border border-editorial-border px-4 py-2.5 rounded-xs shadow-md hidden sm:flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-editorial-terracotta/10 flex items-center justify-center text-editorial-terracotta">
                <Award class="w-4 h-4" />
              </div>
              <div class="flex flex-col text-left">
                <span class="text-[10px] uppercase tracking-wider text-charcoal-faint font-semibold">Tirocinio Diritti Umani</span>
                <span class="font-serif text-xs text-charcoal font-medium">Amnesty International Italia</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
