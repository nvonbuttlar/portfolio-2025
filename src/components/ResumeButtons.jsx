import { DocumentArrowDownIcon } from '@heroicons/react/16/solid';
import { EyeIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import Modal from './Modal';
import ResumePng from '../assets/resume-02-2025.png';
import ResumePdf from '../assets/nick_von_buttlar_resume_02_2025.pdf';

export default function ResumeButtons() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (e) => {
    console.log("event", e);
    setShowModal(!showModal);
  }

  return (
    <>
      <div className='resume-btns'>
        <a className='resume-btns__btn' onClick={() => toggleModal()}>
          View Resume
          <EyeIcon className='icon' />
        </a>
        <a href={ResumePdf} className='resume-btns__btn' download>
          Download Resume
          <DocumentArrowDownIcon className='icon' />
        </a>
      </div>
      <Modal 
        showModal={showModal} 
        mediaType="image" 
        source={ResumePng}
        alt="Nick von Buttlar's resume"
        toggleModal={toggleModal}
      />
    </>
  )
}