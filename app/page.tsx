import { Hero } from "@/components/marketing/Hero";
import { LogoBar } from "@/components/marketing/LogoBar";
import { Features } from "@/components/marketing/Features";
import { Integrations } from "@/components/marketing/Integrations";
import { Pricing } from "@/components/marketing/Pricing";
import { FAQ } from "@/components/marketing/FAQ";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Features />
      <Integrations />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}