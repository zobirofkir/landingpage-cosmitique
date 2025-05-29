import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import LidermPost from '@/asstes/images/liderm-post.jpg'

interface AboutProps {
  className?: string;
}

const AboutComponent: React.FC<AboutProps> = ({ className }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className={cn(
        "py-16 px-4 md:px-8 transition-colors",
        "bg-orange-50 dark:bg-gray-950", 
        className
      )}
      id='abouts'
    >
      <div className="container md:px-0 px-5 mx-auto">
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

            <div className="mt-8 space-y-6">
                {[
                  {
                    title: "1. Liderm Crème Solaire SPF50+",
                    description:
                      "Protection très haute contre les UVA/UVB, lumière visible et radicaux libres. Texture fluide, invisible, pour tous types de peau.",
                  },
                  {
                    title: "2. Liderm Solaire Teintée SPF50",
                    description:
                      "Crème solaire teintée qui unifie le teint tout en offrant une protection solaire maximale. Idéale pour un effet bonne mine immédiat.",
                  },
                  {
                    title: "3. Liderm Fluide Matifiant SPF50+",
                    description:
                      "Protection solaire à effet matifiant pour peaux mixtes à grasses. Lutte contre la brillance tout en hydratant.",
                  },
                  {
                    title: "4. Liderm Crème Enfants SPF50",
                    description:
                      "Formule douce et sans parfum, conçue pour protéger efficacement la peau fragile des enfants contre les agressions solaires.",
                  },
                  {
                    title: "5. Liderm Spray Transparent SPF30",
                    description:
                      "Spray solaire pratique à texture transparente, résistant à l'eau et adapté aux activités extérieures.",
                  },
                  {
                    title: "6. Liderm Solaire Anti-âge SPF50",
                    description:
                      "Protège et réduit les signes de l’âge grâce à des antioxydants puissants. Parfait pour les peaux matures.",
                  },
                  {
                    title: "7. Liderm Solaire Hydratant Intense SPF50",
                    description:
                      "Crème solaire enrichie en acide hyaluronique pour une hydratation longue durée tout en protégeant la peau.",
                  },
                  {
                    title: "8. Liderm Crème Sport SPF50+",
                    description:
                      "Haute protection résistante à la transpiration. Idéale pour les sportifs et les activités prolongées au soleil.",
                  },
                  {
                    title: "9. Liderm Solaire Peaux Sensibles SPF50",
                    description:
                      "Formule hypoallergénique sans parfum ni alcool, spécialement conçue pour les peaux réactives.",
                  },
                  {
                    title: "10. Liderm Stick Solaire Zones Sensibles SPF50+",
                    description:
                      "Stick protecteur pour les lèvres, le nez et les cicatrices. Format pratique à emporter partout.",
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
                      className="overflow-hidden text-gray-600 dark:text-gray-300"
                    >
                      <p>{item.description}</p>
                    </motion.div>
                  </div>
                ))}
              </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
                <span className="line-through text-gray-400">200 MAD</span>
                <span className="text-orange-600 font-bold text-xl ml-2">170 MAD</span>
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
