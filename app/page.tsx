import AboutUs from "@/components/home/AboutUs";
import ContactUs from "@/components/home/ContactUs";
import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="w-full">
      <Intro />
      <Services />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
