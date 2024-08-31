import useAnimateFadeIn from "./animateFadeIn";

const useAnimateChipsAppearing = () => {
  const { $gsap } = useNuxtApp();

  const timeline = $gsap.timeline();
  timeline
    .add(() => useAnimateFadeIn(".chipD__image"), "2")
    .add(() => useAnimateFadeIn(".chipF__image"), "3")
    .add(() => useAnimateFadeIn(".chipN__image"), "4")
    .add(() => useAnimateFadeIn(".chipI__image"), "5");
};

export default useAnimateChipsAppearing;
