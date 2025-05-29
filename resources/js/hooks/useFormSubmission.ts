import { useState } from 'react';

const useFormSubmission = (handleSubmit: (e: React.FormEvent) => void) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    handleSubmit(e);
    setTimeout(() => setIsSubmitting(false), 2000); // Simulate submission delay
  };

  return { isSubmitting, onSubmit };
};

export default useFormSubmission;
