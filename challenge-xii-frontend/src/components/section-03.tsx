"use client";
import styled from "styled-components";
import PopupSvg from "./popup-svg";
import FormS3 from "./form-section03";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282828;
  padding: 30px;
  border-radius: 10px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const DescriptionH2 = styled.h2`
  color: #fba403;
  font-size: 27px;
`;
const DescriptionP = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 6px;
`;
const MidSection = styled.div`
  gap: 6px;
`;

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
