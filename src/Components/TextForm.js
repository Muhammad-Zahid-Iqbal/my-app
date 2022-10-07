import React from 'react'
import { useState } from 'react'



const TextForm = (props) => {
    const handleUpClick =()=>{
        // console.log("Upper case was clicked" +text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success")
    }
    const handleLoClick =()=>{
        // console.log("Upper case was clicked" +text);
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }
    
    const clearText =(event)=>{
        let txt =event.target.value="";
        setText(txt);
        props.showAlert("Cleared Text", "success");

    }

    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleCopy =()=>{
        // var text =document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to the Clipboard", "success");

    }

    const handleExtraSpaces =()=>{
        let newtext =text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Spaces removed successfully", "success");

    }
    
    const [text, setText]=useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summery</h2>
        <p>{text.split(/\+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

export default TextForm