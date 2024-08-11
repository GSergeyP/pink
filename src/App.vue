<template>
  <component :is="$route.meta.layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';
import { useDevice } from './services/useDevice/';
import { keyHTML } from './constants/html.constants';

const device = useDevice();
watchEffect(() => {
  document.documentElement.setAttribute(keyHTML.DEVICE, device.value);
});
</script>
