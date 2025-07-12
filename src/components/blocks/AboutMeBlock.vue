<template>
  <q-card class="q-pt-md">
    <q-card-section class="title-font row q-pb-none">
      <div class="col-6">{{ t('aboutMeTitle').toUpperCase() }}</div>
      <q-card flat class="avatar-card">
        <q-card-section class="text-center bg-primary q-pa-sm">
          <q-img
            src="assets/images/avatar.png"
            class="rounded-borders"
            style="width: 150px; height: 150px"
            alt="Avatar"
          />
        </q-card-section>
      </q-card>
    </q-card-section>
    <q-card-section class="row q-mx-xl text-justify">
      <div class="col-12">{{ t('aboutMeDescription') }}</div>
    </q-card-section>
    <q-card-section class="row q-pb-lg">
      <q-btn
        push
        rounded
        icon="download"
        :label="t('downloadCV') + '&nbsp; ( FR )'"
        color="primary"
        class="q-mx-auto"
        type="a"
        :href="baseUrl + 'assets/documents/Brunetto_Marie-Resume_FR.pdf'"
        download
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { t } from 'src/utilities/i18n';
const baseUrl: string = import.meta.env.BASE_URL || '/';
</script>

<style scoped>
.avatar-card {
  position: absolute;
  top: -100px;
  right: 160px;
  z-index: 2;
}
</style>
