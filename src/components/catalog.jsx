import { useContext, useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import ProductCard from "./productCard";

function Catalog({ setCurrentPage }) {
  const { products } = useContext(AppContext);
  const [filtered, setFiltered] = useState(products);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    let result = [...products];

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "") {
      result = result.filter((p) => p.category?.toLowerCase() === category.toLowerCase());
    }

    setFiltered(result);
  }, [search, category, products]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-yellow-800 mb-8">Catalogue</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Rechercher des produits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Toutes les catégories</option>
            <option value="hommes">Hommes</option>
            <option value="femmes">Femmes</option>
            <option value="enfants">Enfants</option>
            <option value="mixtes">Mixtes</option>
          </select>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Aucun produit trouvé.</p>
      )}
    </div>
  );
}

export default Catalog;
