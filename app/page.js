import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ShowcaseTransactions from "@/components/home/ShowcaseTransactions";
import ShowcaseSavings from "@/components/home/ShowcaseSavings";
import ShowcaseAI from "@/components/home/ShowcaseAI";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <ShowcaseTransactions />
      <ShowcaseSavings />
      <ShowcaseAI />
      <FAQ />

      <h1>SaldoGT</h1>
    </main>
  );
}