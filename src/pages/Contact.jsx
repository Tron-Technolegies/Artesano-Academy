import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/home/ContactSection";
import FAQ from "../components/home/FAQ";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#242424]">
      <Navbar />

      {/* Contact Hero */}
      <section className="bg-[#ff6a00]">
        <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-8 sm:px-8 sm:pb-14 sm:pt-10 lg:px-[60px]">
          <p className="text-[12px] leading-[1.6]">Home / Contact Us</p>

          <p className="mt-10 text-[10px] leading-[1.6]">LET'S START A CONVERSATION</p>

          <h1 className="mt-6 max-w-[650px] text-[clamp(38px,5vw,56px)] font-normal leading-[1.35] tracking-[-0.05em]">
            Your next chapter
            <br />
            starts here.
          </h1>

          <p className="mt-6 text-[13px] leading-[1.8]">
            Ask about a course, explore your options, or tell us what you would like to learn.
          </p>
        </div>
      </section>

      {/* Existing contact component */}
      <ContactSection />

      {/* Existing FAQ component */}
      <FAQ />

      <Footer />
    </div>
  );
}
