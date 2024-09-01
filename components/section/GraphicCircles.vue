<template>
  <div class="circles">
    <div class="main-circle">
      <div class="first-circle" ref="firstCircle">
        <div class="common-chip chipD" ref="chipD">
          <img
            ref="chipImageD"
            class="chipD__image"
            src="~/assets/images/chip_d.png"
            alt="chipD"
          />
        </div>
        <div class="common-chip chipF" ref="chipF">
          <img
            ref="chipImageF"
            class="chipF__image"
            src="~/assets/images/chip_f.png"
            alt="chipF"
          />
        </div>
      </div>
      <div class="second-circle" ref="secondCircle">
        <div class="common-chip chipN" ref="chipN">
          <img
            ref="chipImageN"
            class="chipN__image"
            src="~/assets/images/chip_n.png"
            alt="chipN"
          />
        </div>
      </div>
      <div class="third-circle" ref="thirdCircle">
        <div class="common-chip chipI" ref="chipI">
          <img
            ref="chipImageI"
            class="chipI__image"
            src="~/assets/images/chip_i.png"
            alt="chipI"
          />
        </div>
        <div class="gold-card">
          <img src="~/assets/images/golden-card.png" alt="golden-card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  useAnimateZoomAndRotate,
  useAnimateRotation,
  useAnimateChipsAppearing,
  useAnimateCirclesSequentially,
} from "~/composables/graphicCircles/index";

const { $gsap } = useNuxtApp();

const firstCircle = ref(null);
const secondCircle = ref(null);
const thirdCircle = ref(null);

const chipD = ref(null);
const chipImageD = ref(null);

const chipF = ref(null);
const chipImageF = ref(null);

const chipN = ref(null);
const chipImageN = ref(null);

const chipI = ref(null);
const chipImageI = ref(null);

const updateAllChipsPosition = () => {
  updateChipPosition(chipD.value);
  updateChipPosition(chipF.value);
  updateChipPosition(chipN.value);
  updateChipPosition(chipI.value);
};

const updateChipPosition = (chip) => {
  if (chip) {
    chip.style.transform = `translate(-50%, -50%)`;
    chip.style.left = "50%";
    chip.style.top = "50%";
  }
};

const animateChipsRotation = () => {
  useAnimateRotation(chipD.value, chipImageD.value, 15, firstCircle.value);
  useAnimateRotation(chipF.value, chipImageF.value, 25, firstCircle.value);
  useAnimateRotation(chipN.value, chipImageN.value, 20, secondCircle.value);
  useAnimateRotation(chipI.value, chipImageI.value, 35, thirdCircle.value);
};

const startAllAnimations = () => {
  const timeline = $gsap.timeline();
  timeline
    .add(() => useAnimateCirclesSequentially())
    .add(
      () => useAnimateZoomAndRotate(".gold-card", { shakingOnHover: true }),
      "+=0.5"
    );

  useAnimateChipsAppearing();
  animateChipsRotation();
  updateAllChipsPosition();
};

onMounted(() => {
  startAllAnimations();
});
</script>

<style lang="scss" scoped src="~/assets/css/section/graphicCircles.scss" />
