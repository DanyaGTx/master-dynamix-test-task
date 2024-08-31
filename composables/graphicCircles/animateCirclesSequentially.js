import useAnimateSvgCircle from "./animateSvgCircle";

const useAnimateCirclesSequentially = () => {
  const { $gsap } = useNuxtApp();

  const timeline = $gsap.timeline();
  timeline
    .add(() => useAnimateSvgCircle(".first-circle"))
    .add(() => useAnimateSvgCircle(".second-circle"), "+=0.5")
    .add(() => useAnimateSvgCircle(".third-circle"), "+=0.5");
};

export default useAnimateCirclesSequentially;
