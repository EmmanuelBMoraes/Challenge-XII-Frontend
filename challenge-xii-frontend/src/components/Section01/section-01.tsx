"use client";
import CardSection01 from "./card-section01";
import { DivImage, ImageSection01, Section } from "./styles";

interface Section01Props {}

const imgUrl =
  "https://challenge-xii-bucket-compass-uol-emma.s3.amazonaws.com/cards/Hero-image.png";

export default function Section01(props: Section01Props) {
  return (
    <Section>
      <DivImage>
        <ImageSection01
          src={imgUrl}
          alt="Street taxi"
          width={610}
          height={593}
        />
      </DivImage>
      <CardSection01 />
    </Section>
  );
}
