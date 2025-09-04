import Alert from "../components/Alert";
import ListGroup from "../components/ListGroup";
import "../App.css";
import Me from "../assets/Me.jpg";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  let items = ["New York", "San Fransisco", "Paris"];

  const handleSelectItem = (item: String, instance: Number, index: Number) => {
    console.log(item, instance, index);
  };

  return (
    <>
      <Card
        title="About Me"
        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        imgSrc={Me}
      />

      <ListGroup
        items={items}
        heading={"Cities"}
        instance={1}
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={items}
        heading={"Bad cities"}
        instance={2}
        onSelectItem={handleSelectItem}
      />
      <Alert children={["Hello", <span> World </span>]} />
    </>
  );
}

export default Home;
