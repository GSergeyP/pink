<template>
  <TagsMo :data="phoneData" :class="$style.block" />
</template>

<script setup lang="ts">
import { phoneData } from './PhoneEl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
</script>

<style src="./PhoneEl.style.scss" lang="scss" module />
