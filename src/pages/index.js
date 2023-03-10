import React from "react"
import "../styles/global.css"
import Header from "../components/Header"
import Img1 from '../images/Img1.jpeg'
import Grid1 from "./Grid1"
import Recipes from "../pages/Recipes"
import Vegan from "../pages/Vegan"
import Review from "../pages/Review"
import Footer from "./Footer"
import Signin from "../pages/Signin"

export default function index() {
  return (
    <div class="bg-amber-50">
      <Header />
      <div class='ml-[500px] mr-[500px]'><Signin /></div>
      <div class="font-serif mt-10 p-6 text-[30px] lg:text-[60px] lg:pt-56 lg:pl-64">
        Delicious meals in under 15 minutes
      </div>
      <div class="text-xl lg:text-2xl m-6 lg:pl-[500px] space-y-10 font-serif">
        A new recipe everyday, directly in your inbox.
      </div>
      <div class="mt-10 flex">
        <input type="text" value= "jamie@example.com" class="h-16 w-[170px] lg:h-16 lg:w-[400px] ml-6 lg:ml-[460px]  bg-stone-200  p-6 font-thin text-xl " />
        <button class="lg:w-40 w-30 h-16 pt-4 bg-pink-400 p-4 text-xl font-serif text-white">
          Subscribe
        </button>
      </div>
      <div class='mt-20 lg:mt-40 lg:flex font-serif' > <img src={Img1} class='w-[350px] h-[350px] lg:w-[700px] lg:h-[700px] lg:p-20 p-6'></img>
      <div class="flex flex-col lg:mt-16 mt-2 lg:text-center p-6 ml-2 lg:p-36 space-y-4"><div class='text-pink-500 text-center '>salad</div>
      <div class='text-3xl lg:text-5xl'>Easy and Delicious Veggie Cobb Salad with Coconut Bacon</div>
      <div class='mr-2 pr-2'>This plant-based take on a classic Cobb salad switches out grilled tofu for chicken breast and smoky toasted coconut for bacon. A creamy, tangy dressing ties it all together.</div>
      </div>
      
      </div>
      <div class="mt-10"><Grid1 /></div>
      <div class='text-center text-pink-500 font-serif text-3xl mt-20 mb-16'>Recipes</div>
      <div> <Recipes /></div>
      <div class='text-center text-pink-500 font-serif text-3xl mt-20 mb-16'>Vegan</div>
      <div><Vegan /></div>
      <div class='text-center text-pink-500 font-serif text-3xl mt-20 mb-16'>Reviews</div>
      <div><Review /></div>
      <div class="text-center text-2xl ml-6 mr-6 lg:mt-60 lg:text-4xl font-serif border-dotted pt-20 border-gray-300 border-t-2 lg:pt-24 lg:ml-44 lg:mr-44">Subscribe for daily recipes. No spam, just food.</div>
      <div class="border-dotted border-gray-300 border-b-2 lg:pb-20 lg:ml-44 lg:mr-44 "><input type="text" value= "jamie@example.com" class="h-12 w-[170px] mt-4  ml-6 lg:ml-[250px] lg:w-[400px] font-thin lg:pl-12 bg-stone-200 lg:h-12 lg:items-center lg:mt-8" />
      <button class='bg-pink-500 text-center text-white h-12 w-40 '>Subscribe</button></div>
      
      <div><Footer /></div>
    </div>
  )
}
