import React from "react";
import { HERO_CONTENT } from "../constants";

const Hero = () =>{
    return(
       <section className="max-w-7xl mx-auto border-b-2 pt-24">
        <div className="flex flex-col items-center -mt-20">
            <h2 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
            {HERO_CONTENT.title}
            </h2>
            <h3 className="lg:mt-6 text-sm mb-4 font-semibold tracking-tighter">
                {HERO_CONTENT.subtitle}
            </h3>
            <img src={HERO_CONTENT.image} className="w-full h-[65wh] object-cover rounded-2xl p-2"/>
        </div>

       </section>
    )
}



export default Hero