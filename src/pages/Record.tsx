import React from "react";
import Calendar from "react-calendar";
import TimePicker from "../components/TimePicker";

import "../scss/Record.scss";

const Record: React.FC = () => {



  return (
    <main className="record">
      <div className="container">
        <div className="record__inner">
          <div className="record__calendar">
            <Calendar />
          </div>
          <div className="record__date">
            <div className="record__date-inner">
              <h2 className="record__date-title">Выберите время:</h2>
              <div className="record__date-time">
                <TimePicker/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Record;
