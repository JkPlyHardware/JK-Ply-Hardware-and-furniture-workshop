import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Our Services | JK Ply Hardware",
  description: "Furniture design, repair and delivery services",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesSection />
    </>
  );
}