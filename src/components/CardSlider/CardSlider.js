import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./CardSlider.css";

export default function CardSlider () {
    return (
        <div className="latest-news__card-slider-container">
            <div className="latest-news__card-slider">
                <NewsCard 
                    image={require("../../assets/elderly-couple-facing-ocean-at-sunset.jpg")}
                    title="Lorem ipsum  dolor sit  amet consectetur. Sed vulputate eget" 
                    desc="Lorem ipsum dolor sit amet consectetur. Consequat sollicitudin in euismod dolor. Nec sodales viverra turpis molestie" />
                <NewsCard 
                    image={require("../../assets/dreamcatcher-in-sunlight_resize.jpg")}
                    title="Lorem ipsum  dolor sit  amet consectetur. Sed vulputate eget" 
                    desc="Lorem ipsum dolor sit amet consectetur. Consequat sollicitudin in euismod dolor. Nec sodales viverra turpis molestie" />
                <NewsCard 
                    image={require("../../assets/smiling-business-person-against-brickwall-background_resize.jpg")}
                    title="Lorem ipsum  dolor sit  amet consectetur. Sed vulputate eget" 
                    desc="Lorem ipsum dolor sit amet consectetur. Consequat sollicitudin in euismod dolor. Nec sodales viverra turpis molestie" />
            </div>
        </div>
    )
}