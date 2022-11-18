import React, { useState, useEffect } from "react";
import axios from "axios";

const KEY = "GOOGLEAPIS_ACCESS_TOKEN";

const Convert = ({ language, text }) => {
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    doTranslation(text, language.value);
  }, [language, text]);

  function doTranslation(text, value) {
    if (!text || !value) {
      setTranslation("");
    } else {
      axios
        .post(
          "https://translation.googleapis.com/language/translate/v2",
          {},
          {
            params: {
              q: text,
              target: value,
              format: "text",
              key: KEY,
            },
          }
        )
        .then(({ data }) => {
          setTranslation(data.data.translations[0].translatedText);
        });
    }
  }

  return (
    <div>
      <h1 className="ui header">{translation}</h1>
    </div>
  );
};

export default Convert;
