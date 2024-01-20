import './App.css';
import DrumPad from './components/DrumPad';
import heater1 from "./assets/Heater-1.mp3";
import heater2 from "./assets/Heater-2.mp3";
import heater3 from "./assets/Heater-3.mp3";
import heater4 from "./assets/Heater-4_1.mp3";
import clap from "./assets/Heater-6.mp3";
import open_hh from "./assets/Dsc_Oh.mp3";
import kick_n_hat from "./assets/Kick_n_Hat.mp3";
import kick from "./assets/RP4_KICK_1.mp3";
import closed_hh from "./assets/Cev_H2.mp3";

function App() {
  console.log(heater1);

  return (
    <div id="display">
      <DrumPad name="Heater-1" keyBind='Q' soundSrc={heater1} />
      <DrumPad name="Heater-2" keyBind='W' soundSrc={heater2} />
      <DrumPad name="Heater-3" keyBind='E' soundSrc={heater3} />
      <DrumPad name="Heater-4" keyBind='A' soundSrc={heater4} />
      <DrumPad name="Clap" keyBind='S' soundSrc={clap} />
      <DrumPad name="Open-HH" keyBind='D' soundSrc={open_hh} />
      <DrumPad name="Kick-n-Hat" keyBind='Z' soundSrc={kick_n_hat} />
      <DrumPad name="Kick" keyBind='X' soundSrc={kick} />
      <DrumPad name="Closed-HH" keyBind='C' soundSrc={closed_hh} />

    </div>
  )
}

export default App
