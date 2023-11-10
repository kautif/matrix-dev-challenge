import React from "react";
import "./NewsCard.css"

export default function  NewsCard (props) {
    return (
        <div className="latest-news__news-card">
            <img 
            className="crop-image"
            src={props.image} 
            alt={props.title + " image"}
             />
            <div className="latest-news__news-card__text">
                <h1>{props.title}</h1>
                <h2>{props.desc}</h2>
            </div>
        </div>
    )
}