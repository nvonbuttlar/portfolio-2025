import ResumeButtons from "../components/ResumeButtons";

export default function Skills() {
  return (
    <div className="view">
      <div className='view__header'>
        <h1>Skills</h1>
      </div>
      <div className='view__content'>
        <ResumeButtons />
        <progress value={75} max={100} />
      </div>
    </div>
  )
}