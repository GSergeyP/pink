<template>
  <HeaderBl />
  <IntroBl />
  <slot></slot>
  <FooterBl />
</template>

<script setup lang="ts">
import HeaderBl from '@/components/blocks/common/HeaderBl/HeaderBl.vue';
import IntroBl from '@/components/blocks/common/IntroBl/IntroBl.vue';
import FooterBl from '@/components/blocks/common/FooterBl/FooterBl.vue';
</script>
