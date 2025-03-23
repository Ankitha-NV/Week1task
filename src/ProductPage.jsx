import React, { useState } from "react";
import { Star, Search } from "lucide-react"; // Icons

const products = [
  { id: 1, name: "Wireless Headphones", price: "$99.99", rating: 4.5, reviews: 120, description: "Experience high-quality sound with noise cancellation.", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmVkl2PpBLKcly3p2PcrTCn9m6ZYnnHu30FY5YN1Wp1mV6AEJLFh8NxwK1sjQh65r7shLDEpbAsuM3THBTPOD_-sylSYxphcXe8cDDsKgMat2KZsTuojbIyA154ak9_TxHTVGJnw&usqp=CAc" },
  { id: 2, name: "Smartwatch", price: "$149.99", rating: 4.2, reviews: 85, description: "Track your fitness and receive notifications on the go.", image: "data:image/jpeg;base64,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" },
  { id: 3, name: "Gaming Mouse", price: "$49.99", rating: 4.7, reviews: 200, description: "Ergonomic design with customizable RGB lighting.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzo5bT0lXfrxvROMLJ6qfSKmGA2BNp6uIOg&s" },
  { id: 4, name: "Mechanical Keyboard", price: "$89.99", rating: 4.3, reviews: 150, description: "Tactile keys with RGB backlighting for ultimate gaming.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81C65R8qml4DW-oRfMh409HLU0ZFR4B28dA&s" },
  { id: 5, name: "Bluetooth Speaker", price: "$59.99", rating: 4.6, reviews: 180, description: "Portable and waterproof with deep bass sound.", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRb6vmBOYMP7btTC-6nLCLAVrNHIJmOubB-BOSMr9lKyBXOaQSCFtVyceQd5GoZ534NVLM8GNdPHE6ZNmy_EGCDPukBR1WEaDFJlfcfWZTdrM9jL03SV1aFEc7SrMEovDvzt8X1fyp7VHg&usqp=CAc" },
  { id: 6, name: "Men's T-Shirt", price: "$19.99", rating: 4.5, reviews: 300, description: "Comfortable cotton t-shirt available in various colors.", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQm3rdEbKDl5ClrloZnkY8a349jZ5DIUHjCvnraxsQZoKVs5MWlMKP2OdGlA5x-pqPFaMX8rRWVN-M6jyfdcmq2oFXz64g69Ndrv1T3TE083K7bfQ4Q5CT7EZQSjSkWM0MsioEhgw&usqp=CAc" },
  { id: 7, name: "Women's Handbag", price: "$79.99", rating: 4.6, reviews: 250, description: "Elegant and stylish handbag for any occasion.", image: "data:image/jpeg;base64,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" },
  { id: 8, name: "Running Shoes", price: "$69.99", rating: 4.7, reviews: 280, description: "Lightweight running shoes for maximum comfort.", image: "data:image/jpeg;base64,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" },
  { id: 9, name: "Perfume", price: "$49.99", rating: 4.8, reviews: 350, description: "Long-lasting fragrance with a refreshing scent.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpA67-vpAHPoNDemThqYC5M6zKrAyYkQggw&s" },
  { id: 10, name: "Makeup Kit", price: "$39.99", rating: 4.5, reviews: 400, description: "Complete makeup set with premium quality products.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1z1lYJz_HwyL5whGX9NA515lK6AGX5HYwQ&s" }
];

function ProductPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full px-4 py-2 flex justify-between items-center z-10">
        <h1 className="text-lg font-bold text-indigo-600">Trendkart</h1>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 pl-8 border rounded-md focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-2 top-2 text-gray-400" size={16} />
        </div>
        <button className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600">Login</button>
      </nav>
      <div className="pt-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-2"
                  loading="lazy"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/200?text=No+Image")}
                />
                <h2 className="text-sm font-semibold text-gray-800 truncate">{product.name}</h2>
                <p className="text-gray-600 text-xs mt-1">{product.description}</p>
                <div className="flex items-center text-yellow-500 text-xs mt-1">
                  {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                  {product.rating % 1 !== 0 && <Star size={14} fill="currentColor" stroke="none" className="opacity-50" />}
                  <span className="text-gray-500 ml-1">({product.reviews})</span>
                </div>
                <p className="text-indigo-600 font-bold text-sm mt-1">{product.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
