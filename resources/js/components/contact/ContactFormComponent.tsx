import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  formData: { name: string; email: string; message: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, handleChange, handleSubmit }) => {
  return (
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
  );
};

export default ContactForm;
