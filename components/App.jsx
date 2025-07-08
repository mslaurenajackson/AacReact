import { useState } from 'react'
import './App.css'
import howler from 'howler';
const { Howl } = howler;

const playSound = (letter) => {
  const sound = new Howl({
    src: [`https://api.voicerss.org/?key=YOUR_API_KEY&hl=en-us&src=${letter}`],
    format: ['mp3'],
  });
  sound.play();
};

function App() {
  const [draggedLetter, setDraggedLetter] = useState('');
  const [communication, setCommunication] = useState([]);

  // use nested arrays to immulate a keyboard layout
  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  const handleDragStart = (letter) => {
    setDraggedLetter(letter);
  };

  const handleDrop = () => {
    setCommunication((prev) => [...prev, draggedLetter]);
    setDraggedLetter('');
  };

  return (
    <>
      <h1>AAC Prototype-Jackson</h1>
      <div className="keyboard">
        {keyboardRows.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((letter) => (
              <button
                key={letter}
                draggable
                onDragStart={() => handleDragStart(letter)}
                onClick={() => playSound(letter)}
                className="square"
              >
                {letter}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div
        id="communication-area"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '100vh',
          width: '100vw',
          backgroundColor: '#f5f5f5',
          boxSizing: 'border-box',
          padding: '20px'
        }}
      >
        {communication.map((letter, index) => (
          <span key={index} style={{ margin: '5px', fontSize: '1.5em' }}>
            {letter}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;