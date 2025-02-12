import NavList from "./NavList";

export default function MobileMenu({showMobileMenu}) {
  return (
    <div className={`mobile-menu ${showMobileMenu ? "mobile-menu--active" : ""}`}>
      <p>Nickvb.xyz</p>
      <NavList showMobileMenu={showMobileMenu} />
    </div>
  );
}