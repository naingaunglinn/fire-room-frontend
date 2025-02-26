'use client'
import { CartData } from "@/types";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Table from "./components/Table";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import CartDrawer from "./components/CartDrawer";

export default function Home() { 
  const [fameData, setFame] = useState<[]>([])
  const [cartData, setCart] = useState<CartData[]>([])
  
  const fetchFames = async () => {
    try {
      const response = await axios.get(
        '/api/fame?page=1'
      )
      const responseData = response.data
      setFame(responseData.data);
      
    } catch (error) { 
      console.error(error);
    }
  }

  useEffect(() => {
    fetchFames()
  }, [])
  
  return (
    <div className="grid relative items-center justify-items-start min-h-screen p-8 pb-20 gap-[64px] sm:p-20 font-[family-name:var(--font-orbitron-sans)]">
        <Header/>
        <main className="grid gap-[64px]">
          <Main />
          <Description />
          <Table fames={fameData} setCart={setCart} cartData={cartData} />
          <CartDrawer cartData={cartData} setCart={setCart} />
        </main>
        <Footer />
    </div>
  );
}
