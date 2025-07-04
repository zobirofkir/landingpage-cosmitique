import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import LidermPost from '@/asstes/images/liderm-post.jpg';
import useExpandedState from '../hooks/useExpandedState';
import useAnimationConfig from '../hooks/useAnimationConfig';

interface AboutProps {
  className?: string;
}

const AboutComponent: React.FC<AboutProps> = ({ className }) => {
  const { expandedIndex, toggleExpand } = useExpandedState();
  const { sectionAnimation, imageAnimation, textAnimation } = useAnimationConfig();

  return (
    <section
      className={cn(
        "py-16 px-4 md:px-8 transition-colors",
        "bg-orange-50 dark:bg-black", 
        className
      )}
      id='abouts'
    >
      <div className="container md:px-0 px-5 mx-auto">
        {/* Titre de section */}
        <motion.div {...sectionAnimation} className="lg:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            À propos de <span className="text-orange-600">Liderm</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche : Image Sticky */}
          <motion.div {...imageAnimation} className="relative md:sticky top-20">
            <div className="aspect-square overflow-hidden rounded-2xl bg-orange-100 dark:bg-orange-900/20">
              <div className='max-w-[100%] '>
                <img
                  src={LidermPost}
                  alt="Liderm Extreme Glow Fluid SPF50+"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ width: '100%' }}
                whileInView={{ width: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 bg-orange-600 z-10"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600 rounded-full hidden md:block" />
          </motion.div>

          {/* Colonne droite : Longue description */}
          <motion.div {...textAnimation}>
            <h3 className="text-2xl md:mt-0 mt-20 font-bold mb-4 text-gray-800 dark:text-gray-100">
              Écran solaire Liderm – Extreme Glow Fluid SPF50+
            </h3>
            <p className="text-orange-600 font-medium mb-4">
              Soin solaire anti-âge & anti-taches haute performance
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Contenance :</strong> 50 ml
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              L'écran solaire Liderm "Extreme Glow Fluid" est un soin dermo-cosmétique nouvelle génération qui allie photoprotection avancée, prévention du vieillissement cutané, et correction des taches pigmentaires. Conçu pour tous les types de peau, même les plus sensibles, ce fluide léger et invisible offre une très haute protection SPF50+ contre les UVA, UVB, la lumière visible et les radicaux libres.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Il est enrichi en actifs dermatologiques puissants qui hydratent, réparent, unifient et protègent la peau au quotidien.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Les avantages de l'écran solaire Liderm",
                  description: [
                    "Très haute protection SPF50+ UVA/UVB/lumière visible",
                    "Texture ultra-légère, invisible, au fini mat",
                    "Non-comédogène, non gras, sans parfum",
                    "Anti-taches, anti-âge, enrichi en actifs dermatologiques",
                    "Convient à toutes les peaux, même sensibles",
                    "Résistant à l’eau et à la transpiration",
                    "Sans effet blanc, sans irritation oculaire",
                  ],
                },
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full text-left flex justify-between items-center text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2"
                  >
                    {item.title}
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-orange-600"
                    >
                      {expandedIndex === index ? "▲" : "▼"}
                    </motion.span>
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedIndex === index ? 'auto' : 0,
                      opacity: expandedIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden text-gray-600 dark:text-gray-300"
                  >
                    <ul className="list-disc pl-5 font-semibold">
                      {item.description.map((advantage, i) => (
                        <li key={i}>{advantage}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                <span className="line-through text-gray-400">268,50</span>
                <span className="text-orange-600 font-bold text-xl ml-2">179.89 DH</span>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Profitez de cette offre exceptionnelle dès maintenant !
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
