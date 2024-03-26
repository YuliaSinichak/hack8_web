import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/Partners/Partners";
import Portrait from "@/components/Portrait";
import AboutHack from "@/components/AboutHack";
import Theme from "@/components/Theme";
import AboutBest from "@/components/AboutBest";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-black">
      <Header />
      <Hero />
      <AboutHack />
      <Theme />
      <AboutBest />
      <Portrait />
      <PartnersSection />
      <Contacts />
      <Footer />
    </main>
  );
}
