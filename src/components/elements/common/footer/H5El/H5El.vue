<template>
  <TagsMo :data="h5Data">
    <slot></slot>
  </TagsMo>
</template>

<script setup lang="ts">
import { h5Data } from './H5El.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
</script>
