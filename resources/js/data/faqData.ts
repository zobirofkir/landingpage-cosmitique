export interface FaqItem {
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

export default faqData;
