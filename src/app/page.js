
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import ScrollToTop from "@/components/ScrollToTop";



export const metadata = {
  title: "JK Ply Hardware | Home",
  description: "Best plywood and furniture shop in Patna",
};


export default function Home() {
  return (
    <>

      <Navbar />
      <Hero />
      <Products />
      <Footer />
      <ScrollToTop />
      

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919661382988"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-whitenpm install react-icons p-2 rounded-full shadow-lg hover:scale-110 transition"
      >
      </a>
      <a
        href="https://wa.me/919661382988"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp />
      </a>

    </>
  );
}