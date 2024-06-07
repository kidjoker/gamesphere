"use client";

import useAuth from "@/app/hooks/useAuth";
import Image from "next/image";

export default function Credits() {
  const score = 743;
  const maxScore = 850;
  const percentage = (score / maxScore) * 100;

  useAuth();

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col p-10">
          <div className="text-white text-center py-4">
            <h1 className="text-2xl font-bold">Credit Monitoring</h1>
          </div>
          <div className="flex flex-col items-center p-6">
            <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center shadow-lg relative mb-4">
              <div className="absolute top-1/3 text-center">
                <div className="text-6xl font-bold text-green-500">743</div>
                <div className="text-2xl text-gray-700">B</div>
              </div>
            </div>
            <div className="text-center mb-4">
              <p className="text-xl font-semibold">Your Score</p>
            </div>
            <div className="w-full px-8 mb-4">
              <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-green-500"></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-red-500">300</span>
                <span className="text-yellow-500">600</span>
                <span className="text-green-500">850</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Link href="/">
            <Image
              className="object-cover"
              fill={true}
              src="/Gamesphere.png"
              alt="bg-image"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
