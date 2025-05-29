const useAnimationConfig = () => {
  const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const imageAnimation = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay: 0.2 },
  };

  const textAnimation = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.4 },
  };

  return { sectionAnimation, imageAnimation, textAnimation };
};

export default useAnimationConfig;
