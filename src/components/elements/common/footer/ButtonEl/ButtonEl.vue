<template>
  <TagsMo :data="blockData">
    <TagsMo :data="buttonData" @event-click-tags="handleclick" />
  </TagsMo>
</template>

<script setup lang="ts">
import { blockData, buttonData } from './ButtonEl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';

const handleclick = (event: string | Record<string, any>) => {
  if (event) alert(event);
};
</script>
