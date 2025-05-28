import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
	{
		name: 'Sarah B.',
		feedback:
			'Liderm Extreme Glow Fluid SPF50+ est incroyable ! Ma peau est protégée et éclatante toute la journée.',
		image: 'https://via.placeholder.com/150',
	},
	{
		name: 'Amina L.',
		feedback:
			'Je suis ravie de Liderm Extreme Glow Fluid SPF50+. Ma peau est douce et protégée toute la journée.',
		image: 'https://via.placeholder.com/150',
	},
	{
		name: 'Samira M.',
		feedback:
			'Un produit exceptionnel ! Liderm a transformé ma routine de soin en un plaisir quotidien.',
		image: 'https://via.placeholder.com/150',
	},
	{
		name: 'Nadia R.',
		feedback:
			'Depuis que j\'utilise Liderm, ma peau est éclatante et hydratée. Je ne peux plus m\'en passer.',
		image: 'https://via.placeholder.com/150',
	},
];

const TesimenialComponent = () => {
	return (
		<section
			id="testimonials"
			className="py-16 px-4 md:px-8 transition-colors bg-orange-50 dark:bg-gray-950"
		>
			<div className="container md:px-0 px-5 mx-auto text-center">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						Ce que disent nos clients
					</h2>
					<div className="w-24 h-1 bg-orange-600 mx-auto"></div>
				</motion.div>

				{/* Testimonial Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-orange-200 dark:border-gray-700"
						>
							<div className="flex flex-col items-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-24 h-24 rounded-full mb-4 shadow-md"
								/>
								<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
									{testimonial.name}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 text-sm">
									{testimonial.feedback}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TesimenialComponent;