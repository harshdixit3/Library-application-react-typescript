import { Container } from "react-bootstrap";
import Navigation from "./Navigation/Navigtion";
import HomePage from "../Pages/page";
import LibraryListPage from "../Pages/libraies/page";
import { Route, Routes } from "react-router-dom";
import LibraryDetailsPage from "../Pages/libraies/[id]/page";
import AboutPage from "../Pages/about/AboutPage";

const Menu = () => {
  return (
    <div>
      <Navigation />

      <Container className="my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/libraries" element={<LibraryListPage />} />
          <Route path="/libraries/:id" element={<LibraryDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </div>
  );
};

export default Menu;
