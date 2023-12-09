const Portfolio = () => {
  const work = [
    { name: "Project1" },
    { name: "Project2" },
    { name: "project3" },
  ];

  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60">
      <h1 className="text-2xl font-bold mb-6 sm:mb-10">Projects</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {work.map((works, index) => (
          <div
            key={index}
            className={`h-40 lg:h-56 xl:h-72 bg-black text-yellow-50 p-4 ${
              index === work.length - 1 ? "lg:col-span-2 xl:col-span-2" : ""
            }`}
          >
            {works.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
