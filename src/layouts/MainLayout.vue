<template>
  <q-layout view="lHh Lpr lFf">
    <header-block />

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer-block class="col-12 text-center" />
  </q-layout>
</template>

<script setup lang="ts">
import HeaderBlock from 'src/components/blocks/HeaderBlock.vue';
import FooterBlock from 'src/components/blocks/FooterBlock.vue';
</script>
