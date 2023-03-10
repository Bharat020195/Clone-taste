import React from 'react'
import Vegan1 from '../images/Vegan1.jpeg'
import Vegan2 from '../images/Vegan2.jpeg'
import Vegan3 from '../images/Vegan3.jpeg'
import Vegan4 from '../images/Vegan4.jpeg'

export default function Vegan() {
  return (
    <div class="lg:flex lg:space-x-12 lg:ml-20 lg:mr-20 ml-6 mr-6">
       <div> 
      <img src={Vegan1}></img>
      <div class='text-center text-[20px] font-serif mt-2'>Roasted Vegetable Salad with Crispy Chickpeas</div></div>
      <div>
      <img src={Vegan2}></img>
      <div class='text-center text-[20px] font-serif mt-2'>Sweetened Condensed Milk Iced Coffee</div></div>
      <div ><img src={Vegan3}></img><div class='text-center text-[20px] font-serif mt-2'>Toasted Coconut & Almond Granola</div></div>
      <div><img src={Vegan4}></img><div class='text-center text-[20px] font-serif mt-2'>Spicy Orange Glazed Tofu</div></div>
    </div>
  )
}
