import React, { useState } from 'react';
import axios from 'axios';
import FeatureProductComponent from '../FeatureProductComponent';
import ModalComponent from '../modal/ModalComponent';
import ProductFormComponent from './ProductFormComponent';
import ProductImageComponent from './ProductImageComponent';

const ProductComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');

    try {
      const response = await axios.post('/products', formData);
      setSuccessMessage(response.data.message);
      setFormData({ name: '', email: '', quantity: '', phone: '', address: '' });
      setShowModal(true);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <section
      id="products"
      className="py-16 transition-colors duration-500 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white mt-10"
    >
      {showModal && (
        <ModalComponent setShowModal={setShowModal} />
      )}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <ProductImageComponent />

        <ProductFormComponent
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>

      <div className='bg-orange-50 dark:bg-gray-950 mt-16 py-8'>
        <FeatureProductComponent />
      </div>
      
    </section>
  );
};

export default ProductComponent;
