<template>
  <TagsMo :data="iconBurgerData" v-show="isShow && device != Device.D" @click="handleClickLink" />
  <TagsMo :data="iconCloseData" v-show="!isShow && device != Device.D" @click="handleClickLink" />
</template>

<script setup lang="ts">
import { useIsShowStore } from '@/stores/isShow.stores';
import { ref, watch } from 'vue';
import { Device, useDevice } from '@/services/useDevice/';
import { iconBurgerData, iconCloseData } from './SwitchEl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';

const isShowStore = useIsShowStore();
const isShow = ref<boolean>(isShowStore.state);
const device = useDevice();

watch(isShowStore, (newIsShow) => {
  isShow.value = newIsShow.state;
});

const handleClickLink = () => {
  isShow.value = !isShow.value;
  isShowStore.useState(isShow.value);
};
</script>
