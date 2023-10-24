import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold text-[#FF3811]">Popular Products</h1>
        <h2 className="text-5xl font-bold ">Browse Our Products</h2>
        <p className=" w-1/2 text-zinc-500 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-10">
        {products?.map((product) => (
          <div
            key={product.id}
            className="p-5  border rounded-lg text-center space-y-2"
          >
            <div className="bg-gray-200 rounded-lg p-5">
            <img
              src={product.image}
              className="rounded-lg h-56 w-3/4 right-0 left-0 mx-auto block"
            />
            </div>
            <h2 className="font-bold">{product.title}</h2>
            <p className="font-bold text-[#FF3811]">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
