<template>
  <q-page class="row items-center justify-evenly bg-secondary text-dark q-pt-xl">
    <div class="content-width text-center q-gutter-xl q-pt-xl q-mb-xl">
      <about-me-block />
      <skills-block :skillCategories="skillCategories" />
      <projects-block />
      <timeline-block
        class="col-12"
        title="Experiences et Education"
        dense
        :items="timelineItems"
        separator
      />
      <socials-block />
    </div>
    <footer-block class="col-12 text-center" />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AboutMeBlock from 'src/components/blocs/AboutMeBlock.vue';
import TimelineBlock from 'src/components/blocs/TimelineBlock.vue';
import SkillsBlock from 'src/components/blocs/SkillsBlock.vue';
import ProjectsBlock from 'src/components/blocs/ProjectsBlock.vue';
import SocialsBlock from 'src/components/blocs/SocialsBlock.vue';
import FooterBlock from 'src/components/blocs/FooterBlock.vue';
import type { TimelineItem, SkillCategory } from 'src/components/models';
import { ref } from 'vue';
import { setLanguage } from 'src/utilities/i18n';

const timelineItems = ref<TimelineItem[]>([]);
const skillCategories = ref<SkillCategory[]>([]);

const readTimelineItemsFromJSON = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/education-and-experience.json`);
    const data = await response.json();
    timelineItems.value = data;
  } catch (error) {
    console.error('Error fetching timeline items:', error);
  }
};

const readSkillsFromJSON = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/skills.json`);
    const data = await response.json();
    skillCategories.value = data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

onMounted(() => {
  setLanguage('fr');
  void readTimelineItemsFromJSON();
  void readSkillsFromJSON();
});
</script>

<style scoped>
.content-width {
  max-width: 1000px;
  width: 70%;
  min-width: 400px;
}
</style>
