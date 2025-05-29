import { useState } from 'react';
import axios from 'axios';

const useContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) newErrors.name = 'Le nom est requis.';
    if (!formData.email) newErrors.email = "L'adresse e-mail est requise.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "L'adresse e-mail doit être valide.";
    if (!formData.message) newErrors.message = 'Le message est requis.';

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) return;

    try {
      const response = await axios.post('/contacts', formData);
      if (response.data.success) {
        setStatus('Message envoyé avec succès.');
      } else {
        setStatus('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setStatus('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return { formData, errors, status, handleChange, handleSubmit };
};

export default useContactForm;
