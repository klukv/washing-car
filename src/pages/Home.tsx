import React from "react";

import "../scss/Home.scss"
import main_car from "../assets/img/home/main_car.jpg";
import about from "../assets/img/home/about.jpg";

const Home:React.FC = () => {
  return (
    <main className="home">
      <div className="container">
        <section className="information">
          <div className="information__text">
            <h1 className="information__text-title">
              Сеть автомоек "Грязи.нет" Орел
            </h1>
            <p className="information__text-info">
              Предоставляем услуги профессионального ухода за вашим автомобилем
            </p>
          </div>
          <div className="information__image">
            <img src={main_car} alt="car" />
          </div>
        </section>
        <section className="about">
          <h2 className="about__title">О нас</h2>
          <p className="about__text">
            Грязи.нет - круглосуточный авто детейлинг в Орле. Мы рады предложить
            широкий спектр услуг по обслуживанию Вашего автомобиля: мойка,
            чистка, удаления запахов из салона, заправка кондиционеров.
          </p>
          <div className="about__image">
            <img src={about} alt="about" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
