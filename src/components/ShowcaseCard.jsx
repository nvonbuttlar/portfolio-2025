export default function ShowcaseCard({company, description, tech, video}) {

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
      <video playsInline autoPlay muted loop controls width="400">
        <source src={video} type="video/webm" />
        <a href={video}>WEBM</a>
      </video>
      </div>
    </div>
  );
}