import AboutComponent from '@/components/AboutComponent'
import FaqComponent from '@/components/FaqComponent'
import ProductComponent from '@/components/ProductComponent'
import SliderComponent from '@/components/SliderComponent'
import React from 'react'

const WelcomePage = () => {
  return (
    <section>
      <SliderComponent />

      <AboutComponent />

      <ProductComponent />

      <FaqComponent />
    </section>
  )
}

export default WelcomePage