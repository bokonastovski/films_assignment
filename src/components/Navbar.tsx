import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div>
      <h1 className="pink-color">{t.title}</h1>
    </div>
  );
};

export default Navbar;
