import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const outterDiv = useRef();
  const [open, setOpen] = useState(false);

  const onBodyClick = (e) => {
    if (!outterDiv.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <div className="ui form" ref={outterDiv}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={(e) => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected ? selected.label : ""}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {options.map((option) => {
              if (selected && option.value === selected.value) {
                return null;
              }

              return (
                <div
                  className="item"
                  key={option.value}
                  onClick={(e) => onSelectedChange(option)}
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
