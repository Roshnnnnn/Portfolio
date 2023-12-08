import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="md:ml-4 lg:ml-[6rem] lg:mr-2">
      <div className="text-center pb-8 lg:pb-30">
        <h2 className="text-xl lg:text-2xl font-bold uppercase mb-2 lg:mb-5 pb-2 lg:pb-5 relative text-gray-700">
          About
        </h2>
        <p className="lg:mt-6 text-gray-600">
          Hello, my name is Roshan Kumar Yadav. I completed my BCA in 2021 from
          Vikrant Group of Institutions, which is affiliated with Jiwaji
          University. After that, I joined a BPO job at Jio. During that time, I
          realized that I wasn't finding fulfillment in my work and decided to
          consider a change in my career path.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-y-0 lg:gap-x-6 mt-5">
        <div className="flex-shrink-0 w-full md:w-1/3 hidden lg:block">
          <img
            className="h-[32rem] md:h-auto md:w-full object-cover"
            src="https://bootstrapmade.com/demo/templates/MyResume/assets/img/profile-img.jpg"
            alt="image"
          />
        </div>
        <div className="mb-6 lg:mb-0 w-full lg:w-2/3">
          <h3 className="font-bold text-center text-xl lg:text-2xl text-gray-600 mb-2 mt-6 lg:mt-10">
            Frontend Engineer
          </h3>
          <p className="font-bold text-sm text-gray-700 text-center lg:text-left mx-4 lg:mx-8">
            Hello, my name is Roshan Kumar Yadav. I completed my BCA in 2021
            from Vikrant Group of Institutions, which is affiliated with Jiwaji
            University. After that, I joined a BPO job at Jio. During that time,
            I realized that I wasn't finding fulfillment in my work and decided
            to consider a change in my career path.
          </p>
          <div className="flex flex-col lg:flex-row mx-[2rem] my-[2rem] md:justify-center">
            <div className="flex w-1/3 md:text-center">
              <ul className="list-none w-full m-1 text-center lg:text-left">
                <li className="flex items-center mb-2">
                  <FaArrowRight className="text-blue-600 text-sm leading-3" />
                  <strong>Graduation :</strong>
                  <span>BCA</span>
                </li>
                <li className="flex items-center mb-2">
                  <FaArrowRight className="text-blue-600 text-sm leading-3" />
                  <strong>Intermediate :</strong>
                  <span>12th</span>
                </li>
                <li className="flex items-center mb-2">
                  <FaArrowRight className="text-blue-600 text-sm leading-3" />
                  <strong>High School :</strong>
                  <span>10th</span>
                </li>
              </ul>
            </div>
            <div className="flex w-full lg:w-2/3">
              <ul className="list-none m-1 text-center lg:text-left">
                <li className="flex items-center mb-2">
                  <FaArrowRight className="text-blue-600 text-sm leading-3" />
                  <strong>Email :</strong>
                  <span className="">roshankumar02.</span>
                  <span className="">yadav@gmail.com</span>
                </li>
                <li className="flex items-center mb-2">
                  <FaArrowRight className="text-blue-600 text-sm leading-3" />
                  <strong>Mobile :</strong>
                  <span>+91 9893018968</span>
                </li>
                <li className="flex items-center mb-2">
                  <FaArrowRight className="text-blue-600 text-sm leading-3" />
                  <strong>City :</strong>
                  <span>Gwalior</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-2">
            <p className="font-bold text-center text-sm text-gray-700 mx-4 lg:mx-8">
              It was at this point that I heard about web development, a field
              known for its creative aspects, which appealed to me. I decided to
              explore this avenue further and joined the Neog Camp. Here, I
              learned a variety of skills including HTML, CSS, vanilla
              JavaScript, version control, and much more. I applied these skills
              to my projects, some of which I have mentioned here.
            </p>
          </div>
          <div className="mt-2">
            <p className="font-bold text-center text-sm text-gray-700 mx-4 lg:mx-8">
              This journey allowed me to tap into my creativity and provided me
              with the opportunity to learn and grow. I'm proud of the projects
              I've worked on, and I'm excited to continue exploring new and
              exciting projects in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
