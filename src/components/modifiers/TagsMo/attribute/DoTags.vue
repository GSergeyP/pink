<template>
  <router-link
    v-if="to"
    :to="{ name: to }"
    :style="[stylesCurrent, styleOther]"
    :class="CLASS(classesCurrent, variant, { to: props.to })"
    :activeClass="aClass"
    :exactActiveClass="eaClass"
  >
    {{ title }}
  </router-link>
  <component
    v-else-if="tags === 'img'"
    :is="tags"
    :src="baseURL + srcImg"
    :atl="altImg"
    :style="[stylesCurrent, styleOther]"
    :class="classesCurrent"
  />
  <component
    v-else-if="tags === 'icon'"
    :is="Icon[title as keyof typeof Icon]"
    :style="[stylesCurrent, styleOther]"
    :class="classesCurrent"
  />
  <component
    v-else-if="tags === 'subblock' || tags === 'hgroup'"
    :is="tags == 'subblock' ? 'div' : 'hgroup'"
    :style="[stylesCurrent, styleOther]"
    :class="classesCurrent"
  >
    <TagsMo :data="subblock" />
  </component>
  <component
    v-else-if="tags === 'button'"
    :is="tags"
    :style="[stylesCurrent, styleOther]"
    :class="CLASS(classesCurrent, variant, { tags: props.tags })"
  >
    <template v-if="icons">
      <TagsMo :data="icons" />
      {{ title }}
    </template>
    <template v-else>
      {{ title }}
    </template>
  </component>
  <component
    v-else
    :is="tags"
    :style="[stylesCurrent, styleOther]"
    :class="CLASS(classesCurrent, variant, { tags: props.tags })"
  >
    <slot></slot>
    {{ title }}
  </component>
</template>

<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';
import { useDevice } from '@/services/useDevice/';
import { CLASS, ATTR } from './DoTags.event';
import { styleProperty } from './DoTags.constants';
import type {
  TKeyValueDevice,
  TPosition,
  TKeyValuePosition,
  TDisplay,
  TKeyValueDisplay,
  TFDirection,
  TKeyValueFDirection,
  TJContent,
  TKeyValueJContent,
  TAItems,
  TKeyValueAItems,
  TVariant
} from './DoTags.type';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
import * as Icon from '@/assets/icons/';

const baseURL = ref<string>(import.meta.env.VITE_BASE_URL);
const device = useDevice();
const props = defineProps({
  //////////////////////////////////////////////////////////////////
  subblock: {
    type: Object as PropType<Record<string, any>>,
    default: null
  },
  icons: {
    type: Object as PropType<Record<string, any>>,
    default: null
  },
  tags: {
    type: String as PropType<string>,
    default: null
  },
  to: {
    type: String as PropType<string>,
    default: null
  },
  title: {
    type: String as PropType<string>,
    default: null
  },
  src: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  alt: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  variant: {
    type: String as PropType<TVariant>,
    default: null
  },
  aClass: {
    type: String as PropType<string>,
    default: null
  },
  eaClass: {
    type: String as PropType<string>,
    default: null
  },
  //////////////////////////////////////////////////////////////////
  styles: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  classes: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  position: {
    type: [String, Object] as PropType<TPosition | TKeyValuePosition>,
    default: null
  },
  top: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  bottom: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  left: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  right: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  display: {
    type: [String, Object] as PropType<TDisplay | TKeyValueDisplay>,
    default: null
  },
  fDirection: {
    type: [String, Object] as PropType<TFDirection | TKeyValueFDirection>,
    default: null
  },
  jContent: {
    type: [String, Object] as PropType<TJContent | TKeyValueJContent>,
    default: null
  },
  aItems: {
    type: [String, Object] as PropType<TAItems | TKeyValueAItems>,
    default: null
  },
  margin: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  mTop: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  mBottom: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  mLeft: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  mRight: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  padding: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  pTop: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  pBottom: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  pLeft: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  pRight: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  width: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  },
  height: {
    type: [String, Object] as PropType<string | TKeyValueDevice>,
    default: null
  }
});

const stylesCurrent = computed(() => {
  let style: Record<string, string> = {};
  style = Object.keys(props).reduce((obj: Record<string, any>, key: string) => {
    if (
      props[key as keyof typeof props] &&
      device.value &&
      styleProperty[key as keyof typeof styleProperty]
    )
      obj[`${styleProperty[key as keyof typeof styleProperty]}`] = ATTR(
        device.value.toLowerCase(),
        props[key as keyof typeof props]
      );
    return obj;
  }, {});
  return style;
});

const styleOther = computed(() => {
  let style: string | null = null;
  if (device.value && props.styles) style = ATTR(device.value.toLowerCase(), props.styles);
  return style;
});

const classesCurrent = computed(() => {
  let classes: string | null = null;
  if (device.value && props.classes) classes = ATTR(device.value.toLowerCase(), props.classes);
  return classes;
});

const srcImg = computed(() => {
  let src: string | null = null;
  if (device.value && props.src) src = ATTR(device.value.toLowerCase(), props.src);
  return src;
});

const altImg = computed(() => {
  let alt: string | null = null;
  if (device.value && props.alt) alt = ATTR(device.value.toLowerCase(), props.alt);
  return alt;
});
</script>
