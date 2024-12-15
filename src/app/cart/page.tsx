'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CartPage: React.FC = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: "Ut diam consequat",
      image: "/images/shoppingcart/p1.png",
      details: "Color: Brown, Size: XL",
      price: 32,
    },
    {
      id: 2,
      name: "Vel faucibus posuere",
      image: "/images/shoppingcart/p2.png",
      details: "Color: White, Material: Wood",
      price: 120,
    },
    {
      id: 3,
      name: "Ac vitae vestibulum",
      image: "/images/shoppingcart/p3.png",
      details: "Color: Black, Height: 5ft",
      price: 60,
    },
    {
      id: 4,
      name: "Elit massa diam",
      image: "/images/shoppingcart/p4.png",
      details: "Color: Black, Height: 5ft",
      price: 60,
    },
    {
      id: 5,
      name: "Proin pharetra elementum",
      image: "/images/shoppingcart/p5.png",
      details: "Color: Black, Height: 5ft",
      price: 60,
    },
  ];

  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleIncrease = (index: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };

  const handleDecrease = (index: number) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
    }
    setQuantities(updatedQuantities);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="w-full h-[286px] bg-[#F6F5FF]">
        <div className="max-w-7xl mx-auto text-center sm:text-left  my-24 md:px-6 lg:px-8">
          <h2 className="text-[#101750] text-[26px] md:text-[36px] font-[700]">
            Shopping Cart
          </h2>
          <Link href="" className="px-2 ">
            Home.
          </Link>
          <Link href="">Pages.</Link>
          <Link href="/cart" className="text-[#FB2E86] text-[16px] font-[500] px-2">
            Shopping cart
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-center p-4">
  <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Section */}
      <div className="md:col-span-2 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b pb-2 text-sm md:text-base">Product</th>
              <th className="border-b pb-2 text-sm md:text-base">Price</th>
              <th className="border-b pb-2 text-sm md:text-base">Quantity</th>
              <th className="border-b pb-2 text-sm md:text-base">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-b">
                <td className="py-4 flex flex-col sm:flex-row items-start sm:items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div className="ml-0 sm:ml-4 mt-2 sm:mt-0">
                    <p className="font-medium text-sm md:text-base">
                      {product.name}
                    </p>
                    <p className="text-xs md:text-sm text-[#A1A8C1]">
                      {product.details}
                    </p>
                  </div>
                </td>
                <td className="py-4 text-sm md:text-base">${product.price.toFixed(2)}</td>
                <td className="py-4 flex flex-col sm:flex-row items-center">
                  <button
                    onClick={() => handleDecrease(index)}
                    className="px-2 py-1 border rounded-l bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="w-12 border-t border-b text-center text-sm"
                    value={quantities[index]}
                    readOnly
                  />
                  <button
                    onClick={() => handleIncrease(index)}
                    className="px-2 py-1 border rounded-r bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </button>
                </td>
                <td className="py-4 text-sm md:text-base">
                  ${(product.price * quantities[index]).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4 sm:gap-0">
          <button className="bg-pink-500 text-white py-2 px-4 rounded">
            Update Cart
          </button>
          <button className="bg-pink-500 text-white py-2 px-4 rounded">
            Clear Cart
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6 rounded-lg">
        {/* Cart Totals */}
        <div className="mb-6">
          <h2 className="font-bold text-lg text-center mb-4">Cart Totals</h2>
          <div className="bg-[#F4F4FC] p-10">
            <div className="flex justify-between">
              <p>Subtotals:</p>
              <p>
                $
                {products
                  .reduce((acc, product, index) => acc + product.price * quantities[index], 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Totals:</p>
              <p>
                $
                {products
                  .reduce((acc, product, index) => acc + product.price * quantities[index], 0)
                  .toFixed(2)}
              </p>
            </div>
            <button className="bg-green-500 text-white w-full py-2 rounded">
              Proceed To Checkout
            </button>
          </div>
        </div>

        {/* Calculate Shipping */}
        <div>
          <h2 className="font-bold text-center text-lg mb-4">
            Calculate Shipping
          </h2>
          <form className="space-y-4 bg-[#F4F4FC] p-10">
            <input
              type="text"
              placeholder="Country"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border p-2 rounded"
            />
            <button className="bg-pink-500 text-white w-full py-2 rounded">
              Calculate Shipping
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default CartPage;
