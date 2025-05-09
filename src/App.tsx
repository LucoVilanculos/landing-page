import { Header } from "./assets/components/header";
import { Footer } from "./assets/components/footer";

export const App = () => {
  return (
    <div>
      <Header name="Luco Vilanculos" email="luisisauravilanculos@mail.com" />
        <main>
            <h1>Bem vindo a minha página</h1>
            <p>Introduzindo react</p>  
            <img src="https://images.unsplash.com/photo-1589675192397-1550ff0f7c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vb258ZW58MHx8MHx8fDA%3D" alt="" 
            />
        </main>
      <Footer date={new Date} name="Luco Vilanculos" />
    </div>
  );
};


