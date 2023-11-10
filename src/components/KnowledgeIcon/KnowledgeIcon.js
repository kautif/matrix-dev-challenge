import React from "react";
import "./KnowledgeIcon.css"

export default function KnowledgeIcon (props) {
    return (
        <div>
            <div>
                <img className="knowledge-icon" src={props.image} alt={props.alttag} />
            </div>
        </div>
    )
}