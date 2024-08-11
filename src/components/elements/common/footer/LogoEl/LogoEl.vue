<template>
  <TagsMo :data="logoData" />
</template>

<script setup lang="ts">
import { logoData } from './LogoEl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
</script>
