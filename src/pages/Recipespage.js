import React from 'react'
import Rec1 from '../images/Rec1.jpeg'
import Rec2 from '../images/Rec2.jpeg'
import Rec3 from '../images/Rec3.jpeg'
import Rec4 from '../images/Rec4.jpeg'
import Rec5 from '../images/Rec5.jpeg'
import Rec6 from '../images/Rec6.jpeg'
import Rec7 from '../images/Rec7.jpeg'
import Rec8 from '../images/Rec8.jpeg'
import Rec9 from '../images/Rec9.jpeg'
import Rec10 from '../images/Rec10.jpeg'
import Header from '../components/Header'
import Footer from './Footer'

export default function Recipespage() {
  return (
    <div class='bg-amber-50'>
        <Header />
        <div class='text-3xl font-serif ml-20 mt-40'>Recipes</div>
    <div class='flex space-x-12 ml-20 mr-20 mt-20 mb-20'>
      <div><img src={Rec1}></img><div class='text-pink-500 text-center'>Recipes</div><div class='text-center text-2xl font-serif'>Perfectly Fluffy Pumpkin Muffins</div></div>
      <div><img src={Rec2}></img><div class='text-pink-500 text-center'>Recipes</div><div class='text-center text-2xl font-serif'>High-Protein Scrambled Eggs with Smashed Potatoes</div></div>
      <div><img src={Rec3}></img><div class='text-pink-500 text-center'>Recipes</div><div class='text-center text-2xl font-serif'>Crispy Paprika Sweet Potato Bites</div></div>
      <div><img src={Rec4}></img><div class='text-pink-500 text-center'>Recipes</div><div class='text-center text-2xl font-serif'>Crockpot Chicken Tikka Masala with Creamy Coconut</div></div></div>
      <div class='flex space-x-12 ml-20 mr-20 mb-20'>
      <div><img src={Rec5}></img><div class='text-pink-500 text-center'>Recipes</div><div class='text-center text-2xl font-serif'>Classic Peanut Butter Cookies</div></div>
      <div><img src={Rec6}></img><div class='text-pink-500 text-center'>Recipes</div><div class='text-center text-2xl font-serif'>Roasted Vegetable Salad with Crispy Chickpeas</div></div>
      <div><img src={Rec7}></img><div class='text-pink-500 text-center'>Recipes</div><div class='text-center text-2xl font-serif'>Sweetened Condensed Milk Iced Coffee</div></div>
      <div><img src={Rec8}></img><div class='text-pink-500 text-center'>Recipes</div><div class='text-center text-2xl font-serif'>Toasted Coconut & Almond Granola</div></div></div>
      <div class='flex space-x-12 ml-20 mr-20'>
      <div class='flex space-x-12 mb-20'><div class='h-[400px] w-[300px]'><img src={Rec9}></img><div class='text-pink-500 text-center'>Recipes</div><div class='text-center text-2xl font-serif'>Spicy Orange Glazed Tofu</div></div>
      <div class='h-[200px] w-[300px]'><img src={Rec10}></img><div class='text-pink-500 text-center'>Recipes</div><div class='text-center text-2xl font-serif'>Creamy Pantry Pasta with Toasted Walnuts</div></div></div>
    
      </div>
      <Footer />
    </div>
  )
}
