import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DetalhesProduto from "./pages/DetalhesProduto";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/produto/:id"
          element={<DetalhesProduto />}
        />

      </Routes>

    </BrowserRouter>
  );
}