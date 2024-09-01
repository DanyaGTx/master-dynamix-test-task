const randomWithMinimumSpread = (minSpread = 30, maxValue = 360) => {
  const baseValue = Math.random() * (maxValue - minSpread);
  return baseValue + minSpread;
};

const getRadius = (circle) => {
  return circle.clientWidth / 2;
};

export const useAnimateChipAppearing = (selector) => {
  const { $gsap } = useNuxtApp();

  const element = document.querySelector(selector);

  if (element) {
    $gsap.fromTo(
      element,
      {
        opacity: 0, // Start invisible
      },
      {
        opacity: 1, // Become visible
        duration: 0.5, // Duration of the fade-in effect
        ease: "fadeIn", // Easing function for a smooth transition
        delay: 0, // Delay before animation starts
      }
    );
  }
};

export const useAnimateFadeIn = (selector) => {
  const { $gsap } = useNuxtApp();

  const element = document.querySelector(selector);

  if (element) {
    $gsap.fromTo(
      element,
      {
        opacity: 0, // Start invisible
      },
      {
        opacity: 1, // Become visible
        duration: 0.5, // Duration of the fade-in effect
        ease: "fadeIn", // Easing function for a smooth transition
        delay: 0, // Delay before animation starts
      }
    );
  }
};

export const useAnimateChipsAppearing = () => {
  const { $gsap } = useNuxtApp();

  const timeline = $gsap.timeline();
  timeline
    .add(() => useAnimateFadeIn(".chipD__image"), "2")
    .add(() => useAnimateFadeIn(".chipF__image"), "3")
    .add(() => useAnimateFadeIn(".chipN__image"), "4")
    .add(() => useAnimateFadeIn(".chipI__image"), "5");
};

export const useAnimateSvgCircle = (selector) => {
  const { $gsap } = useNuxtApp();

  const element = document.querySelector(selector);

  if (element) {
    // Set initial state before animation
    $gsap.set(element, {
      scale: 0, // Start small
      opacity: 0, // Start invisible
    });

    // Animate to the final state
    $gsap.to(element, {
      scale: 1, // Grow to full size
      opacity: 1, // Become visible
      duration: 1.5, // Duration of the effect
      ease: "elastic.out(1, 1)", // Elastic easing for a smooth effect
    });
  }
};

export const useAnimateCirclesSequentially = () => {
  const { $gsap } = useNuxtApp();

  const timeline = $gsap.timeline();
  timeline
    .add(() => useAnimateSvgCircle(".first-circle"))
    .add(() => useAnimateSvgCircle(".second-circle"), "+=0.5")
    .add(() => useAnimateSvgCircle(".third-circle"), "+=0.5")
};

export const useAnimateRotation = (chip, image, speed, circle) => {
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

export const useAnimateZoomAndRotate = (selector, { shakingOnHover }) => {
  const { $gsap } = useNuxtApp();

  const element = document.querySelector(selector);

  if (element) {
    // Initial zoom and rotate effect on appearance
    $gsap.fromTo(
      element,
      {
        scale: 0.5, // Start half the size
        rotation: 0, // Start with no rotation
        opacity: 0, // Start transparent
      },
      {
        scale: 1, // End at full size
        rotation: 360, // Complete one full rotation
        opacity: 1, // End fully visible
        duration: 2, // Duration of the animation
        ease: "power2.out", // Smooth easing function
        onComplete: () => {
          // Once the initial animation is complete, start the subtle movement
          startSubtleMovement();
        },
      }
    );

    // Function to start the continuous subtle movement
    const startSubtleMovement = () => {
      $gsap.to(element, {
        x: "+=10", // Move 10px to the right
        y: "+=5", // Move 5px down
        rotation: "+=5", // Rotate 5 degrees to the right
        duration: 3, // Duration of one cycle
        ease: "power1.inOut", // Smooth easing
        yoyo: true, // Move back and forth (including rotation)
        repeat: -1, // Repeat indefinitely
      });
    };

    // Shake effect on hover
    if (shakingOnHover) {
      element.addEventListener("mouseenter", () => {
        $gsap.to(element, {
          x: "+=5", // Shake 5px left and right
          duration: 0.1, // Quick shake duration
          repeat: 10, // Repeat 10 times
          yoyo: true, // Move back and forth
          ease: "power1.inOut",
        });
      });
    }
  }
};
