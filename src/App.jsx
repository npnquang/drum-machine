import { useEffect } from 'react';
import './App.css';
import DrumPad from './components/DrumPad';
import sounds from './data/sounds';
function App() {
  useEffect(() => {
    function handleKeyDown(event) {
      const key = event.key.toUpperCase();

      const drumPad = sounds.find(pad => pad.keyBind === key);

      if (drumPad) {
        const audioElement = document.getElementById(drumPad.keyBind);
        audioElement.play();

        const displayElement = document.getElementById('display');
        displayElement.innerText = drumPad.name;
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
    <div id="drum-buttons">
      {sounds.map(sound => (
        <DrumPad keyBind={sound.keyBind} key={sound.name} name={sound.name} soundSrc={sound.soundSrc} />
      ))}
    </div>
    <div id="display" className='bg-primary bg-gradient'></div>
    </>
  )
}

export default App
