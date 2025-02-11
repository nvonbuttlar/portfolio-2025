import NavList from "./NavList";

export default function MobileMenu({showMobileMenu}) {
  return (
    <div className={`mobile-menu ${showMobileMenu ? "mobile-menu--active" : ""}`}>
      <div>Nickvb.xyz</div>
      <NavList showMobileMenu={showMobileMenu} />
    </div>
  );
}