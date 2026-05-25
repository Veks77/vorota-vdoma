import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Trust } from "@/components/landing/Trust";
import { Services } from "@/components/landing/Services";
import { PainSolution } from "@/components/landing/PainSolution";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Works } from "@/components/landing/Works";
import { Counters } from "@/components/landing/Counters";
import { Process } from "@/components/landing/Process";
import { Reviews } from "@/components/landing/Reviews";
import { Offer } from "@/components/landing/Offer";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VOROTA — Автоматичні ворота, ролети та системи безпеки в Україні" },
      {
        name: "description",
        content:
          "Виготовлення та монтаж автоматичних воріт, ролет, решіток, шлагбаумів та огорож під ключ. Гарантія від 1 року. Безкоштовний замір.",
      },
      { property: "og:title", content: "VOROTA — Автоматичні ворота під ключ" },
      { property: "og:description", content: "Преміум ворота, ролети та автоматика з гарантією від 1 року." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Trust />
      <Services />
      <PainSolution />
      <BeforeAfter />
      <Works />
      <Counters />
      <Process />
      <Reviews />
      <Offer />
      <ContactForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
