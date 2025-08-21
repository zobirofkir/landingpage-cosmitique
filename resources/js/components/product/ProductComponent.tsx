import React from 'react';
import FeatureProductComponent from '../FeatureProductComponent';
import ModalComponent from '../modal/ModalComponent';
import ProductFormComponent from './ProductFormComponent';
import PhoneFormComponent from './PhoneFormComponent';
import ProductImageComponent from './ProductImageComponent';
import useForm from '../../hooks/useForm';
import useModal from '../../hooks/useModal';
import useEmojiRotation from '../../hooks/useEmojiRotation';

const ProductComponent = () => {
  const { formData, errors, successMessage, handleChange, handleSubmit, resetForm } = useForm();
  const { showModal, setShowModal } = useModal();
  const emoji = useEmojiRotation(['☀️', '🌴', '🍹', '🏖️', '🌊'], 2000);

  return (
    <section
      className="py-16 transition-colors duration-500 bg-white text-gray-800 dark:bg-black dark:text-white mt-10"
    >
      {showModal && <ModalComponent setShowModal={setShowModal} />}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <ProductImageComponent />

        <div className="space-y-6" id='products'>
          <ProductFormComponent
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={(e) => handleSubmit(e, resetForm, setShowModal)}
          />
          <PhoneFormComponent />
        </div>
      </div>

      {/* Price Section */}
      <div className="text-center mt-8">
        <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 flex justify-center gap-4">
          <span className="line-through text-gray-400">268,50</span>
          <span className="text-orange-600 font-bold text-xl md:text-2xl">179.89 DH</span>
          <p className="text-4xl animate-bounce">{emoji}</p>
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-gray-950 mt-16 py-8">
        <FeatureProductComponent />
      </div>
    </section>
  );
};

export default ProductComponent;
