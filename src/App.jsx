import React from "react";
import Container from "./layout/Container.jsx";
import Hero from "./components/Hero.jsx";
import Main from "./components/Main.jsx";

const App = () => {
  return (
    <Container>
      <Hero />
      <Main />
    </Container>
  );
};

export default App;
