const useAnimateZoomAndRotate = (selector, {shakingOnHover}) => {
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
    if(shakingOnHover) {
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
}

export default useAnimateZoomAndRotate;
