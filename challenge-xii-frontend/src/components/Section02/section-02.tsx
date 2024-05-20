"use client";
import { Section, Paragraph, Division, H2, SectionPosts } from "./styles";
import Posts from "./posts";

interface Section02Props {}

export default function Section02(props: Section02Props) {
  return (
    <Section id="Section02">
      <Division>
        <Paragraph>WHY SHOULD YOU RIDE WITH US?</Paragraph>
        <H2>Best in class rides</H2>
      </Division>
      <SectionPosts>
        <Posts />
      </SectionPosts>
    </Section>
  );
}
