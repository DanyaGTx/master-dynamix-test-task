<template>
  <SectionForm @submitForm="submitForm" v-model="formData" />
</template>

<script setup lang="ts">
const formData = ref({
  email: "",
  name: "",
});

const submitForm = async () => {
  console.log("submit", formData.value);
};
</script>

<style scoped></style>
