import { randomWithMinimumSpread, getRadius } from "~/utils/graphicCircles/index";

const useAnimateRotation = (chip, image, speed, circle) => {
  const { $gsap } = useNuxtApp();

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

export default useAnimateRotation;
