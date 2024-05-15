import Image from "next/image";
import styles from "./page.module.css";
import Section01 from "@/components/Section01/section-01";
import Section02 from "@/components/Section02/section-02";
import Section03 from "@/components/Section03/section-03";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section01 />
      <Section02 />
      <Section03 />
    </main>
  );
}
