<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { profileData } from '@/data/portfolioData'
import { Mail, Phone, MapPin, Download, Copy, Check, ExternalLink, Send, FileText } from 'lucide-vue-next'

const { isItalian, t } = useLanguage()

const emailCopied = ref(false)
const phoneCopied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profileData.email)
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2500)
  } catch (err) {
    console.error('Failed to copy email', err)
  }
}

async function copyPhone() {
  try {
    await navigator.clipboard.writeText(profileData.phone)
    phoneCopied.value = true
    setTimeout(() => {
      phoneCopied.value = false
    }, 2500)
  } catch (err) {
    console.error('Failed to copy phone', err)
  }
}
</script>

<template>
  <section id="contatti" class="py-20 md:py-28 lg:py-32 border-b border-editorial-border bg-paper">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      
      <!-- Section Tag -->
      <div class="flex items-center gap-3 mb-4">
        <span class="font-serif text-sm italic text-editorial-terracotta">05</span>
        <span class="h-px w-8 bg-editorial-border"></span>
        <span class="text-2xs uppercase tracking-widest text-charcoal-faint font-semibold">
          {{ isItalian ? 'Recapiti & Corrispondenza' : 'Contact & Correspondence' }}
        </span>
      </div>

      <!-- Section Title -->
      <div class="max-w-3xl mb-14">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-tight tracking-tight mb-4">
          {{ isItalian ? 'Dialogo, Collaborazione & Opportunità' : 'Inquiries, Collaboration & Dialogue' }}
        </h2>
        <p class="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
          {{ isItalian 
            ? 'Disponibile per colloqui, opportunità professionali nell’ambito delle relazioni internazionali, della cooperazione multilaterale, del terzo settore e dell’analisi istituzionale.' 
            : 'Available for interviews, professional engagements, and research roles across international cooperation, civil society advocacy, and institutional analysis.' 
          }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Left: Direct Contact Details (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          
          <!-- Email Card -->
          <div class="editorial-card p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xs bg-paper-warm border border-editorial-border flex items-center justify-center text-charcoal shrink-0">
                <Mail class="w-4 h-4 text-editorial-terracotta" />
              </div>
              <div>
                <span class="text-2xs uppercase tracking-wider text-charcoal-faint block mb-0.5">
                  {{ isItalian ? 'Posta Elettronica Principale' : 'Primary Email Address' }}
                </span>
                <a
                  :href="`mailto:${profileData.email}`"
                  class="font-serif text-lg sm:text-xl font-medium text-charcoal hover:text-editorial-terracotta transition-colors"
                >
                  {{ profileData.email }}
                </a>
              </div>
            </div>

            <div class="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                @click="copyEmail"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-editorial-border text-xs text-charcoal bg-paper-warm hover:bg-white transition-colors"
                :title="isItalian ? 'Copia email' : 'Copy email'"
              >
                <Check v-if="emailCopied" class="w-3.5 h-3.5 text-editorial-sage" />
                <Copy v-else class="w-3.5 h-3.5 text-charcoal-faint" />
                <span>{{ emailCopied ? (isItalian ? 'Copiata!' : 'Copied!') : (isItalian ? 'Copia' : 'Copy') }}</span>
              </button>

              <a
                :href="`mailto:${profileData.email}`"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-charcoal text-paper text-xs hover:bg-charcoal-deep transition-colors"
              >
                <Send class="w-3.5 h-3.5" />
                <span>{{ isItalian ? 'Scrivi' : 'Write' }}</span>
              </a>
            </div>
          </div>

          <!-- Phone Card -->
          <div class="editorial-card p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xs bg-paper-warm border border-editorial-border flex items-center justify-center text-charcoal shrink-0">
                <Phone class="w-4 h-4 text-editorial-sage" />
              </div>
              <div>
                <span class="text-2xs uppercase tracking-wider text-charcoal-faint block mb-0.5">
                  {{ isItalian ? 'Recapito Telefonico Diretto' : 'Direct Telephone' }}
                </span>
                <a
                  :href="`tel:${profileData.phone.replace(/[^0-9+]/g, '')}`"
                  class="font-serif text-lg sm:text-xl font-medium text-charcoal hover:text-editorial-terracotta transition-colors"
                >
                  {{ profileData.phone }}
                </a>
              </div>
            </div>

            <div class="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                @click="copyPhone"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-editorial-border text-xs text-charcoal bg-paper-warm hover:bg-white transition-colors"
              >
                <Check v-if="phoneCopied" class="w-3.5 h-3.5 text-editorial-sage" />
                <Copy v-else class="w-3.5 h-3.5 text-charcoal-faint" />
                <span>{{ phoneCopied ? (isItalian ? 'Copiato!' : 'Copied!') : (isItalian ? 'Copia' : 'Copy') }}</span>
              </button>

              <a
                :href="`tel:${profileData.phone.replace(/[^0-9+]/g, '')}`"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-charcoal text-charcoal text-xs hover:bg-charcoal hover:text-paper transition-colors"
              >
                <span>{{ isItalian ? 'Chiama' : 'Call' }}</span>
              </a>
            </div>
          </div>

          <!-- Location & Domicile Summary -->
          <div class="editorial-card p-6 sm:p-7">
            <div class="flex items-center gap-2 mb-4 text-2xs uppercase tracking-wider text-charcoal-faint font-semibold">
              <MapPin class="w-3.5 h-3.5 text-editorial-terracotta" />
              <span>{{ isItalian ? 'Disponibilità Territoriale & Mobilità' : 'Geographic Availability & Mobility' }}</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div class="p-3.5 rounded-xs bg-paper-warm/70 border border-editorial-border/60">
                <span class="block text-2xs text-charcoal-faint uppercase tracking-wider mb-1">
                  {{ isItalian ? 'Residenza Anagrafica' : 'Permanent Residence' }}
                </span>
                <p class="font-serif text-sm font-medium text-charcoal">
                  {{ t(profileData.residence) }}
                </p>
              </div>

              <div class="p-3.5 rounded-xs bg-paper-warm/70 border border-editorial-border/60">
                <span class="block text-2xs text-charcoal-faint uppercase tracking-wider mb-1">
                  {{ isItalian ? 'Domicilio Abituale' : 'Current Domicile' }}
                </span>
                <p class="font-serif text-sm font-medium text-charcoal">
                  {{ t(profileData.domicile) }}
                </p>
              </div>
            </div>

            <div class="mt-4 pt-3 border-t border-editorial-border/60 flex items-center justify-between text-2xs text-charcoal-muted">
              <span>{{ isItalian ? 'Stato: Automunita (Patente B) • Disponibilità a trasferte' : 'Status: Driving License B • Open to relocations & travel' }}</span>
              <span class="text-editorial-sage font-medium">✦ Attivo</span>
            </div>
          </div>

        </div>

        <!-- Right: Official CV Download Box (5 cols) -->
        <div class="lg:col-span-5">
          <div class="p-8 bg-paper-warm border border-editorial-border rounded-xs shadow-editorial flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-4 border-b border-editorial-border mb-6">
                <span class="text-2xs uppercase tracking-widest text-charcoal-faint font-semibold">
                  {{ isItalian ? 'Documento Ufficiale' : 'Official Document' }}
                </span>
                <span class="editorial-tag bg-white">PDF • 348 KB</span>
              </div>

              <div class="w-12 h-12 rounded-xs bg-white border border-editorial-border flex items-center justify-center text-charcoal mb-4">
                <FileText class="w-6 h-6 text-editorial-terracotta" />
              </div>

              <h3 class="font-serif text-2xl text-charcoal font-medium leading-snug mb-3">
                {{ isItalian ? 'Curriculum Vitae Integrale' : 'Complete Curriculum Vitae' }}
              </h3>

              <p class="text-xs leading-relaxed text-charcoal-muted font-light mb-6">
                {{ isItalian 
                  ? 'Il documento originale include tutte le specifiche anagrafiche, la ripartizione degli esami sostenuti presso l’Università degli Studi di Perugia, il tirocinio con Amnesty International Italia e le certificazioni linguistiche ufficiali.' 
                  : 'The original document includes all formal credentials, the course breakdown from the University of Perugia, the Amnesty International Italy internship, and verified language certifications.' 
                }}
              </p>
            </div>

            <div class="space-y-3 pt-6 border-t border-editorial-border">
              <a
                :href="profileData.cvDownloadUrl"
                download="Gaia_DAlessio_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xs bg-charcoal text-paper font-sans text-xs tracking-wider uppercase font-medium hover:bg-charcoal-deep transition-all duration-300 shadow-xs group"
              >
                <Download class="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>{{ isItalian ? 'Scarica _GAIA_DALESSIO_CV_.pdf' : 'Download CV File (PDF)' }}</span>
              </a>

              <a
                :href="profileData.cvDownloadUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs border border-editorial-border bg-white text-charcoal font-sans text-xs tracking-wider uppercase font-medium hover:border-charcoal hover:bg-paper transition-all duration-300"
              >
                <ExternalLink class="w-3.5 h-3.5 text-charcoal-faint" />
                <span>{{ isItalian ? 'Apri nel Browser' : 'View in Browser' }}</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
