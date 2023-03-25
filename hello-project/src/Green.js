import { useTranslation } from "react-i18next";
import Modal from "./ToDo list/Modal";
function Green() {
  // const { t } = useTranslation();
  const { t, i18n } = useTranslation();

  const handleChangeLaguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleChangeLaguage("eng")}>Eng</button>
      <button onClick={() => handleChangeLaguage("korean")}>Korean</button>
      {/* <h1>
       welcome
      </h1> */}

    </div>
  );
}

export default Green;
