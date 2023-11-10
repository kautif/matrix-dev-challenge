import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import KnowledgeIcon from "../KnowledgeIcon/KnowledgeIcon";
import "./KnowledgeFeature.css";

export default function KnowledgeFeature (props) {
    return (
        <div className="knowledge__feature__text">
            <h1>{props.title}</h1>
            <h2>{props.desc}</h2>
        </div>
    )
}