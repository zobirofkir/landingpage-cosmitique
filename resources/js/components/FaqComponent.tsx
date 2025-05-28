import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "À qui s’adresse cet écran solaire ?",
    answer: "À tous les types de peau, même sensibles. Parfait pour les adultes cherchant une protection quotidienne anti-âge et anti-taches.",
  },
  {
    question: "Peut-on l’utiliser si l’on a des taches pigmentaires ?",
    answer: "Oui, grâce à la niacinamide et l’extrait de réglisse, il aide à prévenir et réduire les taches brunes.",
  },
  {
    question: "Ce produit résiste-t-il à l’eau ?",
    answer: "Oui, il est résistant à l’eau et à la transpiration. Réappliquez après la baignade ou l’essuyage.",
  },
  {
    question: "L’écran solaire Liderm est-il parfumé ?",
    answer: "Non, il est sans parfum, idéal pour les peaux sensibles ou allergiques.",
  },
  {
    question: "Puis-je l’utiliser pendant la grossesse ?",
    answer: "Oui, la formule est douce et sans ingrédients controversés. En cas de doute, consultez votre médecin.",
  },
];

const FaqComponent: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-orange-50 dark:bg-gray-950" id="faq">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Foire aux Questions
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-2"></div>
        </div>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left flex justify-between items-center text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100"
              >
                {item.question}
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-orange-600"
                >
                  ▼
                </motion.span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden text-gray-600 dark:text-gray-300 mt-2"
              >
                <p>{item.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;