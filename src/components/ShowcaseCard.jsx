import { PlayCircleIcon } from '@heroicons/react/16/solid'

export default function ShowcaseCard({company, description, tech, video, startFrame}) {

  startFrame = startFrame || '#t=0.0'

  return (
    <div className="dev-card">
      <h4>{company}</h4>
      <p>{description}</p>
      <div className="dev-card__tech">
        <div className="dev-card__tech-btn">
          {tech}
        </div>
      </div>
      <div>
        <video muted loop controls>
          <source src={`${video + startFrame}`} type="video/webm" />
          <a href={`${video + startFrame}`}>WEBM</a>
        </video>
        <PlayCircleIcon className="icon" />
      </div>
    </div>
  );
}