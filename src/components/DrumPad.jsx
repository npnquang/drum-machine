import PropTypes from 'prop-types';


export default function DrumPad({ name, keyBind, soundSrc }) {


  function handleClick() {
    const audioElement = document.getElementById(`${keyBind}`);
    audioElement.play();

    const displayElement = document.getElementById('display');
    displayElement.innerText = name;
  }

  return (
    <div className="drum-pad" id={name} onClick={handleClick}>
      <audio className='clip' id={keyBind} src={soundSrc}></audio>
      {keyBind}
    </div>

  );
}

DrumPad.propTypes = {
  name: PropTypes.string.isRequired,
  keyBind: PropTypes.string.isRequired,
  soundSrc: PropTypes.string.isRequired,
}