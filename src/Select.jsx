import React, { useState } from "react";

const Select = ({ selected, setSelected, options, removeItem }) => {
  const closeModal = (e) => {
    setIsActive(!isActive);
  };
  const [isActive, setIsActive] = useState(false);
  const defaultValue = "Choose";
  return (
    <div className="select">
      {selected.length ? (
        <>
          <div className="select-btn" onClick={(e) => closeModal(e)}>
            {selected.map((element) => (
              <div className="selected-option_container" key={element}>
                <div className="selected-option">
                  <p>{element}</p>
                  <p className="close-icon" onClick={() => removeItem(element)}>
                    &#10006;
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="triangle-bottom sticked"></div>
        </>
      ) : (
        <div className="select-btn" onClick={(e) => closeModal(e)}>
          <div className="select-container">
            <div>{defaultValue}</div>
            <div
              className="triangle-bottom"
              onClick={() => setIsActive(!isActive)}
            ></div>
          </div>
        </div>
      )}

      {isActive && (
        <div className="select-content">
          {options.map((option) => (
            <div
              key={option.name}
              onClick={() => {
                if (!selected.find((element) => element === option.name)) {
                  setSelected([...selected, option.name]);
                  setIsActive(false);
                }
              }}
              className="select-item"
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
