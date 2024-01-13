import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  // Redirect to /home when the component mounts
  React.useEffect(() => {
    router.push("/home");
  }, []);
}
