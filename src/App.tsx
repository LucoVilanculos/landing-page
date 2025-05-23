import { useState, useEffect } from "react";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { SplashScreen } from "./components/splash";
import { DevCard } from "./components/devcard";

 

export const App = () => {

   const [splash, setSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-200 min-h-screen flex flex-col ">
      <Header name="Luco Vilanculos" email="luisisauravilanculos@mail.com"/>
      {splash && <SplashScreen />}
      {!splash && ( 
        <main className="p-2 flex-1 px-10 py-15">
          <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-l from-blue-950 to-blue-500 animate-fade-in-up font-bold">Bem vindo a minha página</h1>
          <br />
          <p className="font-bold text-3xl text-cyan-700 animate-fade-in-up">Introduzindo react</p>  
          <DevCard />
        </main> 
      )}
      <Footer date={new Date} name="Luco Vilanculos" />
    </div>
  );
};


<main className="p-2 flex-1 px-10 py-15">
    <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-l from-blue-950 to-blue-500 font-bold">Bem vindo a minha página</h1>
    <br />
    <p className="font-bold text-3xl text-cyan-700">Introduzindo react</p>  
    <DevCard />
</main>