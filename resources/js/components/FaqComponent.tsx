import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Quels sont les principaux actifs du Liderm Extreme Glow Fluid SPF50+ ?",
    answer: "Le produit contient de la niacinamide, de l’acide hyaluronique et des antioxydants naturels qui protègent, hydratent et réparent la barrière cutanée.",
  },
  {
    question: "Convient-il aux peaux sensibles ?",
    answer: "Oui, le Liderm Extreme Glow Fluid SPF50+ est testé sous contrôle dermatologique et convient aux peaux sensibles et réactives.",
  },
  {
    question: "Est-il résistant à l’eau ?",
    answer: "Oui, le produit est résistant à l’eau et à la transpiration, idéal pour une protection efficace tout au long de la journée.",
  },
  {
    question: "Le produit contient-il des filtres solaires controversés ?",
    answer: "Non, le Liderm Extreme Glow Fluid SPF50+ est conçu sans parabènes, silicones, ni filtres solaires controversés.",
  },
  {
    question: "Comment intégrer ce produit dans ma routine quotidienne ?",
    answer: "Appliquez le produit chaque matin après votre crème hydratante pour une protection solaire optimale et un teint éclatant.",
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