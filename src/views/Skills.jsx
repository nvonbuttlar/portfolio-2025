export default function Skills() {
  return (
    <div className="view">
      <div className='view__header'>
        <h1>Skills</h1>
      </div>
      <div className='view__content'>
        <progress value={75} max={100} />
      </div>
    </div>
  )
}