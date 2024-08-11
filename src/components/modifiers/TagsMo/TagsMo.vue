<template>
  <template v-if="Array.isArray(data)">
    <DoTags
      v-for="(item, key) in data"
      :key="key"
      v-bind="{ ...item, void: null, icon: null }"
      @click="eventEmits(item.void)"
    />
  </template>
  <template v-else>
    <DoTags v-bind="{ ...data, void: null, icon: null }" @click="eventEmits(data.void)">
      <slot></slot>
    </DoTags>
  </template>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { Emits } from '@/constants/emits.constants';
import DoTags from './attribute/DoTags.vue';

const props = defineProps<{ data: Array<{}> | Record<string, any> }>();
const { data } = toRefs(props);

const emits = defineEmits([Emits.EVENT_CLICK_TAGS]);
const eventEmits = (event: string | Record<string, any>) => {
  return emits(Emits.EVENT_CLICK_TAGS, event);
};
</script>

<style src="./TagsMo.styles.scss" lang="scss" />
