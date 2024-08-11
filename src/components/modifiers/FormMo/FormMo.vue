<template>
  <template v-if="Array.isArray(data)">
    <DoInput v-for="(item, key) in data" :key="key" v-bind="item" />
  </template>
  <template v-else>
    <DoInput v-bind="data" />
  </template>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import DoInput from './attribute/DoInput.vue';

const props = defineProps<{ data: Array<{}> | Record<string, any> }>();
const { data } = toRefs(props);
</script>

<style src="./FormMo.style.scss" lang="scss" />
