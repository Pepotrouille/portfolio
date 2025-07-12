<template>
  <q-card>
    <q-card-section class="title-font row q-pb-none">
      <div class="row col-12">
        <div class="q-mx-auto">{{ t('skillsTitle').toUpperCase() }}</div>
      </div>
      <div class="row col-12 q-mx-auto">
        <div v-for="category in skillCategories" :key="category.id" class="q-mb-md col-12">
          <h5 class="text-h5 q-mb-md q-mt-md">{{ t(category.titleKey) }}</h5>
          <div class="row q-gutter-sm col-12 justify-center">
            <hexagonal-chip
              v-for="skill in category.skills"
              :key="skill.id"
              :hexagon-information="skill"
            />
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { t } from 'src/utilities/i18n';
import HexagonalChip from 'src/components/elements/HexagonalChip.vue';
import { ref, watch } from 'vue';
import type { SkillCategory } from 'src/components/models';
const props = defineProps<{
  skillCategories: SkillCategory[];
}>();
const skills = ref<SkillCategory[]>(props.skillCategories);
watch(
  () => props.skillCategories,
  (newSkills: SkillCategory[]) => {
    skills.value = newSkills;
  },
);
</script>
