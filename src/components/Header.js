import React from "react"
import "../styles/global.css"
import { useState } from "react"
import Signin from "../pages/Signin"



export default function Header() {

  const handleSignIn=() =>{
    alert ()
  }

  return (
    <div class="flex font-serif font-thin">
      <ul class="hidden lg:flex space-x-10 pt-6 pl-16 cursor-pointer">
        <li><a href="/">Home</a></li>
        <li><a href="/Recipespage">Recipes</a></li>
        <li><a href="/Cookbook">Cookbook</a></li>
        <li><a href="/">About </a></li>
      </ul>
      <div class="pl-4 pt-2 lg:pl-80 lg:pt-6 lg:pr-28 text-2xl items-center ">
        Taste
      </div>
      <ul class="flex pl-[150px] lg:pl-96 lg:pt-6 pt-2 space-x-10">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
           
            fill="currentColor"
            class="bi bi-search mt-1 w-5 h-5"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-list lg:hidden w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 "
            />
          </svg>
        </li>
        <li class="hidden lg:flex cursor-pointer" onClick={handleSignIn}>  Sign in
       
        </li>
        
      </ul>
     
    </div>
  )
}
