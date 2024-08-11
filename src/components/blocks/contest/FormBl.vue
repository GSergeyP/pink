<template>
  <TagsMo :data="formData">
    <H6El />
    <TagsMo :data="formFormData" @submit.prevent="onSubmit">
      <FormEl />
    </TagsMo>
  </TagsMo>
</template>

<script setup lang="ts">
import { formData, formFormData } from './FormBl.data';
import TagsMo from '@/components/modifiers/TagsMo/TagsMo.vue';
import H6El from '@/components/elements/contest/H6El/H6El.vue';
import FormEl from '@/components/elements/contest/FormEl/FormEl.vue';

const onSubmit = (data: Record<string, any>) => {
  let usurname = data.target.elements.usurname.value,
    name = data.target.elements.name.value,
    patronymic = data.target.elements.patronymic.value,
    tel = data.target.elements.tel.value,
    email = data.target.elements.email.value,
    radio = data.target.elements.radio.value,
    textarea = data.target.elements.textarea.value;
  alert(`\n 
       usurname: ${usurname}\n 
       name: ${name}\n 
       patronymic: ${patronymic}\n
       tel: ${tel}\n
       email: ${email}\n
       radio: ${radio}\n
       textarea: ${textarea}`);
};
</script>
