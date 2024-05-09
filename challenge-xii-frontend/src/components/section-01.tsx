"use client";

import Image from "next/image";
import heroImage from "../../public/Hero-image.png";
import styled from "styled-components";

interface Section01Props {}

const Section = styled.div`
  padding: 74px 89px;
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
      <div>
        <div></div>
        <div></div>
      </div>
    </Section>
  );
}
