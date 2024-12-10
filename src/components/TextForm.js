import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const toUppCase = () => {
    console.log("button clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("primary", "Text Converted to Upper Case.")
  };
  const toLowCase = () => {
    console.log("button clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("success", "Text Converted to Lower Case.")
  };
  
  const toFirstUpp = () => {
    if(text !==""){
    console.log("button clicked " + text);
    let newText = text[0].toUpperCase() + text.slice(1);
    setText(newText);
    props.showalert("warning", "First Letter Converted to Caps.")
    }
  };
  
  const toTitleCase = () => {
    console.log("button clicked, " + text + " , " + typeof text);
    let newText = text.replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
    setText(newText);
    props.showalert("info", "Text Converted to Title Case.")
  };
  const clear = ()=>{
    setText("")
    props.showalert("danger", "Text Cleared.")
  }
  
  const handleCopy = () =>{
    navigator.clipboard.writeText(text)
    props.showalert("dark", "Text Copied to Clipboard.")
  }

  const textChange = (event) => {
    console.log("Changes occures in TextArea");
    setText(event.target.value);
  };

  return (
    <div className="container my-4 py-3 mt-5">
      <div className="mb-1">
        <h3 htmlFor="textBox" className={`form-label m-2 text-center text-${props.mode === "light" ? "dark" : "light"}`}>
          {props.heading}
        </h3>
        <textarea
          className={`form-control my-2 mt-3 border border-dark ${props.mode === "light" ? "bg-light " : "bg-secondary text-light"}`}
          value={text}
          onChange={textChange}
          id="textBox"
          rows="10"
        ></textarea>
        <button className={`btn btn-${props.mode === "light" ? "outline-primary" : "primary"} m-2`} onClick={toUppCase}>
          Convert to Upper Case
        </button>
        <button className={`btn btn-${props.mode === "light" ? "outline-success" : "success"} m-2`} onClick={toLowCase}>
          Convert to Lower Case
        </button>
        <button className={`btn ${props.mode === "light" ? "btn-outline-warning" : "btn-warning text-light"} m-2 `} onClick={toFirstUpp}>
          Only First Letter Upper Case
        </button>
        <button className={`btn ${props.mode === "light" ? "btn-outline-info" : "btn-info text-light"} m-2 `} onClick={toTitleCase}>
          Convert to Title Case
        </button>
        <button className={`btn btn-${props.mode === "light" ? "outline-dark" : "dark"} m-2`} onClick={handleCopy}>
          Copy
        </button>
        <button className={`btn btn-${props.mode === "light" ? "outline-danger" : "danger"} m-2`} onClick={clear}>
          Clear
        </button>
      </div>
      <div className="text-center">
        <h4 className={`text-${props.mode === "light" ? "dark" : "light"} mb-1`}>Text Summery</h4>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          "{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words and {text.length} Characters"
        </p>
        <h4 className={`text-${props.mode === "light" ? "dark" : "light"} mb-1`}>Preview</h4>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>{text===""?"Type Something to Preview. ":text}</p>
      </div>
    </div>
  );
}
