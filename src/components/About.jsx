import React from "react";
import aboutImage from "../assets/about.webp"

const About = () => {
    return ( 
        <section className="max-w-7xl mx-auto border-b-2 my-20" id="about">

            <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase my-12 mx-4 font-semibold">About</h2>
            <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
                <div className="mb-8 lg:mb-0">
                    <img src={aboutImage} alt="" className="w-full h-auto"/>
                </div>
                <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, voluptates? Laborum veniam maiores atque inventore sequi earum sapiente quo nesciunt rerum magni explicabo veritatis iure laudantium repellendus, perferendis dolores! Eligendi!
                </p>
            </div>
        </section>
       )
}

export default About
