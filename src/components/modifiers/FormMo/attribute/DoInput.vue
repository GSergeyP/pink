<template>
  <TagsMo
    v-if="subblock"
    tags="div"
    :data="Object.fromEntries(Object.entries(props).filter(([key]) => key !== 'subblock'))"
  >
    <FormMo :data="subblock" />
  </TagsMo>
  <TagsMo
    v-else-if="fieldset"
    tags="fieldset"
    :data="
      Object.fromEntries(
        Object.entries(props).filter(([key]) => key !== 'fieldset' && key !== 'legend')
      )
    "
  >
    <TagsMo tags="legend" :data="legend" />
    <FormMo :data="fieldset" />
  </TagsMo>
  <TagsMo v-else-if="label" tags="label" :for="id" :data="label">
    <FormMo :data="Object.fromEntries(Object.entries(props).filter(([key]) => key !== 'label'))" />
  </TagsMo>
  <component
    v-else-if="type == 'textarea'"
    is="textarea"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :style="[stylesCurrent, styleOther]"
    :class="CLASS(classesCurrent, variant, { type: props.type })"
    :v-model="name"
  />
  <component
    v-else-if="type === 'submit' || type === 'reset'"
    is="input"
    :type="type"
    :value="value"
    :style="[stylesCurrent, styleOther]"
    :class="CLASS(classesCurrent, variant, { type: props.type })"
  />
  <template v-else>
    <component
      is="input"
      :type="type"
      :name="name"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      :style="[stylesCurrent, styleOther]"
      :class="CLASS(classesCurrent, variant, { type: props.type })"
      :v-model="name"
      @change="check($event)"
    />
    <template v-if="type == 'radio' || type == 'checkbox'">
      <component is="span" :class="'span-' + CLASS('', variant, { type: props.type })" />
    </template>
    <template v-else />
  </template>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { useDevice } from '@/services/useDevice/';
import { CLASS, ATTR } from './DoInput.event';
import { styleProperty } from './DoInput.constants';
import type { TKeyValueDevice, TPosition, TKeyValuePosition, TVariant } from './DoInput.type';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
import FormMo from '@/components/modifiers/FormMo/FormMo.vue';

const check = (e: any) => {
  console.log(e);
};

const device = useDevice();
const props = defineProps({
  //////////////////////////////////////////////////////////////////
  type: {
    type: String as PropType<string>,
    default: null
  },
  name: {
    type: String as PropType<string>,
    default: null
  },
  label: {
    type: Object as PropType<Record<string, any>>,
    default: null
  },
  id: {
    type: String as PropType<string>,
    default: null
  },
  value: {
    type: String as PropType<string>,
    default: null
  },
  placeholder: {
    type: String as PropType<string>,
    default: null
  },
  variant: {
    type: String as PropType<TVariant>,
    default: null
  },
  //////////////////////////////////////////////////////////////////
  fieldset: {
    type: Object as PropType<Record<string, any>>,
    default: null
  },
  legend: {
    type: Object as PropType<Record<string, any>>,
    default: null
  },
  subblock: {
    type: Object as PropType<Record<string, any>>,
    default: null
  },
  tags: {
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
</script>
