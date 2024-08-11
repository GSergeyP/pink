<template>
  <TagsMo :data="informData">
    <H1El />
    <TagsMo :data="informPhoneData">
      <PhoneEl />
    </TagsMo>
    <TagsMo v-show="device === Device.D" :data="informShadowData">
      <ShadowEl />
    </TagsMo>
    <TagsMo :data="informInformData">
      <InformEl />
    </TagsMo>
  </TagsMo>
</template>

<script setup lang="ts">
import { Device, useDevice } from '@/services/useDevice/';
import { informData, informPhoneData, informShadowData, informInformData } from './InformBl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
import H1El from '@/components/elements/home/inform/H1El/H1El.vue';
import PhoneEl from '@/components/elements/home/inform/PhoneEl/PhoneEl.vue';
import ShadowEl from '@/components/elements/home/inform/ShadowEl/ShadowEl.vue';
import InformEl from '@/components/elements/home/inform/InformEl/InformEl.vue';

const device = useDevice();
</script>
