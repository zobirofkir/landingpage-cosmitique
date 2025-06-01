import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Globe,
  Flashlight,
  Ruler,
  UploadCloud,
  CircleDot
} from 'lucide-react';

const FeatureProductComponent = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Protection SPF50+",
      description: "Offre une protection solaire optimale pour votre peau.",
      arabicTitle: "حماية SPF50+",
      arabicDescription: "يوفر حماية مثالية لبشرتك من أشعة الشمس.",
    },
    {
      icon: Globe,
      title: "Hydratation Intense",
      description: "Garde votre peau douce et hydratée toute la journée.",
      arabicTitle: "ترطيب مكثف",
      arabicDescription: "يحافظ على بشرتك ناعمة ورطبة طوال اليوم.",
    },
    {
      icon: Flashlight,
      title: "Formule Anti-âge",
      description: "Réduit les signes de vieillissement et améliore l’éclat.",
      arabicTitle: "صيغة مضادة للتجاعيد",
      arabicDescription: "يقلل من علامات الشيخوخة ويحسن الإشراق.",
    },
    {
      icon: Ruler,
      title: "Texture Légère",
      description: "S'absorbe rapidement sans laisser de résidu gras.",
      arabicTitle: "ملمس خفيف",
      arabicDescription: "يمتص بسرعة دون ترك أي بقايا دهنية.",
    },
    {
      icon: UploadCloud,
      title: "Résistance à l'eau",
      description: "Idéal pour les activités en extérieur et les baignades.",
      arabicTitle: "مقاومة للماء",
      arabicDescription: "مثالي للأنشطة الخارجية والسباحة.",
    },
    {
      icon: CircleDot,
      title: "Convient à tous types de peau",
      description: "Formulé pour être doux et efficace sur toutes les peaux.",
      arabicTitle: "مناسب لجميع أنواع البشرة",
      arabicDescription: "مصمم ليكون لطيفًا وفعالًا على جميع أنواع البشرة.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="container md:px-0 px-5 mx-auto text-center space-y-10"
    >
      <h3 className="text-4xl font-extrabold leading-snug tracking-tight text-orange-700 dark:text-orange-300">
        Pourquoi choisir Liderm ? <br /> لماذا تختار ليديرم؟
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {features.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px 5px rgba(255,165,0,0.6)"
              }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white/40 dark:bg-orange-900/10 backdrop-blur-md border border-orange-200 dark:border-orange-700 transition-all duration-300"
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-100 to-orange-300 dark:from-orange-700/40 dark:to-orange-600/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-inner"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <IconComponent className="h-10 w-10 text-orange-800 dark:text-orange-400 group-hover:drop-shadow-[0_0_10px_rgba(255,165,0,0.8)] transition duration-300" />
              </motion.div>
              <h4 className="text-2xl font-semibold text-orange-800 dark:text-orange-300 mb-3">
                {feature.title} <br />
                <span className="text-sm text-orange-600 dark:text-orange-400">{feature.arabicTitle}</span>
              </h4>
              <p className="text-gray-700 dark:text-orange-100/90 text-sm leading-relaxed">
                {feature.description} <br />
                <span className="text-xs">{feature.arabicDescription}</span>
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FeatureProductComponent;
