<template>
  <q-page class="row items-center justify-evenly bg-secondary text-dark q-pt-xl">
    <div class="col-6 text-center q-gutter-xl">
      <skills-block />
      <timeline-block
        class="col-12"
        title="Experiences et Education"
        dense
        :items="timelineItems"
        separator
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import TimelineBlock from 'components/blocs/TimelineBlock.vue';
import SkillsBlock from 'src/components/blocs/SkillsBlock.vue';
import type { TimelineItem } from 'src/components/models';
import { ref } from 'vue';

const timelineItems = ref<TimelineItem[]>([]);

const readTimelineItemsFromJSON = async () => {
  try {
    const response = await fetch('/data/education-and-experience.json');
    const data = await response.json();
    timelineItems.value = data;
  } catch (error) {
    console.error('Error fetching timeline items:', error);
  }
};

onMounted(() => {
  void readTimelineItemsFromJSON();
});
</script>
