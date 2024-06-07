"use client";

import useAuth from "@/app/hooks/useAuth";
import Image from "next/image";
import React from "react";

const DogecoinPayment = () => {
  useAuth();

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col p-10">
          <div className="w-80 mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="mr-2">Pay with</span>
                <span className="font-bold text-orange-500">Dogecoin</span>
              </div>
              <div className="text-right">
                <span className="block">DogeCoinPay Server</span>
                <span className="block font-bold">0.0000010 Doge</span>
                <span className="block text-sm">1 Doge = 1 (USD)</span>
              </div>
            </div>
            <div className="flex justify-around mb-4">
              <button className="bg-gray-300 text-black rounded-lg px-4 py-2">Scan</button>
              <button className="bg-gray-300 text-black rounded-lg px-4 py-2">Copy</button>
            </div>
            <div className="flex justify-center mb-4">
              <img
                src="/dogecoinwallet.png"
                alt="QR Code"
                className="w-80 h-80"
              />
            </div>
            <button className="bg-green-500 text-white rounded-lg px-4 py-2 w-full">
              Open in wallet
            </button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            className="object-cover"
            fill={true}
            src="/Gamesphere.png"
            alt="bg-image"
          />
        </div>
      </div>
    </main>
  );
};

export default DogecoinPayment;