import { useState } from "react";

const Work = () => {
  return (
    <div className="items-center justify-center min-h-screen mt-[2rem]">
      <div className="justify-center">
        <h2 className="text-center font-bold text-2xl">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-[2rem]">
        <Portfolio
          image="https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Ecommerce"
        />
        <Portfolio
          image="https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Ecommerce"
        />
      </div>
    </div>
  );
};

const Portfolio = ({ image, title }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="md:flex md:items-center lg:items-center md:ml-4 lg:ml-[6rem] lg:mr-2 lg:mt-8">
      <div className="h-full m-4 overflow-hidden">
        <div className=" p-4 flex h-full w-full">
          {/* Box 1 - Image Box */}
          <div
            className="relative flex-1 overflow-hidden"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={image}
              alt="Image"
              className={`max-w-full h-auto object-cover transition-transform ${
                hover ? "transform scale-90 blur-sm" : ""
              }`}
            />
            {hover && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm text-white">
                <div className="text-lg font-semibold mb-4 animate-bounce">
                  {title}
                </div>
                <div className="flex space-x-4 font-bold">
                  <button className="bg-black px-4 py-2 text-white rounded">
                    Github
                  </button>
                  <button className="px-4 py-2 text-black bg-white rounded">
                    Visit
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Box 2 - Text Box */}
          <div className="flex-1 m-4  p-4 text-yellow-100 justify-center">
            <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
            <ul>
              <li>text should be here</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
