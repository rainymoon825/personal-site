import ListGroup from "../components/ListGroup";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hasScrolled, setHasScrolled] = useState(false);
  const projects = ["Appointment Booker", "Washroom Finder", "Burrower"];
  const experience = ["Weekly Cello Instructor", "Math and Science Tutor"];

  const handleProjectSelect = (item: string) => {
    const routes: Record<string, string> = {
        "Appointment Booker": "/projects/appointment-booker",
        "Washroom Finder": "/projects/washroom-finder",
        "Burrower": "/projects/burrower",
      };
      navigate(routes[item]);
  };

  const handleExperienceSelect = (item: string) => {
    const routes: Record<string, string> = {
      "Weekly Cello Instructor": "/experience/instructor",
      "Math and Science Tutor": "/experience/tutor"
    };
    navigate(routes[item]);
  };

  useEffect(() => {
    const checkScrollPosition = () => setHasScrolled(window.scrollY > 30);
    window.addEventListener("scroll", checkScrollPosition, { passive: true });
    checkScrollPosition();

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  useEffect(() => {
    const sectionId = location.hash.slice(1);
    if (!sectionId) return;

    const scrollToSection = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(scrollToSection);
  }, [location.hash]);

  return (
    <>
      <section className="hero">
        <h1 style={{ fontSize: "60px" }}>
          Hi! I'm <span style={{ color: "purple"}}>Benjamin Koo</span>!
        </h1>
        <span
          className={`scroll-indicator ${hasScrolled ? "scroll-indicator-hidden" : ""}`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </section>
      <main>
        <section className="content-panel about-me" id="about">
          <h1>About Me</h1>
          <p>
            I am currently in my third year at <span style={{ color: "blue"}}>UBC</span>, studying <span style={{ color: "pink"}}>Cognitive Systems </span>
            with a focus on computational intelligence and design. I am
            particularly interested in human-computer interactions, from everyday
            GUIs to emerging brain-computer interfaces.
          </p>
          <p>
            Outside of school and projects, I play the cello, work out, and watch
            movies.
          </p>
        </section>

        <section className="content-panel" id="projects">
          <ListGroup
            items={projects}
            heading={"Projects"}
            instance={1}
            onSelectItem={handleProjectSelect}
          />
        </section>
        <section className="content-panel" id="experience">
          <ListGroup
            items={experience}
            heading={"Experience"}
            instance={2}
            onSelectItem={handleExperienceSelect}
          />
        </section>
      </main>
    </>
  );
}

export default Home;
