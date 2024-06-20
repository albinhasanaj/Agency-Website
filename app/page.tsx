import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RunningText from "@/components/RunningText";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="w-full flex flex-col items-center">
        <Hero />
        <RunningText text="TRANSFORMING IDEAS INTO REALITY" direction="left" />
        <div className="max-w-[1440px] w-full">
          <About />
        </div>
        <RunningText text="WE STRIVE TO USE THE MOST MODERN TECHNOLIGIES" direction="right" />
      </main>
    </div >
  );
}
