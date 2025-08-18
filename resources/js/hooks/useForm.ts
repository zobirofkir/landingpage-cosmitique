import { useState } from 'react';
import axios from 'axios';

const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: 1,
    phone: '',
    address: '',
    price: ''
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
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = '/products';
      
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      if (csrfToken) {
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = '_token';
        csrfInput.value = csrfToken;
        form.appendChild(csrfInput);
      }
      
      Object.keys(formData).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = formData[key];
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', quantity: 1, phone: '', address: '' });
  };

  return { formData, errors, successMessage, handleChange, handleSubmit, resetForm };
};

export default useForm;
