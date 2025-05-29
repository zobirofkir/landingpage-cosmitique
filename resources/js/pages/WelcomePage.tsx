import React from 'react'
import { Head } from '@inertiajs/react'
import { motion } from 'framer-motion'

import SliderComponent from '@/components/SliderComponentComponent'
import BannerComponent from '@/components/BannerComponent'
import AboutComponent from '@/components/AboutComponent'
import CtaComponent from '@/components/CtaComponent'
import ActifComponent from '@/components/ActifComponent'
import ProductComponent from '@/components/product/ProductComponent'
import TestimenialComponent from '@/components/TestimenialComponent'
import FaqComponent from '@/components/FaqComponent'
import ContactComponent from '@/components/contact/ContactComponent'
import RandomStars from '@/components/RandomStarsComponent'
import SocialMediaIcons from '@/components/SocialMediaIconsComponent'
import SubmitButton from '@/components/SubmitButtonComponent'

const WelcomePage = () => {
  return (
    <section className="relative overflow-hidden">
      <RandomStars />
      <Head title="Accueil" />
      <SliderComponent />
      <BannerComponent />
      <AboutComponent />
      <CtaComponent />
      <ActifComponent />
      <ProductComponent />
      <TestimenialComponent />
      <FaqComponent />
      <ContactComponent />
      <SocialMediaIcons />
      <SubmitButton />
    </section>
  )
}

export default WelcomePage