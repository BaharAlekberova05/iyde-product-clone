import React from "react";
import Navbar from "./layouts/Navbar";
import Home from "./components/Home";
import { ContextProvider } from "./contexts/dataContext";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <Navbar />
        <Home />
      </div>
    </ContextProvider>
  );
};

export default App;
