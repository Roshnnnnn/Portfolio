// App.js

import Carousel from "./Carousel";

const ProductCarousel = () => {
  const slides = [
    { image: "https://placekitten.com/800/400" },
    { image: "https://placekitten.com/800/401" },
    { image: "https://placekitten.com/800/402" },
    // Add more slides as needed
  ];

  return (
    <div className="App">
      <h1>React Carousel with Tailwind CSS</h1>
      <Carousel slides={slides} />
    </div>
  );
};

export default ProductCarousel;
