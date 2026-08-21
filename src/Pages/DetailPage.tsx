import { Link, useParams } from "react-router-dom";
import appointmentBookerImage from "../assets/Appointment Booker.png";
import burrowerImage from "../assets/Burrower.png";
import washroomFinderImage from "../assets/Washroom Finder.png";

const details: Record<
  string,
  { title: string; description: string; image?: string }
> = {
  "appointment-booker": {
    title: "Appointment Booker",
    description:
      "Appointment Booker is a web application for creating and managing client appointments. Users can create an account or sign in, then record a client's name and email, select a service, schedule start and end times, and add appointment notes. The interface keeps appointment details in one clear workspace, making it easy to book and review upcoming sessions.",
    image: appointmentBookerImage,
  },
  "washroom-finder": {
    title: "Washroom Finder",
    description:
      "This is a washroom finder app that uses Leaflet and OpenStreetMap to locate washrooms in Vancouver, which I built as a part of a hackathon. Its data is sourced from the city of Vancouver but also from users, as users can add new washroom locations that might not be listed as part of the city data.",
    image: washroomFinderImage,
  },
  burrower: {
    title: "Burrower",
    description:
      "This is a simple java game that I created as part of CPSC210(Software Construction). This project incoroprated test-driven development to ensure as little errors as possible, with 98% code coverage with tests. It features a GUI created using Java swing, and data persistence that allows the user to save/load game states. I am particularly fond of this project as although it is small, it is the first game I created.",
    image: burrowerImage,
  },
  instructor: {
    title: "Weekly Cello Instructor",
    description: "",
  },
  tutor: {
    title: "Math and Science Tutor",
    description: "",
  },
};

function DetailPage() {
  const { detailId } = useParams();
  const detail = detailId ? details[detailId] : undefined;

  if (!detail)
    return <main className="p-4">That page could not be found.</main>;

  return (
    <main className="p-4">
      <Link to="/">← Back to home</Link>
      <h1 className="mt-4">{detail.title}</h1>
      {detail.image && (
        <img
          src={detail.image}
          alt={detail.title}
          style={{
            display: "block",
            width: "100%",
            maxWidth: "700px",
            margin: "0 auto",
            borderRadius: "16px",
          }}
        />
      )}
      <p>{detail.description}</p>
    </main>
  );
}

export default DetailPage;
