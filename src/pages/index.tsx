import React from "react";
import { Inter } from "next/font/google";

import HomeContainer from "@/Containers/Home/Home.Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomeContainer />;
}
