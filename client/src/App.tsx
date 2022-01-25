import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import IndexPage from "./pages";
import RepositoryDetailsPage from "./pages/details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:repository" element={<RepositoryDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
