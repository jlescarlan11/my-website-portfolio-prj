import About from "./components/About";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 bg-1 text-4">
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
    </main>
  );
}
