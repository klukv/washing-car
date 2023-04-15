import React from "react";

import "../scss/Catalog.scss";

const Catalog: React.FC = () => {
  return (
    <main className="catalog">
      <div className="container">
        <div className="catalog__grid">
          <div className="service__title catalog__title up__row">
            Тип услуги
          </div>
          <div className="price__title up__row">Цена</div>
          <div className="time__title catalog__title up__row">Время</div>
          <div className="empty up__row"></div>
          <div className="catalog__cell-service grid-item first-cell">
            <div className="catalog__cell-title">
              Трёх фазная комплексная мойка
            </div>
            <div className="catalog__cell-description">
              Мойка кузова, ручная мойка кислотным составом, нано-воск, мойка
              ковриков,стёкол, протирание, влажная уборка салона
            </div>
          </div>
          <div className="catalog__cell-price grid-item first-cell">1500 р</div>
          <div className="catalog__cell-time grid-item first-cell">4 часа</div>
          <div className="catalog__cell-btn grid-item first-cell">
            <button className="catalog__btn">Заказать</button>
          </div>
          <div className="catalog__cell-service grid-item first-cell">
            <div className="catalog__cell-title">
              Двух фазная комплексная мойка
            </div>
            <div className="catalog__cell-description">
              Мойка кузова, ручная нано-мойка, мойка ковриков, стёкол,
              протирание, влажная уборка салона и пылесос
            </div>
          </div>
          <div className="catalog__cell-price grid-item first-cell">1200 р</div>
          <div className="catalog__cell-time grid-item first-cell">3 часа</div>
          <div className="catalog__cell-btn grid-item first-cell">
            <button className="catalog__btn">Заказать</button>
          </div>
          <div className="catalog__cell-service grid-item first-cell">
            <div className="catalog__cell-title">Комплексная мойка</div>
            <div className="catalog__cell-description">
              Мойка кузова, ковриков, стёкол, протирание, влажная уборка салона
              и пылесос
            </div>
          </div>
          <div className="catalog__cell-price grid-item first-cell">1000 р</div>
          <div className="catalog__cell-time grid-item first-cell">3 часа</div>
          <div className="catalog__cell-btn grid-item first-cell">
            <button className="catalog__btn">Заказать</button>
          </div>
          <div className="catalog__cell-service grid-item first-cell">
            <div className="catalog__cell-title">Трех фазная мойка кузова</div>
            <div className="catalog__cell-description">
              Мойка кузова, ручная мойка с кислотным составом, нано-воск,
              протирание
            </div>
          </div>
          <div className="catalog__cell-price grid-item first-cell">1000 р</div>
          <div className="catalog__cell-time grid-item first-cell">2 часа</div>
          <div className="catalog__cell-btn grid-item first-cell">
            <button className="catalog__btn">Заказать</button>
          </div>
          <div className="catalog__cell-service grid-item first-cell">
            <div className="catalog__cell-title">Двух фазная мойка кузова</div>
            <div className="catalog__cell-description">
              Мойка кузова, ручная нано-мойка, протирание
            </div>
          </div>
          <div className="catalog__cell-price grid-item first-cell">800 р</div>
          <div className="catalog__cell-time grid-item first-cell">2 часа</div>
          <div className="catalog__cell-btn grid-item first-cell">
            <button className="catalog__btn">Заказать</button>
          </div>
          <div className="catalog__cell-service grid-item first-cell">
            <div className="catalog__cell-title">
            Мойка кузова
            </div>
            <div className="catalog__cell-description">
            Мойка кузова с шампунем, протирание
            </div>
          </div>
          <div className="catalog__cell-price grid-item first-cell">700 р</div>
          <div className="catalog__cell-time grid-item first-cell">1 час</div>
          <div className="catalog__cell-btn grid-item first-cell">
            <button className="catalog__btn">Заказать</button>
          </div>
          <div className="catalog__cell-service grid-item first-cell">
            <div className="catalog__cell-title">
            Техническая мойка
            </div>
            <div className="catalog__cell-description">
            Мойка кузова с шампунем, без протирания
            </div>
          </div>
          <div className="catalog__cell-price grid-item first-cell">600 р</div>
          <div className="catalog__cell-time grid-item first-cell">1 час</div>
          <div className="catalog__cell-btn grid-item first-cell">
            <button className="catalog__btn">Заказать</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
