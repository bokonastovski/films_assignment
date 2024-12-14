import React from "react";
import { useLanguage } from "../LanguageContext";
import { Button } from "antd";

const Footer: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  return (
    <footer>
      <Button
        type="primary"
        onClick={toggleLanguage}
        className="pink-bg-color dark-blue-color"
      >
        Switch to {language === "en" ? "German" : "English"}
      </Button>
    </footer>
  );
};

export default Footer;
