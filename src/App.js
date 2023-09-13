import React,{useState} from 'react';
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Sidebar from './components/Sidebar';
import "./App.css"


const App = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [textValue, setTextValue] = useState("");

  const addEmoji =(e)=>{
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setTextValue(emoji);
  }
  
   

  return (
    <>
    <h1 className='App-header'>Alore-Nxtwave Assignment</h1>
      <Sidebar />
      <div>
        <button onClick={()=>setShowEmoji(!showEmoji)}>
          add emoji
        </button>
        {showEmoji && (
          <Picker data ={data} onEmojiSelect={addEmoji}  />)
          }
        <br/>
        <h3 className='displayEmoji'>{textValue}</h3>
        
      </div>

      <button className='button1'>+</button>
    </>

  );
};
export default App