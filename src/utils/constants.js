export const weatherTypes = [
  {
    day: true,
    condition: "Clouds",
    url: new URL("../images/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Clouds",
    url: new URL("../images/cloudyNight.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Fog",
    url: new URL("../images/fog.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Fog",
    url: new URL("../images/fogNight.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Rain",
    url: new URL("../images/rain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Rain",
    url: new URL("../images/rainNight.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Snow",
    url: new URL("../images/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Snow",
    url: new URL("../images/snowNight.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Thunderstorm",
    url: new URL("../images/storm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Thunderstorm",
    url: new URL("../images/stormNight.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Clear",
    url: new URL("../images/sunny.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Clear",
    url: new URL("../images/sunnyNight.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Smoke",
    url: new URL("../images/fog.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Smoke",
    url: new URL("../images/fogNight.png", import.meta.url).href,
  },
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const location = {
  latitude: 40.6677,
  longitude: -111.9388,
};

export const apiKey = "c207abd2a8d8de670dc53a15b531d2df";