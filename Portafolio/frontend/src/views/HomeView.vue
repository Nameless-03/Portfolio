<script setup>
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
</script>

<template>
  <div class="home-view">
    <HeroSection />
    <AppHeader />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>
