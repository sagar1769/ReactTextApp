import React, {useState} from 'react'

export default function TextForm(props) {
    

    const handleUpClick = ()=>{
        console.log("uppercase was cliked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    } 

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
    }

    const handleLocClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    } 

    const handleCopy = () => { 
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    } 

    const handleOnChange = (event)=>{ 
        console.log("onChange");
        setText(event.target.value)
    } 
    const [text, setText] = useState('') 
  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.TextForm}</h1>
            <div className="mb-3">
            <textarea className="form-control" value= {text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="mybox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLocClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1>Your Text Summary</h1>
          <p> {text.split(" ").length} words, {text.length} character</p>
          <p> {0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    
    </>
  )
}
