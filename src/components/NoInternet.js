
"use client";

import Image from "next/image";

export default function NoInternet() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">

      <Image
        src="/no-internet.webp"
        alt="No Internet"
        width={220}
        height={220}
        priority
      />

      <h1 className="text-3xl font-bold mt-4">
        No Internet Connection ❌
      </h1>

      <p className="text-gray-500 mt-2">
        Please turn on mobile data or Wi-Fi
      </p>

    </div>
  );
}