import PropTypes from 'prop-types';


export default function DrumPad({ name, keyBind, soundSrc }) {
  return (
    <div className="drum-pad" id={name}>
      <audio controls className='clip' id={keyBind} src={soundSrc}></audio>
      {keyBind}
    </div>

  );
}

DrumPad.propTypes = {
  name: PropTypes.string.isRequired,
  keyBind: PropTypes.string.isRequired,
  soundSrc: PropTypes.string.isRequired,
}