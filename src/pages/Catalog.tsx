import React from "react";

import "../scss/Catalog.scss";
import { recordPage, services } from "../utils/const";
import { useDispatch } from "react-redux";
import { setService } from "../redux/slices/serviceSlice";
import { useNavigate } from "react-router-dom";

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewService = (
    id: number,
    service: string,
    duration: string,
    price: string
  ) => {
    dispatch(setService({ id, nameService: service, duration, price }));
    navigate(recordPage);
  };

  return (
    <main className="catalog">
      <div className="container">
        <div className="catalog__inner">
          <div className="catalog__first-row">
            <div className="service__title catalog__title up__row">
              Тип услуги
            </div>
            <div className="price__title up__row">Цена</div>
            <div className="time__title up__row">Время</div>
          </div>
          {services.map((service) => (
            <div key={`${service.id}_empty_div`} className="catalog__row-table">
              <div
                key={`${service.id}_service`}
                className="catalog__cell-service flex-item first-cell"
              >
                <div className="catalog__cell-title">{service.nameService}</div>
                <div className="catalog__cell-description">
                  {service.descriptionService}
                </div>
              </div>
              <div
                key={`${service.id}_price`}
                className="catalog__cell-price flex-item first-cell"
              >
                {service.price} р
              </div>
              <div
                key={`${service.id}_time`}
                className="catalog__cell-time flex-item first-cell"
              >
                {service.time} часа
              </div>
              <div
                key={`${service.id}_button`}
                className="catalog__cell-btn flex-item first-cell"
              >
                <button
                  className="catalog__btn"
                  onClick={() =>
                    handleNewService(service.id, service.nameService, service.time.toString(), service.price.toString())
                  }
                >
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Catalog;
