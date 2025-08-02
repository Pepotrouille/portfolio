<template>
  <q-page class="row items-center justify-evenly bg-secondary text-dark q-pt-xl">
    <div class="content-width text-center q-gutter-xl q-pt-xl q-mb-xl">
      <about-me-block id="about-me-block" />
      <skills-block id="skills-block" :skillCategories="skillCategories" />
      <projects-block id="projects-block" :projects="projects" />
      <timeline-block
        id="timeline-block"
        class="col-12"
        title="Experiences et Education"
        dense
        :items="timelineItems"
        separator
      />
      <socials-block id="social-block" :socials="socials" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AboutMeBlock from 'src/components/blocks/AboutMeBlock.vue';
import TimelineBlock from 'src/components/blocks/TimelineBlock.vue';
import SkillsBlock from 'src/components/blocks/SkillsBlock.vue';
import ProjectsBlock from 'src/components/blocks/ProjectsBlock.vue';
import SocialsBlock from 'src/components/blocks/SocialsBlock.vue';
import type { TimelineItem, SkillCategory, Social, Project } from 'src/components/models';
import { ref } from 'vue';

const timelineItems = ref<TimelineItem[]>([]);
const skillCategories = ref<SkillCategory[]>([]);
const socials = ref<Social[]>([]);
const projects = ref<Project[]>([]);

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

const readSocialsFromJSON = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/socials.json`);
    const data = await response.json();
    socials.value = data;
  } catch (error) {
    console.error('Error fetching socials:', error);
    return [];
  }
};

const readProjectsFromJSON = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/projects.json`);
    const data = await response.json();
    projects.value = data;
    console.log('projects.value aaa', projects.value);
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

onMounted(() => {
  void readTimelineItemsFromJSON();
  void readSkillsFromJSON();
  void readSocialsFromJSON();
  void readProjectsFromJSON();
  console.log('projects.value', projects.value);
});
</script>

<style scoped>
.content-width {
  max-width: 1000px;
  width: 70%;
  min-width: 400px;
}
</style>
