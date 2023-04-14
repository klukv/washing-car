import React from "react";

import "../scss/Catalog.scss";

const Catalog: React.FC = () => {
  return (
    <main className="catalog">
      <div className="container">
        <div className="catalog__grid">
          <div className="service__title catalog__title up__row">Тип услуги</div>
          <div className="price__title up__row">Цена</div>
          <div className="time__title catalog__title up__row">Время</div>
          <div className="empty up__row"></div>
          <div className="catalog__cell-service">
            <div className="catalog__cell-title">
              Трёх фазная комплексная мойка
            </div>
            <div className="catalog__cell-description">
              Мойка кузова, ручная мойка кислотным составом, нано-воск, мойка
              ковриков,стёкол, протирание, влажная уборка салона
            </div>
          </div>
          <div className="catalog__cell-price">1500 р</div>
          <div className="catalog__cell-time">4 часа</div>
          <div className="catalog__cell-btn">
            <button className="catalog__btn">Заказать</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
