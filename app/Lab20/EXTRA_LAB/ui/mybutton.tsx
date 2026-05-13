"use client";

import { useRouter } from "next/navigation"; 
import React from "react";
function MyButton() {
  const router = useRouter()
const handleClick = () => {
    if (true) {
      router.push("/");
      console.log("click me")
    } else {
      router.push("/LAB_1/darshan/diet");
    }
  };
  return (
    <>
    <button
      onClick={handleClick}
      className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-md transition hover:bg-blue-700 hover:shadow-lg active:scale-95"
    >
      Click Me
    </button>
    
    </>
  );
}

export default MyButton;
