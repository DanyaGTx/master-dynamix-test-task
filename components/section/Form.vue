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
        <BaseInput
          v-model="formModel.email"
          :validation="v$.$errors"
          placeholder="Email"
        />
        <BaseInput
          v-model="formModel.name"
          :validation="v$.$errors"
          placeholder="Name"
        />
      </div>
      <BaseButton @click="submitForm">Apply</BaseButton>
    </div>
  </div>
</template>

<script setup>
import { required, email, helpers, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const emit = defineEmits(["submit-form"]);

const formModel = defineModel();

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("The email field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    name: {
      required: helpers.withMessage("The name field is required", required),
      minLength: helpers.withMessage(
        "Name must be at least 2 characters long",
        minLength(2)
      ),
    },
  };
});

const v$ = useVuelidate(rules, formModel);

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect) {
    emit("submit-form");
  }
};
</script>

<style scoped>
.apply-button {
  @apply py-3 px-6 bg-gradient-to-r from-blue-700 to-sky-500 rounded-xl text-white font-bold;
}
</style>
