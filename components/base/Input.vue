<template>
  <div>
    <input
      v-model="model"
      class="w-full rounded-xl p-3 outline-none shadow-sm"
      :placeholder="placeholder"
      type="text"
    />
    <p class="text-red-500 text-sm">
      {{ findFieldValidation?.$message }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: String,
  validation: Object,
});

const model = defineModel();

const findFieldValidation = computed(() => {
  if (!props.validation) return;

  return props.validation.find(
    (obj) => obj.$propertyPath === props.placeholder.toLowerCase()
  );
});
</script>

<style lang="scss" scoped></style>
