<template>
  <q-chip :class="'bg-transparent no-shadow hex-chip'" clickable @click="handleClick" tabindex="0">
    <smooth-hexagon :color="hexagonInformation.color || '#3D2626'">
      <template v-if="hexagonInformation.imageName">
        <img
          v-if="hexagonInformation.imageName"
          :src="baseUrl + 'assets/images/icons/' + hexagonInformation.imageName + '.png'"
          :alt="
            hexagonInformation.titleKey
              ? t(hexagonInformation.titleKey).substring(0, 1)
              : hexagonInformation.title
                ? hexagonInformation.title.substring(0, 1)
                : ''
          "
          class="hex-img text-white title-font"
        />
      </template>
    </smooth-hexagon>
    <q-tooltip
      :offset="[0, 10]"
      anchor="top middle"
      self="bottom middle"
      max-width="200px"
      class="row"
    >
      <div class="col-10 row">
        <div class="text-bold q-pb-none row">
          {{
            hexagonInformation.titleKey
              ? t(hexagonInformation.titleKey)
              : hexagonInformation.title || ''
          }}
          <q-icon
            v-if="
              hexagonInformation.linkOnClick &&
              !hexagonInformation.description &&
              !hexagonInformation.descriptionKey
            "
            name="open_in_new"
          />
        </div>
        <div class="row">
          {{
            hexagonInformation.descriptionKey
              ? t(hexagonInformation.descriptionKey)
              : hexagonInformation.description || ''
          }}
        </div>
      </div>
      <div class="col-2" v-if="hexagonInformation.description || hexagonInformation.descriptionKey">
        <q-icon
          v-if="hexagonInformation.linkOnClick"
          class="q-mt-sm"
          name="open_in_new"
          size="sm"
        />
      </div>
    </q-tooltip>
  </q-chip>
</template>

<script lang="ts" setup>
import type { HexagonInformation } from 'src/components/models';
import { t } from 'src/utilities/i18n';
import SmoothHexagon from 'src/components/shapes/SmoothHexagon.vue';
import { onMounted } from 'vue';

const props = defineProps<{
  hexagonInformation: HexagonInformation;
}>();
const baseUrl: string = import.meta.env.BASE_URL || '/';

const handleClick = () => {
  if (props.hexagonInformation.linkOnClick) {
    open(props.hexagonInformation.linkOnClick || '');
    console.log(
      `Clicked on hexagonInformation: ${props.hexagonInformation.title || props.hexagonInformation.titleKey}`,
    );
  }
};

onMounted(() => {
  console.log(
    `HexagonalChip component mounted with hexagonInformation: ${props.hexagonInformation.color}`,
  );
  console.log(props.hexagonInformation);
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
