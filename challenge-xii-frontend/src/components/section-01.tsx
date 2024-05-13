"use client";

import Image from "next/image";
import styled from "styled-components";
import CardSection01 from "./card-section01";

interface Section01Props {}

const imgUrl =
  "https://" + process.env.NEXT_PUBLIC_BUCKET_URL + "/cards/Hero-image.png";

const Section = styled.div`
  display: flex;
  padding: 74px 89px;
  gap: 42px;
`;

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
