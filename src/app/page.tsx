import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Table from "./components/Table";

export default function Home() {
  return (
    <div className="grid items-center justify-items-start min-h-screen p-8 pb-20 gap-[64px] sm:p-20 font-[family-name:var(--font-orbitron-sans)]">
        <Header/>
        <main className="grid gap-[64px]">
          <Main />
          <Description />
          <Table />
        </main>
        <Footer />
    </div>
  );
}
