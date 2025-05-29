import { useState } from 'react';

const useToggleExpand = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return { expandedIndex, toggleExpand };
};

export default useToggleExpand;
