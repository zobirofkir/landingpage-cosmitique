import AboutComponent from '@/components/AboutComponent'
import ProductComponent from '@/components/ProductComponent'
import SliderComponent from '@/components/SliderComponent'
import React from 'react'

const WelcomePage = () => {
  return (
    <section>
      <SliderComponent />

      <AboutComponent />

      <ProductComponent />
    </section>
  )
}

export default WelcomePage