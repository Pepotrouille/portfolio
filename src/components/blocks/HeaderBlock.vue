<template>
  <q-header class="bg-info text-dark q-pa-md">
    <q-toolbar>
      <q-toolbar-title class="text-h3"> Marie Brunetto </q-toolbar-title>
      <q-btn-dropdown flat color="primary" :label="currentLanguage">
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
