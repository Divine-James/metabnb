import React from "react";
import Gallery from "../Gallery";

//datas
const data = [
  {
    id: 1,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king1.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 2,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king2.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 3,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king3.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 4,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king4.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 5,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king5.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 6,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king6.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 7,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king7.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 8,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king8.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 9,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king9.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 10,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king10.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 11,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king11.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 12,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king12.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 13,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king13.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 14,
    name: "Desert King",
    img: "assets/img/desert-king14.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 15,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king15.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 16,
    name: "Desert King",
    love: "assets/img/vector.png",
    img: "assets/img/desert-king16.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
];

const Imgs = () => {
  return (
    <div className="container space-top">
      <Gallery data={data} />
    </div>
  );
};

export default Imgs;
