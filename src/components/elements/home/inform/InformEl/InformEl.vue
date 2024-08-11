<template>
  <TagsMo :data="informData" />
</template>

<script setup lang="ts">
import { informData } from './InformEl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
</script>
