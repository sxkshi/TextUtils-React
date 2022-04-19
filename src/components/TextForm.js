import React from 'react';
import {useState} from 'react';


export default function TextForm(props) {


    const handleUppercase = () =>
    {
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase","success");
    }


    const handleLowercase = () =>
    {
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
    }


    const handleTitlecase = () =>
    {
      let TitlecaseWord='';
      let words=text.split(" ")
      words.forEach(
         element =>{
             TitlecaseWord+=element.charAt(0).toUpperCase()+element.slice(1).toLowerCase()+" "
         });
     setText(TitlecaseWord);
     props.showAlert("Converted to Titlecase","success");
    }


    const handleClearcase = () =>
    {
      let newText='';
      setText(newText);
      props.showAlert("Text Cleared","success");
    }


    const handleonChange = (event) =>
    {
        setText(event.target.value);
        
    }

    const[text, setText]= useState('Enter text here');

  return(
<div class="container" >
    <h2>{props.heading}</h2>
    <div className="mb-3" >
     <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color : props.mode==='dark'?'white':'black' }}  onChange={handleonChange} id="myBoxx"  rows="7"></textarea>
    </div>
    <button className="btn btn-success mx-2 my-2" onClick={handleUppercase}>Convert to Uppercase</button>
    <button className="btn btn-success mx-2 my-2" onClick={handleLowercase}>Convert to Lowercase</button>
    <button className="btn btn-success mx-2 my-2" onClick={handleTitlecase}>Convert to Titlecase</button>
    <button className="btn btn-success mx-2 my-2" onClick={handleClearcase}>Clear Text</button>
    <br/>
    <br/>
    <h4>Your text summary</h4>
        <p> {text.split(" ").length} words, {text.length} characters. </p>
        <p> {0.008 * text.split(" ").length} Minutes read </p>
    <h4>Text Preview</h4>
       <p>{text}</p>
</div>
    ) 
}
