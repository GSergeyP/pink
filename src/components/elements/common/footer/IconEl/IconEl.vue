<template>
  <TagsMo :data="iconData" />
</template>

<script setup lang="ts">
import { iconData } from './IconEl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
</script>
