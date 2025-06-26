

// import { useEffect, useState } from 'react'
import './App.css'
import Addrecipe from './Components/Addrecipe/Addrecipe'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import OurTeam from './Components/OurTeam/OurTeam'
import Testimonials from './Components/Testimonials/Testimonials'
import TopRecipe from './Components/TopRecipes/TopRecipe'

function App() {

  return (
   <div>
      <section>
        <Banner/>
      </section>
      <section>
        <TopRecipe/>
      </section>
      <section>
        <Addrecipe/>
      </section>
      <section>
        <Testimonials/>
      </section>
      <section>
       <OurTeam/>
      </section>
     
   </div>
    
  )
}

export default App
