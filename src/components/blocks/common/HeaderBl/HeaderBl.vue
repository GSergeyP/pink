<template>
  <TagsMo
    :data="headerData"
    :style="{ opacity: device == Device.D ? '80%' : isShowStore.state ? '80%' : '' }"
  >
    <LogoEl />
    <NavEl v-if="device != Device.D" v-show="!isShowStore.state" />
    <NavEl v-else />
    <SwitchEl />
  </TagsMo>
</template>

<script setup lang="ts">
import { useIsShowStore } from '@/stores/isShow.stores';
import { Device, useDevice } from '@/services/useDevice/';
import { headerData } from './HeaderBl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
import LogoEl from '@/components/elements/common/header/LogoEl/LogoEl.vue';
import NavEl from '@/components/elements/common/header/NavEl/NavEl.vue';
import SwitchEl from '@/components/elements/common/header/SwitchEl/SwitchEl.vue';

const isShowStore = useIsShowStore();
const device = useDevice();
</script>
