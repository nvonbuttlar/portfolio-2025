import { DocumentArrowDownIcon } from '@heroicons/react/16/solid';
import { EyeIcon } from '@heroicons/react/16/solid';

export default function ResumeButtons() {
  return (
    <div className='resume-btns'>
      <a className='resume-btns__btn'>
        View Resume
        <EyeIcon className='icon' />
      </a>
      <a className='resume-btns__btn'>
        Download Resume
        <DocumentArrowDownIcon className='icon' />
      </a>
    </div>
  )
}