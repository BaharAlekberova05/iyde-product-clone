import React from "react";
import Navbar from "./layouts/Navbar";
import Home from "./components/Home";
import { ContextProvider } from "./contexts/DataContext";

const App = () => {
  return (
    <ContextProvider>
      <Navbar />
      <Home />
    </ContextProvider>
  );
};

export default App;
