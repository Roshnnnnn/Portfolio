// export default function About() {
//   return (
//     <div className="py-16 bg-white">
//       <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//         <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//           <div className="md:5/12 lg:w-5/12">
//             <img
//               src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
//               alt="image"
//             />
//           </div>
//           <div className="md:7/12 lg:w-6/12">
//             <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
//               React development is carried out by passionate developers
//             </h2>
//             <p className="mt-6 text-gray-600">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
//               omnis voluptatem accusantium nemo perspiciatis delectus atque
//               autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
//               consequatur! Officiis id consequatur atque doloremque!
//             </p>
//             <p className="mt-4 text-gray-600">
//               Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
//               expedita at? Asperiores nemo possimus nesciunt dicta veniam
//               aspernatur quam mollitia.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

const About = () => {
  return (
    <div className="text-center justify-center mt-5">
      <h2 className="text-2xl font-bold uppercase relative text-gray-700 ">
        About
      </h2>
      <p className="items-center w-[65rem] ml-[10rem]">
        Hello, my name is Roshan Kumar Yadav. I completed my BCA in 2021 from
        Vikrant Group of Institutions, which is affiliated with Jiwaji
        University. After that, I joined a BPO job at Jio. During that time, I
        realized that I wasn't finding fulfillment in my work and decided to
        consider a change in my career path.
      </p>
    </div>
  );
};

export default About;
