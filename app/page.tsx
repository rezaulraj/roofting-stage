import Header from "@/common/Header";
import Footer from "@/common/Footer";
import HeroPage from "@/components/HeroPage";
import TabCard from "@/components/TabCard";
import HowItConnect from "@/components/HowItConnect";
import QulifiedLead from "@/components/QulifiedLead";
import CaseStudy from "@/components/CaseStudy";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main>
        <HeroPage />
        <TabCard />
        <HowItConnect />
        <QulifiedLead />
        <CaseStudy/>
      </main>
      <Footer />
    </div>
  );
}
