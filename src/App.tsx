import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { DevCard } from "./components/devcard";

export const App = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col ">
      <Header name="Luco Vilanculos" email="luisisauravilanculos@mail.com"/>
        <main className="p-2 flex-1 px-9 py-9">
            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-l from-blue-950 to-blue-500 font-bold">Bem vindo a minha página</h1>
            <p className="font-medium">Introduzindo react</p>  
            <DevCard />
        </main>
      <Footer date={new Date} name="Luco Vilanculos" />
    </div>
  );
};


