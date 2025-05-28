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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative sticky top-20"
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

          {/* Colonne droite : Description du produit */}
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
              L'écran solaire Liderm "Extreme Glow Fluid" est un produit révolutionnaire conçu pour répondre aux besoins 
              des peaux modernes. Grâce à sa formule avancée, il offre une protection optimale contre les rayons UVA, UVB, 
              ainsi que la lumière visible et les radicaux libres. Ce fluide léger et invisible est idéal pour tous les types 
              de peau, même les plus sensibles. Il agit comme un bouclier contre les agressions extérieures tout en prévenant 
              le vieillissement prématuré de la peau. Enrichi en actifs dermatologiques puissants, il hydrate en profondeur, 
              répare les dommages cutanés, unifie le teint et réduit l'apparence des taches pigmentaires. Sa texture fluide 
              et non grasse permet une application facile et agréable, laissant la peau douce, protégée et éclatante. 
              Utilisé quotidiennement, il devient un allié incontournable pour préserver la jeunesse et la santé de votre peau. 
              Que vous soyez exposé au soleil, à la pollution ou à la lumière bleue des écrans, l'écran solaire Liderm est 
              votre solution pour une peau radieuse et protégée tout au long de la journée.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Ce soin solaire est également formulé avec des ingrédients respectueux de l'environnement, garantissant une 
              protection efficace tout en minimisant son impact écologique. Il est testé dermatologiquement et convient 
              parfaitement aux peaux sensibles. Faites confiance à Liderm pour une protection solaire de haute performance 
              qui prend soin de votre peau et de la planète. Avec Liderm, chaque jour est une opportunité de révéler votre 
              beauté naturelle tout en vous protégeant des effets nocifs du soleil et des agressions extérieures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
