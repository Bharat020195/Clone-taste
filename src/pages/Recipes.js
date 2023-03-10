import React from "react"
import Rec1 from "../images/Recipes1.jpeg"
import Rec2 from "../images/Recipes2.jpeg"
import Rec3 from "../images/Recipes3.jpeg"

export default function Recipes() {
  return (
    <div class='lg:flex lg:space-x-12 lg:ml-20 lg:mr-20 ml-6 mr-6'>
      <div>
        <img src={Rec1} class='h-[300px] w-[400px]'></img>
        <div class='text-center text-[20px] font-serif mt-2'>Perfectly Fluffy Pumpkin Muffins</div>
      </div>
      <div>
        <img src={Rec2} class='w-[800px]'></img>
        <div class='text-center text-[20px] font-serif mt-2'>High-Protein Scrambled Eggs with Smashed Potatoes</div>
      </div>
      <div>
        <img src={Rec3} class='h-[300px] w-[400px]'></img>
        <div class='text-center text-[20px] font-serif mt-2'>Crispy Paprika Sweet Potato Bites</div>
      </div>
    </div>
  )
}
