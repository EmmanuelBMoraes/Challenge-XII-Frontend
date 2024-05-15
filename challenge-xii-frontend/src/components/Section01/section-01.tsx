"use client";
import CardSection01 from "./card-section01";
import { Section } from "./styles";
import styled from "styled-components";
import Image from "next/image";

interface Section01Props {}

const imgUrl =
  "https://" + process.env.NEXT_PUBLIC_BUCKET_URL + "/cards/Hero-image.png";

const Teste = styled(Image)`
  border-radius: 10px;
`;

export default function Section01(props: Section01Props) {
  return (
    <Section>
      <div>
        <Teste src={imgUrl} alt="Street taxi" width={610} height={593} />
      </div>
      <CardSection01 />
    </Section>
  );
}
