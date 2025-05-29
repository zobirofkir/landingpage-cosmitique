import { useState } from 'react';

const useFaqState = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return { expandedIndex, toggleExpand };
};

export default useFaqState;
