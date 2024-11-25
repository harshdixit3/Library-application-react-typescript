import { Container } from "react-bootstrap";
import Navigation from "./Navigation/Navigtion";
import HomePage from "./Navigation/Pages/page";
import LibraryListPage from "./Navigation/Pages/libraies/page";
import { Route, Routes } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navigation />

      <Container className="my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/libraries" element={<LibraryListPage />} />
        </Routes>
      </Container>
    </div>
  );
};

export default Menu;
