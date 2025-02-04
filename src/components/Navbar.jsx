export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Nickvb.xyz</a>
      <ul>
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