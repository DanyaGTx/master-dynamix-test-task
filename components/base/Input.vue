<template>
  <input
    v-model="model"
    class="w-full rounded-xl p-3 outline-none shadow-sm"
    :placeholder="placeholder"
    type="text"
  />
</template>

<script setup>
defineProps({
  placeholder: String,
});

const model = defineModel();
</script>

<style lang="scss" scoped></style>
