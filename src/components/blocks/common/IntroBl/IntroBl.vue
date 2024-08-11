<template>
  <TagsMo
    :data="introData"
    :class="[$style.block, $style[`block-${className}`]]"
    :style="{
      marginTop:
        device == Device.T && !isShowStore.state
          ? '145px'
          : device == Device.M && !isShowStore.state
            ? '190px'
            : device == Device.M
              ? '-66px'
              : '-110px'
    }"
  >
    <H1El :route="$route.name" />
    <PhoneEl v-show="$route.name == RouteName.HOME" />
    <ButtonEl v-show="$route.name == RouteName.HOME && device != Device.M" />
    <H4El v-show="$route.name == RouteName.HOME && device != Device.M" />
  </TagsMo>
  <TagsMo :data="introMobileData" v-show="$route.name == RouteName.HOME && device == Device.M">
    <ButtonEl />
    <H4El />
  </TagsMo>
</template>

<script setup lang="ts">
import { useIsShowStore } from '@/stores/isShow.stores';
import { Device, useDevice } from '@/services/useDevice/';
import { useRoute } from 'vue-router';
import { RouteName } from '@/router/router.constants';
import { computed } from 'vue';
import { introData, introMobileData } from './IntroBl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
import PhoneEl from '@/components/elements/common/intro/PhoneEl/PhoneEl.vue';
import H1El from '@/components/elements/common/intro/H1El/H1El.vue';
import ButtonEl from '@/components/elements/common/intro/ButtonEl/ButtonEl.vue';
import H4El from '@/components/elements/common/intro/H4El/H4El.vue';

const isShowStore = useIsShowStore();
const device = useDevice();
const route = useRoute();

const className = computed(() => {
  return route.name == RouteName.HOME ? 'home' : 'itc';
});
</script>

<style src="./IntroBl.style.scss" lang="scss" module />
