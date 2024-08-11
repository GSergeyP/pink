<template>
  <TagsMo :data="footerData">
    <LogoEl />
    <ButtonEl />
    <H5El>
      <IconEl />
    </H5El>
  </TagsMo>
</template>

<script setup lang="ts">
import { footerData } from './FooterBl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
import LogoEl from '@/components/elements/common/footer/LogoEl/LogoEl.vue';
import ButtonEl from '@/components/elements/common/footer/ButtonEl/ButtonEl.vue';
import H5El from '@/components/elements/common/footer/H5El/H5El.vue';
import IconEl from '@/components/elements/common/footer/IconEl/IconEl.vue';
</script>
