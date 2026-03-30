import { About } from "@/components/About/About";
import { Benefits } from "@/components/Benefits/Benefits";
import { ContactCTA } from "@/components/ContactCTA/ContactCTA";
import { FAQ } from "@/components/FAQ/FAQ";
import { Hero } from "@/components/Hero/Hero";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { ServiceBanners } from "@/components/ServiceBanners/ServiceBanners";
import { Stats } from "@/components/Stats/Stats";
import { TargetAudience } from "@/components/TargetAudience/TargetAudience";
import { Workflow } from "@/components/Workflow/Workflow";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Stats />
        <TargetAudience />
        <Workflow />
        <Benefits />
        <ServiceBanners />
        <Portfolio />
        <About />
        <FAQ />
        <ContactCTA />
      </main>
    </div>
  );
}
