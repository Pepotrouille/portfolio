<template>
  <div class="hexagon-container">
    <div class="hexagon-overlay">
      <slot></slot>
    </div>
    <svg
      width="100%"
      height="100%"
      viewBox="123 205 140 140"
      xmlns="http://www.w3.org/2000/svg"
      style="display: block; margin: auto; position: relative; z-index: 1"
    >
      <path :d="hexPath" :fill="color || '#4a90e2'" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  innerImagePath?: string;
  innerImageAlt?: string;
  color?: string;
}>();
const color = props.color || '#3D2626';
const hexPath =
  'M211.23,212.12H174.77a30.3,30.3,0,0,0-26.24,15.16L130.3,258.85a30.31,30.31,0,0,0,0,30.3l18.23,31.57a30.3,30.3,0,0,0,26.24,15.16h36.46a30.3,30.3,0,0,0,26.24-15.16l18.23-31.57a30.31,30.31,0,0,0,0-30.3l-18.23-31.57A30.3,30.3,0,0,0,211.23,212.12Z';
</script>
<style scoped>
.hexagon-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hexagon-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
}
</style>
