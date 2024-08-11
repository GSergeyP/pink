<template>
  <TagsMo v-if="currentData" :data="currentData" />
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { h1Data } from './H1El.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';

const props = defineProps<{ route: string | symbol | undefined }>();
const { route } = toRefs(props);

const currentData = computed(() => {
  return Object.values(h1Data.filter((item) => item[route.value as keyof typeof item])).length > 0
    ? Object.values(h1Data.filter((item) => item[route.value as keyof typeof item])[0])[0]
    : null;
});
</script>
