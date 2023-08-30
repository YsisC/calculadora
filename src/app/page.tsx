"use client";

import { Calculadora } from "@/components/Calculadora";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const HomePage = () => {



  return (
    <div>
      <Calculadora />
    </div>
  );
};

export default HomePage;
