import AboutUs from "@/components/aboutus";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav"
import Services from "@/components/services";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    //  className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    <div>
        <Nav />
        <Hero />
        <AboutUs />
        <Services />
        <Footer />
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Button>Click me</Button>
      </main> */}
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer> */}
    </div>
  );
}
