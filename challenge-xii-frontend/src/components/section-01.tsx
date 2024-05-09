"use client";

import Image from "next/image";
import heroImage from "../../public/Hero-image.png";
import styled from "styled-components";
import CardSection01 from "./card-section01";

interface Section01Props {}

const Section = styled.div`
  display: flex;
  padding: 74px 89px;
  gap: 42px;
`;

export default function Section01(props: Section01Props) {
  return (
    <Section>
      <div>
        <Image
          src={heroImage}
          alt="Street taxi"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <CardSection01 />
    </Section>
  );
}
