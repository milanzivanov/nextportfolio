import Logo from "./Logo";
import Navigation from "./Navigation";

function Header({ toggleMobileNav }) {
  return (
    <header className="relative z-20 md:px-0 py-3">
      <div className="flex justify-between items-center bg-slate-50/10 p-3 rounded-md max-w-7xl mx-auto">
        <Logo />
        <Navigation toggleMobileNav={toggleMobileNav} />
      </div>
    </header>
  );
}

export default Header;
