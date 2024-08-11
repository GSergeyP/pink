<template>
  <TagsMo :data="shadowData" />
</template>

<script setup lang="ts">
import { shadowData } from './ShadowEl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
</script>
