"use client";
import {
  Section,
  TopSection,
  DescriptionH2,
  DescriptionP,
  MidSection,
} from "./styles";
import PopupSvg from "./popup-svg";
import FormS3 from "./form-section03";

export default function Section03() {
  return (
    <Section>
      <TopSection>
        <PopupSvg />
        <MidSection>
          <DescriptionH2>Drive with MyRide</DescriptionH2>
          <DescriptionP>
            Register as a driver using the form below. Our team will assess and
            get back to you within 48 hours.
          </DescriptionP>
        </MidSection>
      </TopSection>
      <FormS3 />
    </Section>
  );
}
