const Portfolio = () => {
  const work = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
  ];
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ul className="space-y-2">
        {work.map((works, index) => (
          <li key={index} className="text-blue-500 hover:underline">
            {works}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
