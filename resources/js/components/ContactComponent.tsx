import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ModalComponent from './product/ModalComponent'; // Import ModalComponent

const ContactComponent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/contacts', formData);
      if (response.data.success) {
        setShowModal(true); // Show modal on success
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
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-800 dark:text-gray-100 font-medium mb-2"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Entrez votre nom"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 dark:text-gray-100 font-medium mb-2"
            >
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Entrez votre e-mail"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-gray-800 dark:text-gray-100 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Entrez votre message"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700 transition font-medium"
            >
              Envoyer le message
            </motion.button>
          </div>
        </motion.form>
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
      {showModal && <ModalComponent setShowModal={setShowModal} />} {/* Render modal */}
    </section>
  );
};

export default ContactComponent;