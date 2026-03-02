import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import ValuePropositions from "@/components/landing/ValuePropositions";
import EmailSignupForm from "@/components/landing/EmailSignupForm";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <ValuePropositions />
        {/* <EmailSignupForm /> */}
        {/* <Testimonials /> */}
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
