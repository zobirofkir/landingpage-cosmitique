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
      className="container md:px-0 px-5 mx-auto text-center space-y-8"
    >
      <h3 className="text-4xl font-extrabold leading-snug tracking-tight">
        Pourquoi choisir Liderm ? <br /> لماذا تختار ليديرم؟
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group p-8 rounded-xl bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-900/20 dark:to-transparent border border-orange-200/50 dark:border-orange-700/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-700/30 dark:to-orange-600/30 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <IconComponent className="h-10 w-10 text-orange-700 dark:text-orange-500" />
              </motion.div>
              <h4 className="text-2xl font-semibold text-orange-700 dark:text-orange-400 text-center mb-4">
                {feature.title} <br /> {feature.arabicTitle}
              </h4>
              <p className="text-gray-700 dark:text-orange-100/90 text-center leading-relaxed">
                {feature.description} <br /> {feature.arabicDescription}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FeatureProductComponent;
