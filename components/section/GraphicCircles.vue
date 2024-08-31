<template>
  <div class="circles">
    <div class="main-circle">
      <div class="first-circle" ref="firstCircle">
        <div class="common-chip" ref="chipD">
          <img
            ref="chipImageD"
            class="chipD__image"
            src="~/assets/images/chipD.png"
            alt="chipD"
          />
        </div>
        <div class="common-chip" ref="chipF">
          <img
            ref="chipImageF"
            class="chipF__image"
            src="~/assets/images/chipF.png"
            alt="chipF"
          />
        </div>
      </div>
      <div class="second-circle" ref="secondCircle">
        <div class="common-chip" ref="chipN">
          <img
            ref="chipImageN"
            class="chipN__image"
            src="~/assets/images/chipN.png"
            alt="chipN"
          />
        </div>
      </div>
      <div class="third-circle" ref="thirdCircle">
        <div class="common-chip" ref="chipI">
          <img
            ref="chipImageI"
            class="chipI__image"
            src="~/assets/images/chipI.png"
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

const updateAllChips = () => {
  updateBallPosition(chipD.value);
  updateBallPosition(chipF.value);
  updateBallPosition(chipN.value);
  updateBallPosition(chipI.value);
};

const getRadius = (circle) => {
  return circle.clientWidth / 2;
};

const updateBallPosition = (chip) => {
  chip.style.transform = `translate(-50%, -50%)`;
  chip.style.left = "50%";
  chip.style.top = "50%";
};

const randomWithMinimumSpread = (minSpread = 30, maxValue = 360) => {
  const baseValue = Math.random() * (maxValue - minSpread);
  return baseValue + minSpread;
};

const animateRotation = (chip, image, speed, circle) => {
  const randomAngle = randomWithMinimumSpread();
  $gsap.to(chip, {
    rotation: -360,
    duration: speed,
    repeat: -1,
    ease: "linear",
    onUpdate: function () {
      const radius = getRadius(circle);
      const angle = $gsap.getProperty(chip, "rotation");

      chip.style.transform = `
            translate(-50%, -50%)
            rotate(${-angle - randomAngle}deg)
            translateX(${radius}px)
          `;

      image.style.transform = `rotate(${angle + randomAngle}deg)`;
    },
  });
};

onMounted(() => {
  animateRotation(chipD.value, chipImageD.value, 15, firstCircle.value);
  animateRotation(chipF.value, chipImageF.value, 20, firstCircle.value);
  animateRotation(chipN.value, chipImageN.value, 20, secondCircle.value);
  animateRotation(chipI.value, chipImageI.value, 35, thirdCircle.value);

  updateAllChips();
});
</script>

<style lang="scss" scoped src="~/assets/css/section/graphicCircles.scss" />
