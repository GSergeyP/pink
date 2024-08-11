<template>
  <TagsMo :data="navData">
    <TagsMo :data="linkData" />
  </TagsMo>
</template>

<script setup lang="ts">
import { navData, linkData } from './NavEl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
</script>
