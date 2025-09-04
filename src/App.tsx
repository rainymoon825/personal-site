import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import PokemonSampleSets from "./Pages/Pokemon/Sample Sets";
import PokemonConstructionArticles from "./Pages/Pokemon/ConstructionArticles";
import Pokemon구축기사 from "./Pages/Pokemon/구축기사";
import PokemonTranslations from "./Pages/Pokemon/Translations";
import PokemonTheory from "./Pages/Pokemon/Theory";
import PokemonNotes from "./Pages/Pokemon/Notes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/theory" element={<PokemonTheory />} />
          <Route path="/pokemon/samplesets" element={<PokemonSampleSets />} />
          <Route path="/pokemon/constructionarticles" element={<PokemonConstructionArticles />} />
          <Route path="/pokemon/구축기사" element={<Pokemon구축기사 />} />
          <Route path="/pokemon/translations" element={<PokemonTranslations />} />
          <Route path="/pokemon/notes" element={<PokemonNotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
