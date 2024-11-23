import { Container } from "react-bootstrap";
import Navigation from "./Navigation/Navigtion";
import HomePage from "./Navigation/Pages/page";

const Menu = () => {
  return <div>
    <Navigation />

    <Container className="my-4">
      <HomePage />
      </Container>
    
  </div>
};

export default Menu;
