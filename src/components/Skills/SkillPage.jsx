import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { TbBrandRedux, TbBrandNextjs } from "react-icons/tb";

const SkillPage = () => {
  const skillsAnimation = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(50px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
    config: {
      mass: 1,
      tension: 120,
      friction: 14,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-300 p-4 md:p-8 lg:p-16">
      <animated.div
        style={skillsAnimation}
        className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold text-black"
      >
        Skills
      </animated.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-screen-xl w-full">
        <SkillCard
          icon={<FaHtml5 />}
          title="HTML5"
          colorClass="text-orange-500"
          data="90%"
        />
        <SkillCard
          icon={<FaCss3 />}
          title="CSS3"
          colorClass="text-blue-500"
          data="80%"
        />
        <SkillCard
          icon={<FaJs />}
          title="JavaScript"
          colorClass="text-yellow-500"
          data="75%"
        />
        <SkillCard
          icon={<FaReact />}
          title="React"
          colorClass="text-blue-500"
          data="75%"
        />
        <SkillCard
          icon={<TbBrandNextjs />}
          title="Nextjs"
          colorClass="text-black-800"
          data="50%"
        />
        <SkillCard
          icon={<TbBrandRedux />}
          title="Redux Toolkit"
          colorClass="text-blue-800"
          data="75%"
        />
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, colorClass, data }) => {
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadPercentage((prevPercentage) =>
        prevPercentage < parseInt(data, 10)
          ? prevPercentage + 1
          : prevPercentage
      );
    }, 10);

    return () => clearInterval(interval);
  }, [data]);

  const loaderAnimation = useSpring({
    width: loading ? `${loadPercentage}%` : "100%",
    from: { width: "0%" },
  });

  return (
    <div
      className={`p-4 rounded-md shadow-md text-center text-black cursor-pointer ${colorClass} `}
    >
      {icon}
      <p className="mt-2 text-lg md:text-xl lg:text-2xl font-semibold">
        {title}
      </p>
      {loading && (
        <div className="bg-blue-500 h-2 mt-2 rounded-md overflow-hidden">
          <animated.div
            style={loaderAnimation}
            className="h-full bg-green-500"
          ></animated.div>
        </div>
      )}
      <p className="mt-2 text-lg md:text-xl lg:text-2xl font-semibold">
        {data}
      </p>
    </div>
  );
};

export default SkillPage;
