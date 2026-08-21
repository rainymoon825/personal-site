import { Link, Outlet, useLocation } from "react-router-dom";
import DigitalBackground from "./DigitalBackground";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <DigitalBackground showBrainWaves={isHomePage} />
      <nav className="section-navigation" aria-label="Page sections">
        <Link to="/#about">About Me</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/#experience">Experience</Link>
      </nav>
      <div className="site-content">
        <Outlet />
        <footer className="d-block w-100 p-3 mb-10 bg-dark text-white text-center">
          Contact: benjamink0935@gmail.com <br />
        </footer>
      </div>
    </>
  );
}

export default Layout;
