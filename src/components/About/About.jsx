import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="ml-[10rem]">
      <div className="text-center pb-30">
        <h2 className="text-2xl font-bold uppercase mb-5 pb-5 relative text-gray-700">
          About
        </h2>
        <p className="mt-6 text-gray-600 mr-[5rem] ">
          Hello, my name is Roshan Kumar Yadav. I completed my BCA in 2021 from
          Vikrant Group of Institutions, which is affiliated with Jiwaji
          University. After that, I joined a BPO job at Jio. During that time, I
          realized that I wasn't finding fulfillment in my work and decided to
          consider a change in my career path.
        </p>
      </div>
      <div className="flex items-center gap-x-6 mt-5">
        <div className="flex-shrink-0 w-1/3">
          <img
            src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/profile-img.jpg"
            alt="image"
          />
        </div>
        <div className="">
          <h3 className="font-bold text-2xl text-gray-600 mb-2">
            Frontend Engineer
          </h3>
          <p className="font-bold text-sm text-gray-700">
            Hello, my name is Roshan Kumar Yadav. I completed my BCA in 2021
            from Vikrant Group of Institutions, which is affiliated with Jiwaji
            University. After that, I joined a BPO job at Jio. During that time,
            I realized that I wasn't finding fulfillment in my work and decided
            to consider a change in my career path.
          </p>
          <div className="flex flex-wrap gap-x-6 mt-0 -mx-3">
            <div className="flex-shrink-0 w-1/2">
              <ul className="list-none p-0">
                <li className="mb-5 flex items-center">
                  <FaArrowRight className="text-blue-600 text-sm mr-1 leading-3" />
                  <strong className="mr-5">Graduation:</strong>
                  <span>BCA</span>
                </li>
                <li className="mb-5 flex items-center">
                  <FaArrowRight className="text-blue-600 text-sm mr-1 leading-3" />
                  <strong className="mr-5">Graduation:</strong>
                  <span>BCA</span>
                </li>
                <li className="mb-5 flex items-center">
                  <FaArrowRight className="text-blue-600 text-sm mr-1 leading-3" />
                  <strong className="mr-5">Graduation:</strong>
                  <span>BCA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
