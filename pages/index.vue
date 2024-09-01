<template>
  <div class="sections-wrapper">
    <SectionForm @submitForm="submitForm" v-model="formData" />
    <SectionGraphicCircles
      :key="rerenderKey"
      v-show="isClient && width >= 980"
      class="max-[980px]:hidden"
    />
  </div>
</template>

<script setup lang="ts">
import { useWindowSize, useDebounceFn } from "@vueuse/core";

const { $toast } = useNuxtApp();
const { width } = useWindowSize();

const isClient = ref(false);

const formData = ref({
  email: "",
  name: "",
});

const showSuccessFormToast = () => {
  const options = {
    position: "top-center",
    timeout: 3000,
  };
  // @ts-ignore
  $toast.success(`Hello ${formData.value.name}`, options);
};

const resetFormData = () => {
  formData.value = {
    email: "",
    name: "",
  };
};

const submitForm = async () => {
  showSuccessFormToast();
  resetFormData();
};

const rerenderKey = ref(0);
const rerenderAnimationComponent = useDebounceFn(() => {
  rerenderKey.value++;
}, 500);

onMounted(() => {
  isClient.value = true;

  // restart animation to prevent breaking it on screen rescaling
  window.addEventListener("resize", rerenderAnimationComponent);
});

onUnmounted(() => {
  window.removeEventListener("resize", rerenderAnimationComponent);
});
</script>

<style scoped>
.sections-wrapper {
  @apply flex gap-20 w-full items-center max-[1280px]:gap-0 max-[980px]:justify-around max-[420px]:mt-[-6rem];
}
</style>
