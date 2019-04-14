import React from 'react';

export default function CardResearch(props) {
    return(
        <div className="card">
        <img src={props.src} alt=""></img>
        <h3>{props.title}</h3>
        <p> {props.description}</p>
        <p> {props.duration}</p>
        <p>{props.type}</p>
        <p> {props.tags}</p>
        <p> {props.author}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer" > Link </a>

        </div>
    ) 
}