import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../../../data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-5xl">Job Category List</h1>
        <p className="mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 rounded-lg mt-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-gradient-to-r from-catBgStart to-catBgEnd p-10"
          >
            <img
              className="p-4 rounded-lg bg-gradient-to-r from-catImgStart to-catImgEnd"
              src={category.logo}
              alt={category.category_name}
            />
            <h3 className="mt-8 font-extrabold text-lg text-secondary">
              {category.category_name}
            </h3>
            <p className="mt-2 text-grayish2">{category.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
