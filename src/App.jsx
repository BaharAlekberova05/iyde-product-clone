import React from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./components/Home";
import { ContextProvider } from "./contexts/dataContext";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </ContextProvider>
  );
};

export default App;
