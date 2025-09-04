import React from "react";
import DropDown from "./DropDown";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface LayoutProps {}
function Layout({}: LayoutProps) {
  const pokemonItems = [
    { label: "Theory", path: "/pokemon/theory" },
    { label: "Sample Sets", path: "/pokemon/samplesets" },
    { label: "Construction Articles", path: "/pokemon/constructionarticles" },
    { label: "구축기사", path: "/pokemon/구축기사" },
    { label: "Translations", path: "/pokemon/translations" },
    { label: "Notes", path: "/pokemon/notes" },
  ];

  const poemsItems = [
    { label: "Analysis", path: "/poem/analysis" },
    { label: "My Works", path: "/pokemon/myworks" },
  ];

  const moviesItems = [{ label: "Reviews", path: "/movies/reviews" }];

  const booksItems = [{ label: "Reviews", path: "/books/reviews" }];

  const navigate = useNavigate();

  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <div className="d-flex">
          <div className="flex-fill">
            <DropDown
              label="Pokemon"
              items={pokemonItems}
              onSelect={(item) => navigate(item.path)}
            />
          </div>
          <div className="flex-fill">
            <DropDown
              label="Poems"
              items={poemsItems}
              onSelect={(item) => navigate(item.path)}
            />
          </div>
          <div className="flex-fill">
            <DropDown
              label="Movies"
              items={moviesItems}
              onSelect={(item) => navigate(item.path)}
            />
          </div>
          <div className="flex-fill">
            <DropDown
              label="Books"
              items={booksItems}
              onSelect={(item) => navigate(item.path)}
            />
          </div>
        </div>
      </div>

      <Outlet />

      <div className="d-block w-100 p-3 mb-10 bg-dark text-white text-center">
        Contact: benjamink0935@gmail.com <br />
        Check out my other projects: <a href="#">GitHub</a>
      </div>
    </>
  );
}

export default Layout;
