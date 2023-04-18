import React from "react";
import dayjs from "dayjs";
import Calendar from "react-calendar";
import TimePicker from "../components/TimePicker";
import { useSelector } from "react-redux";
import { getRecordsDate } from "../services/main";
import { selectService } from "../redux/selectors";

import { TMessageData } from "../utils/types";
import { initialMessageData } from "../utils/const";

import "../scss/Record.scss";

const Record: React.FC = () => {
  const service = useSelector(selectService);
  const [selectDate, setSelectDate] = React.useState<string | null>(null);
  const [dateServices, setDateServices] = React.useState<string[] | null>(null);
  const [dataMessage, setDataMessage] = React.useState<TMessageData>(initialMessageData);

  const convertDate = (date: Date) => {
    const isSure = window.confirm("Вы уверены с выбором данной даты?");
    if (isSure) {
      const newDate = dayjs(date)
        .format("YYYY-MM-DD")
        .split("-")
        .reverse()
        .join(".");
      setSelectDate(newDate);
    }
  };

  React.useEffect(() => {
    if (selectDate !== null) {
      getRecordsDate(selectDate)
        .then((data) => {
          setDateServices(data);
          setDataMessage(initialMessageData);
        })
        .catch((err) =>
          setDataMessage((prevState) => {
            return {
              ...prevState,
              message: err.message,
              isError: true,
            };
          })
        );
    }
  }, [selectDate]);

  return (
    <main className="record">
      <div className="container">
        <h1 className="record__title">{service.nameService}</h1>
        <div className="record__inner">
          <div className="record__calendar">
            <Calendar onClickDay={(value) => convertDate(value)} />
          </div>
          {!dataMessage.isError && dateServices !== null ? (
            <div className="record__date">
              <div className="record__date-inner">
                <h2 className="record__date-title">Выберите время:</h2>
                <div className="record__date-time">
                  <TimePicker time={dateServices} date={selectDate}/>
                </div>
              </div>
            </div>
          ) : (
            <div>{dataMessage.message}</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Record;
