<template>
  <q-card>
    <q-card-section class="title-font row q-pb-none">
      <div class="col-6 q-mx-auto">{{ t('projectsTitle').toUpperCase() }}</div>
    </q-card-section>
    <q-card-section>
      <q-scroll-area class="scroll-area" style="height: 35rem; width: 100%; overflow: hidden">
        <div class="projects-flex-row">
          <div
            v-for="project in projects"
            :key="project.id"
            :name="project.id"
            class="slide-image-container"
            :class="project.linkOnClick !== undefined ? 'cursor-pointer relative-position' : ''"
            v-ripple="project.linkOnClick !== undefined"
            @click="openLink(project.linkOnClick)"
          >
            <q-img
              :src="`assets/images/projects/${project.imageName}`"
              class="slide-image"
              :loading="project.imageName ? 'lazy' : 'eager'"
              :fit="'cover'"
              :position="'top'"
            />
            <div class="slide-overlay text-white">
              <h5 class="q-mt-sm q-mx-md q-mb-xs">{{ t(project.titleKey) }}</h5>
              <p v-if="project.descriptionKey" class="q-mx-md q-mb-sm text-justify">
                {{ t(project.descriptionKey) }}
              </p>
              <div v-if="project.skillKeys">
                <q-chip
                  v-for="skillKey in project.skillKeys"
                  :key="skillKey"
                  class="q-mx-xs q-my-xs"
                  color="primary"
                  text-color="white"
                >
                  {{ t(skillKey) }}
                </q-chip>
              </div>
            </div>
          </div>
        </div>
      </q-scroll-area>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { t } from 'src/utilities/i18n';
import type { Project } from 'src/components/models';

const props = defineProps<{
  projects: Project[];
}>();

const projects = ref<Project[]>(props.projects);
const slide = ref('');

const openLink = (link: string | undefined) => {
  if (link) {
    console.log(`Opening link: ${link}`);
    window.open(link, '_blank');
  }
};

watch(
  () => props.projects,
  (newProjects: Project[]) => {
    projects.value = newProjects;
    slide.value = newProjects.length > 0 && newProjects[0] ? newProjects[0].id : '';
  },
);

onMounted(() => {
  slide.value = projects.value.length > 0 && projects.value[0] ? projects.value[0].id : '';
});
</script>

<style scoped>
.slide-image-container {
  position: relative;
  background-color: var(--q-dark);
  border-radius: 1.5rem;
  height: 30rem;
  width: 30rem;
  margin: 1rem auto 1rem auto;
}

.slide-image {
  border: 0.5rem solid var(--q-dark);
  border-radius: 1.5rem;
  height: 30rem;
  width: 30rem;
}

.slide-overlay {
  position: absolute;
  width: 100%;
  top: 45%;
  left: 0%;
  height: 55%;
  background: var(--q-dark_low_opacity);
  flex-direction: column;
  border-radius: 0 0 1.5rem 1.5rem;
  padding: 1rem;
}

.projects-flex-row {
  display: flex;
  flex-direction: row;
  gap: 2rem; /* space between cards */
  padding: 1rem;
}
</style>
