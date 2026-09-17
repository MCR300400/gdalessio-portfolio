<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ResearchSection from '@/components/ResearchSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-paper text-charcoal selection:bg-editorial-sand selection:text-charcoal-deep font-sans">
    <!-- Fixed Navigation Bar -->
    <Navbar />

    <!-- Main Content Flow -->
    <main class="flex-grow">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ResearchSection />
      <SkillsSection />
      <ContactSection />
    </main>

    <!-- Footer Colophon -->
    <FooterSection />
  </div>
</template>
