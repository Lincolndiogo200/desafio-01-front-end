import { Navbar } from "./components/Navbar/Navbar.component";

function App() {
  return (
    <main className="h-screen w-full bg-gradient-to-r from-[#66DECE] to-[#188982] flex items-center justify-center p-12 font-sans font-semibold">
      <div className="bg-white w-full h-full rounded-3xl border backdrop-blur-sm bg-white/30 flex">
        <Navbar />
        <h1>Seja bem vindo! :)</h1>
        <p>Desafio de apresentação Pessoal do Projeto Frontend fusion</p>
      </div>
    </main>
  );
}

export default App;
