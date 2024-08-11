<template>
  <TagsMo v-if="device == Device.D" :data="phoneData" />
  <TagsMo v-else :data="phoneData[2]" />
</template>

<script setup lang="ts">
import { phoneData } from './PhoneEl.data';
import { Device, useDevice } from '@/services/useDevice/';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';

const device = useDevice();
</script>
