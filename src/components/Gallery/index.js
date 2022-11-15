import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = ({ data }) => {
  return (
    <div className="data-img img-grid-items-4">
      {data.map((item) => (
        <div className="data-img-grid-item" key={item.id}>
          <div className="position">
            <div>
              <img src={item.love} alt="love" className="love-image" />
            </div>
            <LazyLoadImage
              key={item.id}
              src={item.img}
              alt={item.name}
              effect="blur"
              placeholderSrc={item.img}
              className="adventure-img"
            />
          </div>

          <div className="data-img-grid-item-desc width-full space-up-down text-dark">
            <div className="item-flex items-center justify-between">
              <h3 className="inspiration-data-title red-rose-font">
                {item.name}
              </h3>
              <p className="inspiration-data-desc">{item.desc}</p>
            </div>
            <div className="inspiration-duration-item item-flex items-center justify-between">
              <p>{item.distance}</p>
              <p>{item.duration}</p>
            </div>
            <div className="inspiration-data-img-rating">
              <img src={item.rating} alt="rating" className="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
