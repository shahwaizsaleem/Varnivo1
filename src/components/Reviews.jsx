import React from "react";
import { REVIEWS } from "../constants";


const Reviews = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2 my-20" id="reviews">
            <div className="my-20">
                <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
                    Reviews
                </h2>
                <p className="max-w-2xl text-lg mb-12 text-center mx-auto">{REVIEWS.text}</p>
                <div className="flex flex-wrap justify-center">
                    {REVIEWS.reviews.map((review,index) => (
                        <div key = {index} 
                            className="bg-white shadow-lg rounded-2xl border border-neutral-200 p-6 m-4 w-full max-w-xs text-center">
                            <p className="mb-4">{review.review}</p>
                            <div className="flex flex-row items-center mt-4">
                            <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-12 h-12 rounded-full mr-4"/>
                            
                            <div>
                            <p className="text-sm font-bold">{review.name}</p>
                            <p className="text-sm text-neutral-500">{review.title}</p>
                        </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews