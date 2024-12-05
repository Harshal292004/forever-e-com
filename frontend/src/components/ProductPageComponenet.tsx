import React, { useState } from "react";

const ProductPageComponent = () => {
  const [selectedSize, setSelectedSize] = useState("L");

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const thumbnails = [
    "https://via.placeholder.com/80", // Replace with actual thumbnail URLs
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
  ];

  return (
    <div className="px-6 py-8">
      {/* Product Page Container */}
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left: Image Gallery */}
        <div className="md:w-1/2">
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/400x400" // Replace with main product image URL
              alt="Product"
              className="w-full object-cover rounded-md"
            />
          </div>
          <div className="flex space-x-2">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover border border-gray-200 rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-2xl font-semibold">
            Men Round Neck Pure Cotton T-shirt
          </h1>
          <div className="flex items-center space-x-2">
            <div className="text-yellow-500 text-lg">★★★★★</div>
            <span className="text-gray-600">(122)</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">$149</p>
          <p className="text-gray-600">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </p>

          {/* Size Selection */}
          <div>
            <h4 className="font-semibold">Select Size</h4>
            <div className="flex space-x-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "border-orange-500 text-orange-500"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
            ADD TO CART
          </button>

          {/* Product Info */}
          <div className="mt-4 text-gray-600 space-y-2">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className="mt-12 border-t pt-6">
        <div className="flex space-x-8">
          <button className="border-b-2 border-black pb-2 font-semibold">
            Description
          </button>
          <button className="pb-2 text-gray-600 hover:text-black">
            Reviews (122)
          </button>
        </div>
        <div className="mt-4 text-gray-600">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="mt-4">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPageComponent;
