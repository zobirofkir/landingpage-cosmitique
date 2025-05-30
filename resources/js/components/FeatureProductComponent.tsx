import { motion } from 'framer-motion';

const FeatureProductComponent = () => {
  return (
    <>
    {/* Product Features Section */}
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
          {[
            {
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              title: "Protection SPF50+",
              description: "Offre une protection solaire optimale pour votre peau.",
              arabicTitle: "حماية SPF50+",
              arabicDescription: "يوفر حماية مثالية لبشرتك من أشعة الشمس.",
            },
            {
              icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
              title: "Hydratation Intense",
              description: "Garde votre peau douce et hydratée toute la journée.",
              arabicTitle: "ترطيب مكثف",
              arabicDescription: "يحافظ على بشرتك ناعمة ورطبة طوال اليوم.",
            },
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Formule Anti-âge",
              description: "Réduit les signes de vieillissement et améliore l’éclat.",
              arabicTitle: "صيغة مضادة للتجاعيد",
              arabicDescription: "يقلل من علامات الشيخوخة ويحسن الإشراق.",
            },
            {
              icon: "M3 10h11M9 21V3m-6 6h11M9 21V3",
              title: "Texture Légère",
              description: "S'absorbe rapidement sans laisser de résidu gras.",
              arabicTitle: "ملمس خفيف",
              arabicDescription: "يمتص بسرعة دون ترك أي بقايا دهنية.",
            },
            {
              icon: "M12 2a10 10 0 0110 10m-10-10a10 10 0 00-10 10m10-10v10m0 0l-3-3m3 3l3-3",
              title: "Résistance à l'eau",
              description: "Idéal pour les activités en extérieur et les baignades.",
              arabicTitle: "مقاومة للماء",
              arabicDescription: "مثالي للأنشطة الخارجية والسباحة.",
            },
            {
              icon: "M12 8v8m4-4H8m8 0a4 4 0 11-8 0 4 4 0 018 0z",
              title: "Convient à tous types de peau",
              description: "Formulé pour être doux et efficace sur toutes les peaux.",
              arabicTitle: "مناسب لجميع أنواع البشرة",
              arabicDescription: "مصمم ليكون لطيفًا وفعالًا على جميع أنواع البشرة.",
            },
          ].map((feature, idx) => (
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-orange-700 dark:text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </motion.div>
              <h4 className="text-2xl font-semibold text-orange-700 dark:text-orange-400 text-center mb-4">
                {feature.title} <br /> {feature.arabicTitle}
              </h4>
              <p className="text-gray-700 dark:text-orange-100/90 text-center leading-relaxed">
                {feature.description} <br /> {feature.arabicDescription}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default FeatureProductComponent