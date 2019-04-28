import React from 'react';
import { Modal, Button, Form } from 'semantic-ui-react'
import UpdateCard from '../../HOC/UpdateCard/UpdateCard';


export default function CardResearch(props) {
    function handleClick(e) {
        e.preventDefault();
        alert(`Thanks for click here!
        👷 We are working on it :) 
        ` + props.title);
    }


    return (
        <div className="card" style={{ background: props.background, borderColor: props.border }}>
            <div className="card-top">

                <Modal trigger={<Button circular icon="settings" floated="right" basic></Button>} closeIcon >
                    <Modal.Description >
                        <UpdateCard {...props} />
                    </Modal.Description>

                </Modal>

                <p className="card-branch"> <span className="icon icon-branch" />  {props.branch}</p>
            </div>
            <hr />
            <div className="card-title">
                <h3>{props.title}</h3>
            </div>

            <div className="card-description">
                <p> {props.description}</p>
            </div>

            <p> {props.test}</p>
            <hr />
            <p className="card-type"> <span className="icon icon-type" /> {props.type}</p>
            <div className="card-footer">
                <hr />
                <button className="card-button" onClick={(e) => handleClick(e)} > <span className="card-span-emoji" role="img" aria-label="Discard"> ❌ </span>  </button>

                <a href={props.link} target="_blank" rel="noopener noreferrer" >
                    <button className="card-button"> <span className="card-span-emoji" role="img" aria-label="See Text">  👁️ </span>  </button> </a>
                <button className="card-button" onClick={(e) => handleClick(e)} > <span className="card-span-emoji" role="img" aria-label="Save Card"> ✔️ </span> </button>
            </div>

        </div>

    )
}