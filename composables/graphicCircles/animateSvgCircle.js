const useAnimateSvgCircle = (selector) => {
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

export default useAnimateSvgCircle;
