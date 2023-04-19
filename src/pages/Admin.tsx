import React from "react";
import { deleteRecord, getAllRecords } from "../services/main";
import { useDispatch, useSelector } from "react-redux";
import { selectAllRecords } from "../redux/selectors";
import { setAllServices } from "../redux/slices/serviceSlice";
import { initialMessageData } from "../utils/const";
import { TMessageData } from "../utils/types";

import close_btn from "../assets/img/admin/close__error.svg";
import "../scss/Admin.scss";

const Admin: React.FC = () => {
  const dispatch = useDispatch();
  const [dataMessage, setDataMessage] =
    React.useState<TMessageData>(initialMessageData);
  const [isChangeRecords, setChangeRecords] = React.useState<boolean>(true);
  const allRecords = useSelector(selectAllRecords);

  const closeMessage = () => {
    setDataMessage((prevState) => {
      return {
        ...prevState,
        message: "",
        isError: false,
      };
    });
  };

  const deleteSelectRecord = (id: number) => {
    deleteRecord(id)
      .then((data) => setChangeRecords(true))
      .catch((error) =>
        setDataMessage((prevState) => {
          return {
            ...prevState,
            message: error.message,
            isError: true,
          };
        })
      );
  };

  React.useEffect(() => {
    if (isChangeRecords) {
      getAllRecords().then((data) => dispatch(setAllServices(data)));
      setChangeRecords(false);
    }
  }, [isChangeRecords, dispatch]);

  return (
    <main className="admin">
      <div className="container">
        <div className="admin__inner">
          <div className="admin__first-row">
            <div className="user up__row">Клиент</div>
            <div className="service__title admin__title up__row">
              Тип услуги
            </div>
            <div className="time__title up__row">Время</div>
            <div className="date__title up__row">Дата</div>
          </div>
          {allRecords &&
            allRecords.map((record) => (
              <div key={`${record.id}_empty_div`} className="admin__row-table">
                <div className="user__cell flex-item first-cell">
                  <div className="user__name">{record.userDto.username}</div>
                  <div className="user__tel">
                    Тел: {record.userDto.numberMobile}
                  </div>
                </div>
                <div
                  key={`${record.id}_service`}
                  className="admin__cell-service flex-item first-cell"
                >
                  <div className="admin__cell-title">{record.service}</div>
                </div>
                <div
                  key={`${record.id}_time`}
                  className="admin__cell-time flex-item first-cell"
                >
                  {record.startTime} - {record.endTime} ч.
                </div>
                <div className="admin__cell-date flex-item first-cell">
                  {record.date}
                </div>
                <div
                  key={`${record.id}_button`}
                  className="admin__cell-btn flex-item first-cell"
                >
                  <button
                    className="admin__btn"
                    onClick={() => deleteSelectRecord(record.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          {dataMessage.isError && (
            <div className="error__message">
              <div className="error__message__inner">
                <div className="error__message-header">
                  <h2 className="error__message-title">Ошибка</h2>
                  <span className="error__message-close" onClick={closeMessage}>
                    <img src={close_btn} alt="close" />
                  </span>
                </div>
                <div className="error__message-content">
                  {dataMessage.message}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Admin;
