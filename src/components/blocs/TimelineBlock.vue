<template>
  <q-card flat class="timeline-card">
    <q-card-section class="title-font row q-pb-none">
      <div class="col-6 q-mx-auto">{{ title.toUpperCase() }}</div>
    </q-card-section>
    <q-card-section>
      <q-timeline color="dark" class="q-px-xl">
        <q-timeline-entry
          v-for="(item, index) in items"
          :key="index"
          :icon="item.icon"
          :color="item.color"
        >
          <div class="timeline-item-card">
            <h5 class="timeline-item-title">{{ item.title }}</h5>
            <p class="timeline-item-date">
              {{
                item.date1 && item.date2
                  ? `${item.date1}  -  ${item.date2}`
                  : item.date1
                    ? item.date1
                    : item.date2
                      ? item.date2
                      : ''
              }}
            </p>
            <p class="timeline-item-description">{{ item.description ? item.description : '' }}</p>
          </div>
        </q-timeline-entry>
      </q-timeline>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { QCard, QCardSection, QTimeline, QTimelineEntry } from 'quasar';
import type { TimelineItem } from 'components/models';

const props = defineProps<{
  title: string;
  items: TimelineItem[];
}>();
const title = ref(props.title);
const items = ref<TimelineItem[]>(props.items);

// Watch for changes in props and update the refs accordingly
watch(
  () => props.title,
  (newTitle: string) => {
    title.value = newTitle;
  },
);
watch(
  () => props.items,
  (newItems: TimelineItem[]) => {
    items.value = newItems;
  },
);
</script>

<style scoped>
.timeline-card {
  background-color: var(--q-primary);
  outline: 1rem solid;
  border-radius: 2rem;
}

.timeline-item-card {
  background-color: var(--q-info);
  border-bottom: 0.5rem solid;
  border-radius: 0.5rem;
  text-align: left;
  padding: 0.1rem 2rem 0.5rem 2rem;
}
.timeline-item-title {
  font-weight: bolder;
  margin-bottom: 0.5rem;
  color: var(--q-dark);
}
.timeline-item-date {
  color: var(--q-accent);
}
.timeline-item-description {
  color: var(--q-dark);
}
</style>
