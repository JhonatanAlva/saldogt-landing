import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ShowcaseTransactions from "@/components/home/ShowcaseTransactions";
import ShowcaseSavings from "@/components/home/ShowcaseSavings";
import ShowcaseAI from "@/components/home/ShowcaseAI";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <header>
        <Navbar />
        <Hero />
      </header>
      <Features />
      <ShowcaseTransactions />
      <ShowcaseSavings />
      <ShowcaseAI />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}