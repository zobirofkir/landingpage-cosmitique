import { useState } from 'react';
import axios from 'axios';

const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, resetForm, setShowModal) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');

    try {
      const response = await axios.post('/products', formData);
      setSuccessMessage(response.data.message);
      resetForm();
      setShowModal(true);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', quantity: '', phone: '', address: '' });
  };

  return { formData, errors, successMessage, handleChange, handleSubmit, resetForm };
};

export default useForm;
