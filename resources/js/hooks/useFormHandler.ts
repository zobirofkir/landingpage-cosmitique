import { useState } from 'react';

const useFormHandler = (handleSubmit) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await handleSubmit(event);
    setIsSubmitting(false);
  };

  return { isSubmitting, handleFormSubmit };
};

export default useFormHandler;
