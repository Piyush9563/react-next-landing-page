
import React from "react"
import  Header from "../Components/Header"
import Hero from "../Components/Hero"
import Features from "../Components/Features"

const page = () => {
  return (
<>

    <div className='container'>
    <Header/>
      <Hero />
    <Features/>
    
    <section className='cta'>
        <button className='ctaButton'>Get Started</button>
      </section>
      
    </div>
    </>
  );
};

export default page;















































