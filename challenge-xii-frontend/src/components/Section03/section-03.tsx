"use client";
import { createContext, useState } from "react";
import {
  Section,
  TopSection,
  DescriptionH2,
  DescriptionP,
  MidSection,
} from "./styles";
import Sucssess from "./sucess";
import PopupSvg from "./popup-svg";
import FormS3 from "./form-section03";
interface AppContextType {
  formSubmited: boolean;
  setFormSubmited: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AppContext = createContext<AppContextType | undefined>(undefined);

export default function Section03() {
  const [formSubmited, setFormSubmited] = useState<boolean>(false);

  return (
    <Section>
      <AppContext.Provider value={{ formSubmited, setFormSubmited }}>
        {formSubmited && <Sucssess />}
        {!formSubmited && (
          <div>
            <TopSection>
              <PopupSvg />
              <MidSection>
                <DescriptionH2>Drive with MyRide</DescriptionH2>
                <DescriptionP>
                  Register as a driver using the form below. Our team will
                  assess and get back to you within 48 hours.
                </DescriptionP>
              </MidSection>
            </TopSection>
            <FormS3 />
          </div>
        )}
      </AppContext.Provider>
    </Section>
  );
}
