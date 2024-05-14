import Image from "next/image";
import styles from "./page.module.css";
import Section01 from "@/components/section-01";
import Section02 from "@/components/section-02";
import Section03 from "@/components/section-03";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section01 />
      <Section02 />
      <Section03 />
    </main>
  );
}
