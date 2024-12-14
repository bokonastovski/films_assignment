import React from "react";
import FilmsList from "./components/FilmsList";
import Footer from "./components/Footer";
import { LanguageProvider } from "./LanguageContext";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <FilmsList />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
