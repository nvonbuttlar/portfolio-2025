

export default function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div>Nickvb.xyz</div>
      <ul className="mobile-menu__nav-list">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/development">Dev</a>
        </li>
        <li>
          <a href="/other">Other</a>
        </li>
        <li>
          <a href="/styleguide">Styleguide</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
      </ul>
    </div>
  );
}