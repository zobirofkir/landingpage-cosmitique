import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ClientOne from '@/asstes/images/clients/client-1.jpeg'
import ClientTwo from '@/asstes/images/clients/client-2.jpeg'
import ClientThree from '@/asstes/images/clients/client-3.jpg'
import ClientFour from '@/asstes/images/clients/client-4.jpg'
import ClientFive from '@/asstes/images/clients/client-5.jpg'
import ClientSix from '@/asstes/images/clients/client-6.jpeg'

const testimonials = [
	{
		name: 'Sarah B.',
		age: 28,
		feedback:
			'Liderm Extreme Glow Fluid SPF50+ est incroyable ! Ma peau est protégée et éclatante toute la journée.',
		image: ClientOne,
	},
	{
		name: 'Amina L.',
		age: 34,
		feedback:
			'Je suis ravie de Liderm Extreme Glow Fluid SPF50+. Ma peau est douce et protégée toute la journée.',
		image: ClientTwo,
	},
	{
		name: 'Samira M.',
		age: 29,
		feedback:
			'Un produit exceptionnel ! Liderm a transformé ma routine de soin en un plaisir quotidien.',
		image: ClientThree,
	},
	{
		name: 'Nadia R.',
		age: 40,
		feedback:
			'Depuis que j\'utilise Liderm, ma peau est éclatante et hydratée. Je ne peux plus m\'en passer.',
		image: ClientFour,
	},
	{
		name: 'Fatima K.',
		age: 35,
		feedback:
			'Liderm Extreme Glow Fluid SPF50+ est devenu un incontournable dans ma routine. Ma peau est radieuse et protégée.',
		image: ClientFive,
	},
	{
		name: 'Leila D.',
		age: 32,
		feedback:
			'Je recommande vivement Liderm ! Ce produit a apporté une transformation incroyable à ma peau.',
		image: ClientSix,
	},
];

const TestimenialComponent = () => {
	const [isPlaying, setIsPlaying] = useState(true);

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<section
			id="testimonials"
			className="py-16 px-4 md:px-8 transition-colors bg-white dark:bg-gray-950"
		>
			<div className="container mx-auto text-center">
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
				<div className="overflow-hidden">
					<motion.div
						className="flex space-x-8 px-4 cursor-grab"
						initial={{ x: 0 }}
						animate={isPlaying ? { x: -2000 } : { x: 0 }}
						drag="x"
						dragConstraints={{ left: -2000, right: 0 }}
						whileDrag={{ cursor: "grabbing" }}
						transition={
							isPlaying
								? {
										repeat: Infinity,
										repeatType: 'loop',
										duration: 20,
										ease: 'linear',
								  }
								: {}
						}
						onClick={togglePlay}
					>
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								className="flex-shrink-0 w-80 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-orange-200 dark:border-gray-700"
							>
								<div className="flex flex-col items-center">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-24 h-24 rounded-full mb-4 shadow-md object-cover"
									/>
									<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
										{testimonial.name}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
										Âge : {testimonial.age} ans
									</p>
									<p className="text-gray-600 dark:text-gray-300 text-sm">
										{testimonial.feedback}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TestimenialComponent;