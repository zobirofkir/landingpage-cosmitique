import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { HiSparkles, HiOutlineBeaker, HiShieldCheck, HiLightBulb, HiOutlineGlobe } from 'react-icons/hi';

const ActifComponent: React.FC = () => {
  const actifs = [
    {
      title: "Niacinamide (Vitamine B3)",
      description: "Réduit les taches, renforce et lisse la peau.",
      Icon: HiSparkles,
    },
    {
      title: "Acide Hyaluronique",
      description: "Hydratation profonde et effet repulpant.",
      Icon: HiOutlineBeaker,
    },
    {
      title: "Vitamine E",
      description: "Antioxydant, protège du vieillissement cutané.",
      Icon: HiShieldCheck,
    },
    {
      title: "Extrait de Réglisse",
      description: "Éclaircit et apaise.",
      Icon: HiLightBulb,
    },
    {
      title: "Thé Vert",
      description: "Protège, calme et détoxifie.",
      Icon: HiOutlineGlobe,
    },
  ];

  return (
    <section
      className={cn(
        "py-16 px-4 md:px-8 transition-colors",
        "bg-orange-50 dark:bg-gray-950"
      )}
      id="actif"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Avant Et <span className="text-orange-600">Apres</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        {/* Actif Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actifs.map((actif, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-lg shadow-lg bg-orange-100 dark:bg-orange-900/20"
            >
              <div className="flex justify-center mb-4">
                <actif.Icon className="w-12 h-12 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
                {actif.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {actif.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActifComponent;