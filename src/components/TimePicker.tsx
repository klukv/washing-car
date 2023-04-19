import React from "react";

import "../scss/TimePicker.scss";
import { initialMessageData } from "../utils/const";
import { useSelector } from "react-redux";
import { selectService, selectUserID } from "../redux/selectors";
import { createRecord } from "../services/main";
import { TMessageData } from "../utils/types";

interface ITimePicker {
  time: string[];
  date: string | null;
}

const TimePicker: React.FC<ITimePicker> = ({ time, date }) => {
  const service = useSelector(selectService);
  const userID = useSelector(selectUserID);
  const [activeDropdown, setActiveDropdown] = React.useState<boolean>(false);
  const [selectHour, setSelectHour] = React.useState<string>("08");
  const [dataMessage, setDataMessage] =
    React.useState<TMessageData>(initialMessageData);
  const endTime = Number(selectHour) + Number(service.duration);

  const handleActive = () => {
    setActiveDropdown(!activeDropdown);
  };
  const handleSelectTime = (selectHour: string) => {
    setSelectHour(selectHour);
    setActiveDropdown(false);
  };

  const createNewRecord = (
    service: string,
    startTime: string,
    endTime: string,
    duration: string,
    date: string | null
  ) => {
    createRecord({ service, startTime, endTime, duration, date }, userID)
      .then((data) =>
        setDataMessage((prevState) => {
          return {
            ...prevState,
            message: data,
            isError: false,
          };
        })
      )
      .catch((error) =>
        setDataMessage((prevState) => {
          return {
            ...prevState,
            message: error.message,
            isError: true,
          };
        })
      );
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      {!dataMessage.isError && (
        <>
          {" "}
          <div className="time-picker">
            <div className="time-picker__inner">
              <div className="time-picker__hours">{selectHour}</div>
              <span className="time-picker__points">:</span>
              <div className="time-picker__minutes">00</div>
              <button
                className="time-picker__btn"
                onClick={handleActive}
              ></button>
            </div>
            <div
              className={
                activeDropdown ? "dropdown dropdown_active" : "dropdown"
              }
            >
              <ul className="dropdown__list">
                {time.map((hour, index) => (
                  <li
                    key={index}
                    className="dropdown__point-hour"
                    onClick={() => handleSelectTime(hour)}
                  >
                    {hour}:00
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            className="record__date-btn"
            onClick={() =>
              createNewRecord(
                service.nameService,
                selectHour,
                endTime.toString(),
                service.duration,
                date
              )
            }
          >
            Записаться
          </button>
        </>
      )}
      {dataMessage && (
        <h2 className="dataMessage__post">{dataMessage.message}</h2>
      )}
    </>
  );
};

export default TimePicker;
