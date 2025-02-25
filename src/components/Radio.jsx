import RadioImage from "../assets/gold-radio.png";
import { MusicalNoteIcon } from '@heroicons/react/16/solid';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from "react";

export default function Radio() {
  const [showRadio, setShowRadio] = useState(false);

  const toggleRadio = () => {
    setShowRadio(!showRadio);
  }

  const closeRadio = () => {
    setShowRadio(false);
  }

  return (
    <>
      {showRadio && (
        <div className="overlay overlay__radio"></div>
      )}
      <div className="radio-tab" onClick={() => toggleRadio()}>
        <MusicalNoteIcon className='icon' />
      </div>
      <div className={`radio ${showRadio ? 'radio--active': ''}`}>
        {showRadio && (
          <XMarkIcon className='icon' onClick={() => closeRadio() } />
        )}
        <img className="radio__img" src={RadioImage} alt={"Retro Radio"} />
      </div>
    </>
  )
}