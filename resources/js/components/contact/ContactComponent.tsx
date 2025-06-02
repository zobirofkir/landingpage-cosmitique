import React from 'react';
import { motion } from 'framer-motion';
import ModalComponent from '@/components/modal/ModalComponent';
import ContactForm from '@/components/contact/ContactFormComponent';
import useContactForm from '@/hooks/useContactForm';
import useModal from '@/hooks/useModal';

const ContactComponent = () => {
  const { formData, errors, status, handleChange, handleSubmit } = useContactForm();
  const { showModal, setShowModal } = useModal();

  return (
    <section
      className="py-16 px-4 md:px-8 transition-colors bg-white dark:bg-black"
      id="contacts"
    >
      <div className="container mx-auto">
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
            <span className="font-bold text-orange-600">Email:</span> contact@lidermcosmetique.com
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