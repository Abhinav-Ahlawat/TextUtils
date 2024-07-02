import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to uppercase","success");
    }

    const handleLowClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to lowercase","success");
    }

    const clearText=()=>{
        let newText='';
        setText(newText);
        props.showAlert(" Text has been cleared","success");
    }

    // const copyText=()=>{
    //     var text=document.getElementById("myBox")
    //     text.select();
    //     navigator.clipborad.writeText(text.value);
    // }

    const extraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra spaces are removed","success");
    }

    const handleOnChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    
    const [text,setText]=useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#031f48'}}>

    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} name="" style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#031f48'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={clearText} >Clear Text</button>
  <button className="btn btn-primary mx-1 my-1" onClick={extraSpaces} >Remove extra spaces</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#031f48'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something to preview it here."}</p>
</div>
</>
  )
}
