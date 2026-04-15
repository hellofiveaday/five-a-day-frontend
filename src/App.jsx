import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import NuestraMetodologia from "./pages/NuestraMetodologia";
import LosODS from "./pages/LosODS";
import SobreLaAcademia from "./pages/SobreLaAcademia";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import AvisoLegal from "./pages/AvisoLegal";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="nuestra-metodologia" element={<NuestraMetodologia />} />
          <Route path="los-ods" element={<LosODS />} />
          <Route path="sobre-la-academia" element={<SobreLaAcademia />} />
          <Route path="preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="aviso-legal" element={<AvisoLegal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
