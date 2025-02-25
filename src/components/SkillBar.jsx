export default function SkillBar({icon, title, progress,}) {
  return (
    <li className="skill">
      <img className="skill__icon" src={icon} alt={`${title} Icon`} />
      <div className="skill__stats">
        <h6>{title}</h6>
        <span className="skill__percent">{`${progress}%`}</span>
        <progress className="skill__progress" value={progress} max={100} />
      </div>
    </li>
  );
}