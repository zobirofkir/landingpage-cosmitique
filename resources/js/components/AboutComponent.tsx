import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface AboutProps {
  className?: string;
}

const AboutComponent: React.FC<AboutProps> = ({ className }) => {
  return (
    <section className={cn("py-16 px-4 md:px-8 bg-white dark:bg-black transition-colors mt-10", className)} id='abouts'>
      <div className="max-w-6xl mx-auto">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            À propos de <span className="text-orange-600">Liderm</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche : Image Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative md:sticky top-20"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-orange-100 dark:bg-orange-900/20">
              <img
                src="https://blueviolet-curlew-711794.hostingersite.com/wp-content/uploads/elementor/thumbs/Liderm-Sticker-1-Mockup-r6fipu2513yigajsooyns09v8v087zz0qf9v19cae4.jpg"
                alt="Liderm Extreme Glow Fluid SPF50+"
                className="w-full h-full object-cover"
              />
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Écran solaire Liderm – Extreme Glow Fluid SPF50+
            </h3>
            <p className="text-orange-600 font-medium mb-4">
              Soin solaire anti-âge & anti-taches haute performance
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Contenance :</strong> 50 ml
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              L'écran solaire Liderm "Extreme Glow Fluid" est une innovation dermo-cosmétique qui transforme votre routine de soins solaires. Sa formule avancée offre une protection optimale contre les rayons UVA, UVB, ainsi que la lumière bleue et infrarouge, responsables du vieillissement prématuré de la peau. Grâce à une texture fluide, légère et non grasse, il s’applique facilement et laisse un fini invisible sans traces blanches.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ce soin est enrichi en puissants actifs dermatologiques, tels que la niacinamide, l’acide hyaluronique et des antioxydants naturels, qui agissent en synergie pour protéger, hydrater et réparer la barrière cutanée. Il unifie le teint, diminue l'apparence des taches pigmentaires et apporte un éclat naturel à la peau dès les premières applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Testé sous contrôle dermatologique, le produit convient à tous les types de peau, y compris les peaux sensibles et réactives. Il est résistant à l’eau et à la transpiration, ce qui en fait un allié idéal pour une protection efficace tout au long de la journée, en ville comme à la plage.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Conçu dans le respect de la peau et de l’environnement, il ne contient ni parabènes, ni silicones, ni filtres solaires controversés. Son packaging recyclable reflète l'engagement de Liderm pour une beauté plus responsable et durable.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Intégrez le "Extreme Glow Fluid SPF50+" dans votre routine quotidienne pour une peau visiblement protégée, unifiée et éclatante. Une protection solaire d’exception qui prend soin de votre peau aujourd’hui et la préserve pour demain.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
