import React from "react";

import "../scss/Stocks.scss";
import stocks_image from "../assets/img/stocks/stocks.jpg";

const Stocks: React.FC = () => {
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
            <button className="stocks__card-btn">Записаться</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stocks;