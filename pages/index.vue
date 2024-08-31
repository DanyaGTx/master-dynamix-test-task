<template>
  <div class="sections-wrapper">
    <SectionForm @submitForm="submitForm" v-model="formData" />
    <SectionGraphicCircles
      v-show="isClient && width >= 980"
      class="max-[980px]:hidden"
    />
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const isClient = ref(false);

const formData = ref({
  email: "",
  name: "",
});

const submitForm = async () => {
  console.log("submit", formData.value);
};

onMounted(() => {
  isClient.value = true;
});
</script>

<style scoped>
.sections-wrapper {
  @apply flex gap-20 w-full items-center max-[1280px]:gap-0 max-[1280px]:justify-around max-[420px]:mt-[-6rem];
}
</style>
