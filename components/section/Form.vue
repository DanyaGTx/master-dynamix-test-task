<template>
  <div class="max-w-[430px] text-base">
    <h1 class="text-[64px] leading-[64px] font-semibold uppercase">
      Test Form
    </h1>
    <p class="mt-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="max-w-[330px] mt-8 flex flex-col gap-8 items-start">
      <div class="flex flex-col gap-4 w-full">
        <BaseInput v-model="formModel.email" placeholder="Email" />
        <BaseInput v-model="formModel.name" placeholder="Name" />
      </div>
      <BaseButton @click="submitForm">Apply</BaseButton>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["submit-form"]);

const formModel = defineModel();

const submitForm = () => {
  emit("submit-form");
};
</script>

<style scoped>
.apply-button {
  @apply py-3 px-6 bg-gradient-to-r from-blue-700 to-sky-500 rounded-xl text-white font-bold;
}
</style>
