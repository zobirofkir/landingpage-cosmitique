import { useState } from 'react';

const useFormHandler = (handleSubmit) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await handleSubmit(event);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, handleFormSubmit };
};

export default useFormHandler;
