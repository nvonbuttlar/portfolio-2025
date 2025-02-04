export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="logo">Nickvb.xyz</a>
      <ul className="nav__list">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/education">Education</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
        <li>
          <a href="/fun">Fun</a>
        </li>
        <li>
          <a href="/styleguide">Styleguide</a>
        </li>
      </ul>
    </nav>
  );
}