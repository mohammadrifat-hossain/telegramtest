'use client'
// import HomePage from "@/components/home/Home";
import dynamic from "next/dynamic";
import React from "react";
const HomePage = dynamic(() => import("@/components/home/Home"), {
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Home;
