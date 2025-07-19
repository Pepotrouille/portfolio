<template>
  <q-card>
    <q-card-section class="title-font row q-pb-none">
      <div class="col-6 q-mx-auto">{{ t('socialsTitle').toUpperCase() }}</div>
    </q-card-section>
    <q-card-section class="row q-gutter-md q-mx-xl justify-center">
      <hexagonal-chip v-for="social in socials" :key="social.id" :hexagon-information="social" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { t } from 'src/utilities/i18n';
import { ref, watch } from 'vue';
import type { Social } from 'src/components/models';
import HexagonalChip from 'src/components/elements/HexagonalChip.vue';
const props = defineProps<{
  socials: Social[];
}>();
const socials = ref<Social[]>(props.socials);
watch(
  () => props.socials,
  (newSocials: Social[]) => {
    socials.value = newSocials;
  },
);
</script>
