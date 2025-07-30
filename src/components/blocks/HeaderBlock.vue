<template>
  <q-header class="bg-info text-dark q-pa-md">
    <q-toolbar>
      <q-toolbar-title class="text-h3"> Marie Brunetto </q-toolbar-title>
      <q-space />
      <q-btn flat :label="t('aboutMeTitle')" @click="scrollToBlock('about-me-block')" /> |
      <q-btn flat :label="t('skillsTitle')" @click="scrollToBlock('skills-block')" /> |
      <q-btn flat :label="t('projectsTitle')" @click="scrollToBlock('projects-block')" /> |
      <q-btn
        flat
        :label="t('educationAndExperienceTitle')"
        @click="scrollToBlock('timeline-block')"
      />
      | <q-btn flat :label="t('socialsTitle')" @click="scrollToBlock('social-block')" /> |
      <q-btn-dropdown rounded outline color="primary" :label="currentLanguage" class="q-ml-md">
        <q-list>
          <q-item
            v-for="(language, acronym) in availableLanguages"
            :key="acronym"
            clickable
            v-close-popup
            @click="setLanguageInHeader(acronym, language)"
          >
            <q-item-section>
              <q-item-label>{{ language }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getLanguage, setLanguage } from 'src/utilities/i18n';
import type { Language } from 'src/utilities/i18n';
import { t } from 'src/utilities/i18n';

function scrollToBlock(blockId: string) {
  const el = document.getElementById(blockId);
  const header = document.querySelector('.q-header');
  const offset = header ? header.clientHeight : 0;
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

const availableLanguages: Record<Language, string> = {
  fr: 'Français',
  en: 'English',
};
const currentLanguage = ref('Français');

const getLanguageInHeader = () => {
  currentLanguage.value = availableLanguages[getLanguage()] || 'Français';
  return currentLanguage.value;
};

const setLanguageInHeader = (acronym: Language, language: string) => {
  currentLanguage.value = language;
  setLanguage(acronym);
};

onMounted(() => {
  getLanguageInHeader();
});
</script>
