const useAnimateChipAppearing = (selector) => {
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

export default useAnimateChipAppearing;
