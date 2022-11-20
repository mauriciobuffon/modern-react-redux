import React, { useState, useEffect } from "react";
import Convert from "./Convert";

import Dropdown from "./Dropdown";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
  { label: "Portuguese", value: "pt" },
  { label: "Spanish", value: "es" },
  { label: "English", value: "en" },
].sort((a, b) => a.label.localeCompare(b.label));

const Translate = () => {
  const [language, setLanguage] = useState({});
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedText(text), 750);
    return () => clearTimeout(timerId);
  }, [text]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="language">Enter text</label>
          <input
            id="language"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={debouncedText} />
    </div>
  );
};

export default Translate;
