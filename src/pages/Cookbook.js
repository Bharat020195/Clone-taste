import React from "react"
import Header from "../components/Header"
import Footer from "./Footer"
import Cook1 from "../images/Cook1.jpeg"
import Cook2 from "../images/Cook2.jpeg"
import Cook3 from '../images/Cook3.jpeg'


export default function Cookbook() {
  return (
    <div class="bg-amber-50">
      <div>
        <Header />
      </div>
      <div class="text-5xl font-serif text-center mt-32">
        Our Best-Selling Cookbook
      </div>
      <div class="text-center font-light mt-6">
        100+ super flavorful recipes, handy cooking resources
      </div>
      <div>
        <img src={Cook1} class="pt-36 pl-36 pr-36 pb-16 "></img>
        <div class="text-center pl-[400px] pr-[400px] text-[16px] font-serif">
          Maecenas consectetur pharetra nisi, vel congue ligula tempor quis. Sed
          turpis lorem, tempor varius pharetra pretium, varius at lorem. Nam
          viverra blandit massa id vehicula. Ut feugiat in erat vitae lacinia.
          Etiam tincidunt eros vitae neque iaculis elementum.
        </div>
        <div class="text-center pl-[400px] pr-[400px] text-[16px] font-serif mt-12">
          Etiam vestibulum scelerisque nisl in placerat. Curabitur ultrices quam
          et ligula congue, at bibendum arcu porttitor. Morbi lacinia pretium
          diam, hendrerit sagittis sem consectetur non. Proin vel nisi a turpis
          egestas efficitur. In semper velit non justo aliquam euismod.
        </div>
      </div>
      <div class='text-3xl font-serif ml-[400px] mt-20'>Sed id fermentum neque</div>
      <div class='font-serif pl-[400px] pt-10 pr-[400px]'>Proin tempus arcu vulputate pellentesque tempus. Nulla luctus dui id libero mattis luctus. Donec facilisis massa orci, et placerat purus pulvinar vel. Nullam egestas nisi ex, placerat imperdiet odio ullamcorper eu. Donec a aliquet nisl, sed pellentesque purus. Suspendisse eu nibh auctor, commodo elit vel, congue mi. Nulla nec nisl ligula. Pellentesque eleifend nibh nec augue aliquet efficitur.

</div>
<div> <img src={Cook2} class="pt-20 pl-36 pr-36 pb-16" ></img></div>
<div class='font-serif pl-[400px] pr-[400px] pt-20'>Sed elementum fermentum diam et suscipit. Quisque a facilisis sem. Nam accumsan lorem vitae elit interdum, vitae porta lorem egestas. Curabitur malesuada non quam vitae eleifend. Aliquam sem elit, rhoncus vel tristique ut, finibus ultrices augue. Suspendisse porta at nisl ac scelerisque. Cras sit amet tristique quam, nec eleifend dolor. Ut consequat purus risus, et pellentesque lectus scelerisque.</div>
<div class='border-2 border-gray-200 ml-[400px] mr-[400px] p-10 mt-40'><img src={Cook3}></img>
<div class='text-3xl font-serif mt-10'>Our Best-Selling Cookbook</div>
<div class='font-serif mt-4'>100+ super flavorful recipes, handy cooking resources. Donec facilisis massa orci, et placerat purus pulvinar vel. Nullam egestas nisi ex, placerat imperdiet odio.</div>
<button class='bg-pink-500 text-center text-white font-serif w-[540px] h-12 mt-8'>Purchase now</button></div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
