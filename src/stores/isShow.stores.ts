import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useIsShowStore = defineStore('isShow', () => {
  const state = ref<boolean>(true);
  const useState = (isShow: boolean) => {
    state.value = isShow;
  };
  return { state, useState };
});
