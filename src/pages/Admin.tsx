import React from "react";
import { getAllRecords } from "../services/main";
import { useDispatch, useSelector } from "react-redux";
import { selectAllRecords } from "../redux/selectors";
import { setAllServices } from "../redux/slices/serviceSlice";

import "../scss/Admin.scss";

const Admin: React.FC = () => {
  const dispatch = useDispatch();
  const allRecords = useSelector(selectAllRecords);

  React.useEffect(() => {
    getAllRecords().then((data) => dispatch(setAllServices(data)));
  }, [allRecords, dispatch]);

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
                  <div className="user__tel">Тел: {record.userDto.numberMobile}</div>
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
                <div className="admin__cell-date flex-item first-cell">{record.date}</div>
                <div
                  key={`${record.id}_button`}
                  className="admin__cell-btn flex-item first-cell"
                >
                  <button className="admin__btn">Удалить</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Admin;
