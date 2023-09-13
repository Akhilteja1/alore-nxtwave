import React,{useState} from 'react';
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Sidebar from './components/Sidebar';


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
      <Sidebar />
      <div>
        <button onClick={()=>setShowEmoji(!showEmoji)}>
          add emoji
        </button>
        {showEmoji && (
          <Picker data ={data} onEmojiSelect={addEmoji}  />)
          }
        <br/>
        <p >{textValue}</p>
        
      </div>
    </>

  );
};
export default App