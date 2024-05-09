import Image from "next/image";
import styles from "./page.module.css";
import Section01 from "@/components/section-01";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section01 />
    </main>
  );
}
