import { useState } from "react";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative">
      <div className="flex transition-transform duration-500 ease-in-out">
        <div
          className="flex transition-transform ease-in-out duration-300 transform"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={item.image} alt={`slide ${index}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
        onClick={next}
      >
        →
      </button>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
        onClick={prev}
      >
        ←
      </button>
    </div>
  );
};

export default Carousel;

Carousel.js;
