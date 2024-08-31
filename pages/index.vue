<template>
  <SectionForm @submitForm="submitForm" v-model="formData" />
</template>

<script setup lang="ts">
const formData = ref({
  email: "",
  name: "",
});

const submitForm = () => {
  console.log("submit");
};
</script>

<style scoped></style>
