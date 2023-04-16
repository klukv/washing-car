import React from "react";

import "../scss/TimePicker.scss";
import { hourArray } from "../utils/const";

const TimePicker: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = React.useState<boolean>(false);
  const [selectHour, setSelectHour] = React.useState<string>("08");

  const handleActive = () => {
    setActiveDropdown(!activeDropdown);
  };
  const handleSelectTime = (selectHour: string) => {
    setSelectHour(selectHour);
  };

  return (
    <div className="time-picker">
      <div className="time-picker__inner">
        <div className="time-picker__hours">{selectHour}</div>
        <span className="time-picker__points">:</span>
        <div className="time-picker__minutes">00</div>
        <button className="time-picker__btn" onClick={handleActive}></button>
      </div>
      <div className={activeDropdown ? "dropdown dropdown_active" : "dropdown"}>
        <ul className="dropdown__list">
          {hourArray.map((hour) => (
            <li
              key={hour.id}
              className="dropdown__point-hour"
              onClick={() => handleSelectTime(hour.hour)}
            >
              {hour.hour}:00
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimePicker;
