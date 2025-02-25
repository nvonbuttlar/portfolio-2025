import RadioImage from "../assets/retro-radio.webp";
import { MusicalNoteIcon } from '@heroicons/react/16/solid';

export default function Radio() {
  return (
    <>
      <div className="radio-tab">
        <MusicalNoteIcon className='icon' />
      </div>
      {/* <img className="radio" src={RadioImage} alt={"Retro Radio"} /> */}
    </>
  )
}