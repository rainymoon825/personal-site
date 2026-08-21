import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DetailPage from "./Pages/DetailPage";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects/:detailId" element={<DetailPage />} />
          <Route path="experience/:detailId" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
