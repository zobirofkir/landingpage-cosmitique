import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ModalComponent from '../modal/ModalComponent';
import ContactForm from './ContactFormComponent'; 

const ContactComponent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

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
        setShowModal(true);
      } else {
        setStatus('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setStatus('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <section
      className="py-16 px-4 md:px-8 transition-colors bg-white dark:bg-gray-950"
      id="contacts"
    >
      <div className="container md:px-0 px-5 mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Contactez <span className="text-orange-600">Nous</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        {/* Contact Form */}
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
        {status && <p className="text-center mt-4 text-orange-600">{status}</p>}

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            <span className="font-bold text-orange-600">Email:</span> contact@liderm.com
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            <span className="font-bold text-orange-600">Téléphone:</span> +212 6 00 00 00 00
          </p>
        </motion.div>
      </div>
      {showModal && <ModalComponent setShowModal={setShowModal} />}
    </section>
  );
};

export default ContactComponent;