import { db } from "../_lib/prisma";
// import CategoryItem from "./cartegory-Item";

import CategoryItem from "./category-Item";

const CategoryList = async () => {
  // pegar todas as categorias do banco
  const categories = await db.category.findMany({});

  return (
    // renderizar um item para cada categoria
    <div className="grid grid-cols-2 gap-3 ">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
