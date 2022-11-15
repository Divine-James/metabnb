import React from "react";
import "./adventure.css";

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
  },
];

const Adventure = () => {
  return (
    <section className="container adventure">
      <h1 className="red-rose-font text-center">
        Inspiration for your next adventure
      </h1>
      <div className="data-img img-grid-items-4">
        {data.map((item) => (
          <div className="data-img-grid-item" key={item.id}>
            <div className="position">
              <img src={item.love} alt="love" className="love-image" />

              <img src={item.img} alt={item.name} className="adventure-img" />
            </div>

            <div className="data-img-grid-item-desc width-full space-up-down text-dark">
              <div className="item-flex items-center justify-between">
                <h3 className="adventure-data-title red-rose-font">
                  {item.name}
                </h3>
                <p className="adventure-data-desc">{item.desc}</p>
              </div>
              <div className="adventure-duration-item item-flex items-center justify-between">
                <p>{item.distance}</p>
                <p>{item.duration}</p>
              </div>
              <div className="adventure-data-img-rating">
                <img src={item.rating} alt="rating" className="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Adventure;
