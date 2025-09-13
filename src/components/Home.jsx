import { useContext } from "react";
import AppContext from "../context/AppContext";
import ProductCard from "./productCard";
import backgroundImg from "../assets/image.png"; // ✅ Importer l'image

function Home({ setCurrentPage }) {
  const { products } = useContext(AppContext);
  const bestSellers = products.slice(0, 3);

  return (
    <div className="text-center">
      {/* Header avec image de fond */}
      <div
        className="h-80 sm:h-96 flex flex-col justify-center items-center rounded-lg mb-12 relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImg})`, // ✅ Utilisation correcte
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay semi-transparent */}
        <div className="absolute inset-0 bg-yellow-1500 bg-opacity-40"></div>

        {/* Contenu texte */}
        <div className="relative z-10 text-center p-6 bg-opacity-30 rounded-lg max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 drop-shadow-lg text-black bg-gray-200">EleganceBoutique</h1>
          <p className="text-lg sm:text-xl mb-4 drop-shadow-md text-black bg-gray-50">
            Des modèles tops pour une élégance incomparable
          </p>
          <button
            onClick={() => setCurrentPage("catalog")}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Découvrir
          </button>
        </div>
      </div>

      {/* Meilleures ventes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Nos meilleures ventes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
