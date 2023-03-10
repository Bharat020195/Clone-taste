import React from 'react'
import Review1 from '../images/Review1.jpeg'
import Review2 from '../images/Review2.jpeg'
import Review3 from '../images/Review3.jpeg'

export default function Review() {
  return (
    <div class='lg:flex lg:space-x-12 lg:ml-20 lg:mr-20 ml-6 mr-6'>
        <div><img src={Review1} class='h-[300px] w-[400px]'></img><div class='text-center text-[20px] font-serif mt-2'>Our Kitchen Renovation – Before and After</div></div>
        <div><img src={Review2} class='w-[800px]'></img><div class='text-center text-[20px] font-serif mt-2'>Nine Wonderful Wines from Russian River Valley Region</div></div>
        <div><img src={Review3} class='h-[300px] w-[400px]'></img><div class='text-center text-[20px] font-serif mt-2'> Our New Coffee Machine from La Marzocco – The Linea Mini</div></div>
      
    </div>
  )
}
