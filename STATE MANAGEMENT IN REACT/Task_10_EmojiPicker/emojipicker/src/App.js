import './App.css';
import {useState} from 'react'


function App() {

    const emojis = ["😊", "😂", "❤️", "👍", "🎉", "🚀", "🌟", "🍕", "🐶", "🌈"];

    const [selectedEmoji,setSelectedEmoji] = useState("");

    const handleEmojiClick =(emoji) =>{
      setSelectedEmoji(emoji);
    }

    
  return (
    <div className="App">
        <h2>Pick an Emoji!</h2>
        <div>
          {emojis.map((emoji,index) =>(
            <button 
              key={index}
              onClick={()=>handleEmojiClick(emoji)}>{emoji}</button>
          ))}
        </div>

        <div>
          {selectedEmoji ? `You selected: ${selectedEmoji}` : "No emoji selected" }
        </div>
    </div>
  );
}

export default App;
