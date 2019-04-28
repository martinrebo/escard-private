import React, { useState, useEffect } from 'react'
import './FormResearchCard.scss';
import {fire, firebaseApp } from '../../../fire';
import { useStateValue } from '../../../State/State';

export default function FormResearchCard() {

  const [{ user }, dispatch] = useStateValue();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [branch, setBranch] = useState("");
  const [type, setType] = useState("");
  const [tags, setTags] = useState("");

  console.log(user.uid );

  let data = { title, description, link, branch, type, tags};


  function sendData(e) {
    e.preventDefault();
    console.log(data);
    fire.collection('card').add({
      title: data.title,
      description: data.description,
      link: data.link,
      branch: data.branch,
      type: data.type,
      tags: data.tags,
      uid: user.uid,
      userName: user.displayName,
      created: firebaseApp.firestore.Timestamp.fromDate(new Date())
    }).then(
      function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert(`You added a new card:
        - Title: ${data.title} 
        - Description: ${data.link}
        - Link: ${data.link}
        - Branch: ${data.branch}
        - Type: ${data.type}
        `)
fire.collection('card').doc(docRef.id).update({
  docid: docRef.id,
})
.then( console.log("[FormResearchCard] updateCardId "+ docRef.id ))
.catch( function (error) {console.error('[FormResearchCard] error: ', error)})

        setTitle("");
        setDescription("");
        setLink("");
        setBranch("");
        setType("");
        setTags("");

      }
    ).catch(
      function (error) {
        console.error("Error adding document: ", error);
        alert( `Error:
        Oopps! Something went wrong.
        
        You need to be Logged in to be able to Add Cards. 
       ${error} `)
      }
    );
  }

  return (
    <form onSubmit={(e) => { sendData(e) }}>
      <textarea className="inputTextArea" rows="2" type="text" placeholder="Title | Max Length 65" required minLength="3" maxLength="65"
        value={title} onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value)
        }
        } />
      <textarea className="inputTextArea" type="text" rows="3" placeholder="Description | Max Length 300" required minLength="5" maxLength="300"
        value={description} onChange={(e) => {
          e.preventDefault();
          setDescription(e.target.value)
        }} />
      <input className="inputForm" type="url" placeholder="https://example.com" required pattern="https?://.+"
        value={link} onChange={(e) => {
          e.preventDefault();
          setLink(e.target.value)
        }} />

      <p className="paragraph"> Branch of Knowledge: </p>
      <label>
        <input className="inputRadio" type="radio" name="branch" value="business" checked={branch === "business"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Business
      </label>
      <label>
        <input className="inputRadio" type="radio" name="branch" value="tech" checked={branch === "tech"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Tech
      </label>
      <label>
        <input className="inputRadio" type="radio" name="branch" value="health" checked={branch === "health"}
          onChange={(e) => {
            setBranch(e.target.value);

          }} /> Health
</label>



<p className="paragraph"> Tag the type of Card: </p>

<input className="inputForm" type="text" placeholder="Type - max length: 50" required minLength="1" maxLength="50"
        value={type} onChange={(e) => {
          e.preventDefault();
          setType(e.target.value)
        }} />
        <input className="inputForm" type="text" placeholder="Keyword tags - max length: 50" required minLength="1" maxLength="50"
        value={tags} onChange={(e) => {
          e.preventDefault();
          setType(e.target.value)
        }} />

      <button type="submit" className="submit"> Submit Card </button>
    </form>

  )
}