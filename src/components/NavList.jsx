export default function NavList({showMobileMenu}) {

  return (
    <ul className={`nav__list ${showMobileMenu ? "nav__list--active" : ""}`}>
      {showMobileMenu && (
        <li className="nav__link">
          <a href="/" className="logo">Nickvb.xyz</a>
        </li>
      )}
      <li className="nav__link">
        <a href="/about">About</a>
      </li>
      <li className="nav__link">
        <a href="/skills">Skills</a>
      </li>
      <li className="nav__link">
        <a href="/portfolio">Portfolio</a>
      </li>
      <li className="nav__link">
        <a href="/other">Other</a>
      </li>
      <li className="nav__link">
        <a href="/styleguide">Styleguide</a>
      </li>
      <li className="nav__link">
        <a href="/music">Music</a>
      </li>
    </ul>
  );
}