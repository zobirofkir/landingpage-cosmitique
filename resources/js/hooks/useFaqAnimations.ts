const useFaqAnimations = (expandedIndex: number | null) => {
  const containerAnimation = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  const questionAnimation = (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: index * 0.1 },
  });

  const answerAnimation = (index: number) => ({
    initial: { height: 0, opacity: 0 },
    animate: {
      height: expandedIndex === index ? 'auto' : 0,
      opacity: expandedIndex === index ? 1 : 0,
    },
    transition: { duration: 0.5, ease: 'easeInOut' },
  });

  const arrowAnimation = (index: number) => ({
    initial: { rotate: 0 },
    animate: { rotate: expandedIndex === index ? 180 : 0 },
    transition: { duration: 0.3 },
  });

  return { containerAnimation, questionAnimation, answerAnimation, arrowAnimation };
};

export default useFaqAnimations;
