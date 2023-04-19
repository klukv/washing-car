import React from "react";
import { recordPage } from "../utils/const";

import "../scss/Stocks.scss";
import stocks_image from "../assets/img/stocks/stocks.jpg";
import { useDispatch } from "react-redux";
import { setService } from "../redux/slices/serviceSlice";
import { useNavigate } from "react-router-dom";

const Stocks: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stock = {
    id: 0,
    nameService: "Бесплатное техническое обслуживание",
    duration: "1",
    price: "0"
  }

  const addStockRecord = () => {
    dispatch(setService(stock));
    navigate(recordPage);
  }

  return (
    <main className="stocks">
      <div className="container">
        <div className="stocks__card">
          <div className="stocks__card-image">
            <img src={stocks_image} alt="image_stock" />
          </div>
          <div className="stocks__card-info">
            <p className="stocks__card-text">
              Бесплатное ТО в Грязи.нет Успейте записаться на бесплатное
              техническое обслуживание в Грязи.нет
            </p>
            <button className="stocks__card-btn" onClick={addStockRecord}>
              Записаться
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stocks;
