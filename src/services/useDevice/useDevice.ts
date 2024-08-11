import { computed, onMounted, onUnmounted, ref } from 'vue';
import { Device, Breakpoint } from './useDevice.constants';
import type { TDevice, TUseDevice } from './useDevice.type';

const useDevice = (): TUseDevice => {
  const screenWidth = ref<number>(0);
  const changeSizeWindow = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    screenWidth.value = window.innerWidth;
    window.addEventListener('resize', changeSizeWindow);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', changeSizeWindow);
  });

  const identifyDevice = computed<TDevice>(() => {
    let currentDevice;
    if (screenWidth.value >= Breakpoint.MAX) currentDevice = Device.D;
    else if (screenWidth.value < Breakpoint.MAX && screenWidth.value >= Breakpoint.MIN)
      currentDevice = Device.T;
    else currentDevice = Device.M;
    return currentDevice;
  });

  return identifyDevice;
};

export { useDevice };
