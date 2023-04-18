export const homePage = "/";
export const stocksPage = "/stocks";
export const recordPage = "/record";
export const catalogPage = "/catalog";

export const loginPage = "/signin";
export const registrationPage = "/signup";

export const API_URL = "http://localhost:8080/";
export const API_URL_LOGIN = "api/auth/signin";
export const API_URL_REGISTER = "api/auth/signup";
export const API_URL_RECORD_DATE = "recordsTime";
export const API_URL_POST_RECORD = "records";

export const initialMessageData = {
  message: "",
  isError: false
}; 

export const services = [
  {
    id: 1,
    nameService: "Трёхфазная комплексная мойка",
    descriptionService:
      "Мойка кузова, ручная мойка кислотным составом, нано-воск, мойка ковриков,стёкол, протирание, влажная уборка салона",
    price: 1500,
    time: 4,
  },
  {
    id: 2,
    nameService: "Двухфазная комплексная мойка",
    descriptionService:
      "Мойка кузова, ручная нано-мойка, мойка ковриков, стёкол, протирание, влажная уборка салона и пылесос",
    price: 1000,
    time: 3,
  },
  {
    id: 3,
    nameService: "Комплексная мойка",
    descriptionService:
      "Мойка кузова, ковриков, стёкол, протирание, влажная уборка салона и пылесос",
    price: 1000,
    time: 3,
  },
  {
    id: 4,
    nameService: "Трехфазная мойка кузова",
    descriptionService:
      "Мойка кузова, ручная мойка с кислотным составом, нано-воск, протирание",
    price: 1000,
    time: 2,
  },
  {
    id: 5,
    nameService: "Двухфазная мойка кузова",
    descriptionService: "Мойка кузова, ручная нано-мойка, протирание",
    price: 800,
    time: 2,
  },
  {
    id: 6,
    nameService: "Мойка кузова",
    descriptionService: "Мойка кузова с шампунем, протирание",
    price: 700,
    time: 1,
  },
  {
    id: 7,
    nameService: "Техническая мойка",
    descriptionService: "Мойка кузова с шампунем, без протирания",
    price: 600,
    time: 1,
  },
];
