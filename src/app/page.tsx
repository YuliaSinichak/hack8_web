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
import Gallery from "@/components/Gallery";
import Registration from "@/components/Registation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-black">
      <Header />
      <Hero />
      <AboutHack />
      <Theme />
      <Registration></Registration>
      <AboutBest />
      <Team />
      <Portrait />
      <Gallery />
      <PartnersSection />
      <Contacts />
      <Footer />
    </main>
  );
}
