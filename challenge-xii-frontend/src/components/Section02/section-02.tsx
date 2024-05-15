"use client";
import styled from "styled-components";
import { theme } from "@/app/theme";
import Posts from "./posts";

interface Section02Props {}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 74px 89px;
  gap: 60px;
`;

const Paragraph = styled.p`
  font-size: 26px;
  color: ${theme.colors.golden};
  padding-bottom: 8px;
`;

const Division = styled.div`
  text-align: center;
`;

const H2 = styled.h2`
  color: ${theme.colors.white};
  font-size: 42px;
`;

const SectionPosts = styled.div`
  display: flex;
`;

export default function Section02(props: Section02Props) {
  return (
    <Section>
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
