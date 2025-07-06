<template>
  <q-chip :class="'bg-transparent no-shadow hex-chip'" clickable @click="handleClick" tabindex="0">
    <smooth-hexagon :color="skill.color || '#3D2626'">
      <template v-if="skill.imageName">
        <img
          v-if="skill.imageName"
          :src="baseUrl + 'assets/images/skills/' + skill.imageName + '.png'"
          :alt="
            skill.titleKey
              ? t(skill.titleKey).substring(0, 1)
              : skill.title
                ? skill.title.substring(0, 1)
                : ''
          "
          class="hex-img"
        />
      </template>
    </smooth-hexagon>
    <q-tooltip
      :offset="[0, 10]"
      :content-class="'bg-primary text-white'"
      :anchor="'top middle'"
      :self="'bottom middle'"
      :max-width="'200px'"
    >
      {{ skill.titleKey ? t(skill.titleKey) : skill.title || '' }}
      <br v-if="skill.descriptionKey || skill.description" />
      {{ skill.descriptionKey ? t(skill.descriptionKey) : skill.description || '' }}
    </q-tooltip>
  </q-chip>
</template>

<script lang="ts" setup>
import type { Skill } from 'src/components/models';
import { t } from 'src/utilities/i18n';
import SmoothHexagon from 'src/components/shapes/SmoothHexagon.vue';
import { onMounted } from 'vue';

const props = defineProps<{
  skill: Skill;
}>();
const baseUrl: string = import.meta.env.BASE_URL || '/';

const handleClick = () => {
  if (props.skill.linkOnClick) {
    open(props.skill.linkOnClick || '');
    console.log(`Clicked on skill: ${props.skill.title || props.skill.titleKey}`);
  }
};

onMounted(() => {
  console.log(`SkillChip component mounted with skill: ${props.skill.color}`);
  console.log(props.skill);
});
</script>

<style scoped>
.hex-chip {
  /*clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);*/
  width: 80px; /* adjust as needed */
  height: 70px; /* adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.hex-img {
  width: 70%;
  object-fit: contain; /* or cover */
  display: block;
}
</style>
