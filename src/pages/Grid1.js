import React from "react"
import Img2 from "../images/img2.jpeg"
import Img3 from "../images/Img3.jpeg"
import Img4 from "../images/Img4.jpeg"
import Img5 from "../images/Img5.jpeg"

export default function Grid1() {
  return (
    <div class="lg:flex lg:space-x-12 ml-6 mr-6 lg:ml-20 lg:mr-20">
      <div>
        <img src={Img2}></img>
        <div class='text-pink-500 text-center pt-2 pb-2'>Seafood</div>
        <div class='text-center text-[20px] font-serif'>Broiled Miso-Glazed Tuna</div>
      </div>
      <div>
        <img src={Img3}></img>
        <div  class='text-pink-500 text-center pt-2 pb-2'>Cake</div>
        <div class='text-center text-[20px] font-serif'>Gluten-free Chocolate Hazelnut Lava Cake</div>
      </div>
      <div>
        <img src={Img4}></img>
        <div  class='text-pink-500 text-center pt-2 pb-2'>Breakfats</div>
        <div class='text-center text-[20px] font-serif'>Waffles with Chai Ice-Cream and Chocolate Sauce</div>
      </div>
      <div>
        <img src={Img5}></img>
        <div  class='text-pink-500 text-center pt-2 pb-2'>Appetizer</div>
        <div class='text-center text-[20px] font-serif'>Chili Garlic Roasted Potatoes with Dipping Sauces</div>
      </div>
    </div>
  )
}
