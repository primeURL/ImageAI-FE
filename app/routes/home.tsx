import type { Route } from "./+types/home";
import HeroSection from "~/components/home/HeroSection";
import FeaturesSection from "~/components/home/FeaturesSection";
import HowItWorksSection from "~/components/home/HowItWorksSection";
import DemoSection from "~/components/home/DemoSection";
import PricingSection from "~/components/home/PricingSection";
import CallToAction from "~/components/home/CallToAction";
import Footer from "~/components/home/Footer";

export function loader({ context }: Route.LoaderArgs) {
  return { message: context };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PhotoAI - Personalized AI Generator" },
    { name: "description", content: "Welcome to PhotoAI Website" },
  ];
}

export default function Home() {
  return (
    <div className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection />
        <PricingSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
