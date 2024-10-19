import AboutUs from "@/components/aboutus";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav"
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
        <Nav />
        <Hero />
        <AboutUs />
        <Services />
        <Footer />
    </div>
  );
}
