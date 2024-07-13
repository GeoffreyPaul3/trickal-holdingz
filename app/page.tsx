import ContactUs from "@/components/shared/ContactUs";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Products from "@/components/shared/Products";
import Services from "@/components/shared/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <ContactUs />
      <Footer />
    </>
  );
}
