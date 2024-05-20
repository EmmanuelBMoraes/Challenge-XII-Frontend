import { keyframes } from "styled-components";
import styled from "styled-components";
import { theme } from "@/app/theme";

const ErrorDiv = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 5px;
`;
const MessageError = styled.p`
  color: red;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.component_background};
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 85px;
  position: relative;
  width: 1324px;
  @media (max-width: 1330px) and (min-width: 661px) {
    width: 700px;
    align-items: center;
  }
  @media (max-width: 660px) and (min-width: 441px) {
    align-items: center;
    width: 450px;
  }
  @media (max-width: 440px) {
    width: 300px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  @media (max-width: 1330px) and (min-width: 441px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 400px;
  }
  @media (max-width: 440px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 200px;
  }
`;

const DescriptionH2 = styled.h2`
  color: ${theme.colors.golden};
  font-size: 27px;
  @media (max-width: 440px) {
    width: 200px;
  }
`;
const DescriptionP = styled.p`
  color: ${theme.colors.white};
  font-size: 16px;
  margin-top: 6px;
  @media (max-width: 440px) {
    width: 200px;
  }
`;
const MidSection = styled.div`
  gap: 6px;
  @media (max-width: 440px) {
    display: flex;
    flex-direction: column;
    width: 180px;
  }
`;

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 1330px) and (min-width: 661px) {
    width: 640px;
  }
  @media (max-width: 660px) and (min-width: 441px) {
    width: 400px;
  }
  @media (max-width: 440px) {
    width: 240px;
  }
`;

const InputName = styled.input`
  width: 622px;
  height: 60px;
  padding: 12px 17px;
  margin-top: 24px;
  color: ${theme.colors.white};
  background-color: transparent;
  outline: none;
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  caret-color: ${theme.colors.golden};
  &:focus {
    border-color: ${theme.colors.golden};
  }
  @media (max-width: 1330px) and (min-width: 661px) {
    width: 640px;
  }
  @media (max-width: 660px) and (min-width: 441px) {
    width: 400px;
  }
  @media (max-width: 440px) {
    width: 240px;
  }
`;

const Input = styled.input`
  height: 60px;
  padding: 12px 17px;
  margin-top: 24px;
  color: ${theme.colors.white};
  background-color: transparent;
  outline: none;
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  caret-color: ${theme.colors.golden};
  &:focus {
    border-color: ${theme.colors.golden};
  }
  @media (max-width: 440px) {
    width: 240px;
  }
`;

const DivName = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1330px) and (min-width: 441px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 440px) {
    & > div {
      width: 100px;
    }
    width: 240px;
    justify-content: flex-end;
    flex-direction: column;
  }
`;
const DivOwnCar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  position: relative;
`;

const Legend = styled.legend`
  position: absolute;
  margin-left: 16px;
  font-size: 12px;
  color: ${theme.colors.white};
  top: 17px;
  z-index: 100;
  background-color: #2c2c2c;
  padding-left: 3px;
  padding-right: 3px;
`;

const DescriptionPS3 = styled.p`
  color: ${theme.colors.white};
  font-size: 16px;
`;

const InputChkBox = styled.input`
  &:checked + label::after {
    left: 20px;
    background-color: ${theme.colors.golden};
    transition: all 0.4s;
  }
  &:checked + label {
    background-color: rgba(251, 164, 3, 0.08);
    transition: all 0.4s;
  }
  position: absolute;
  top: 5px;
  right: -3px;
  cursor: pointer;
  z-index: 100;
  width: 40px;
  opacity: 0;
`;

const ToggleButton = styled.label`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 14px;
  background-color: #eee;
  border-radius: 20px;
  transition: all 0.4s;

  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${theme.colors.white};
    top: -3px;
    left: -2px;
    transition: all 0.4s;

    &:before {
      background-color: ${theme.colors.white};
    }
  }
`;

const DivSelectCar = styled.div`
  padding-top: 24px;
  @media (max-width: 440px) {
    width: 240px;
  }
`;

const SelectCarTitle = styled.p`
  font-weight: 500;
  font-size: 26;
  color: ${theme.colors.golden};
`;

const DivCarTypes = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  @media (max-width: 440px) {
    width: 240px;
  }
`;

const CarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 147px;
  height: 80px;
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  gap: 11px;
  color: ${theme.colors.white};
  cursor: pointer;
  @media (max-width: 440px) {
    & > p {
      word-break: break-all;
    }
    width: 54px;
    flex-wrap: wrap;
  }
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 56px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.golden};
  outline: none;
  border: none;
  border-radius: 6px;
  margin-top: 24px;
  cursor: pointer;
  font-weight: 500;
  @media (max-width: 440px) {
    width: 240px;
  }
`;

const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 1330px) and (min-width: 661px) {
    width: 640px;
  }
  @media (max-width: 660px) and (min-width: 441px) {
    width: 400px;
  }
  @media (max-width: 440px) {
    width: 240px;
  }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  20% {opacity: 0.2}
  40% {opacity: 0.4}
  60%{opacity: 0.6}
  80%{opacity: 0.8}
  100% { opacity: 1; }
`;

const WelcomeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 46px;
  width: 1168px;
  height: 533px;
  background-color: ${theme.colors.component_background};
  color: ${theme.colors.white};
  border-radius: 10px;
  animation: ${fadeIn} 1.4s;
  @media (max-width: 1330px) and (min-width: 661px) {
    width: 640px;
    height: 800px;
  }
  @media (max-width: 660px) and (min-width: 441px) {
    height: 500px;
    width: 300px;
  }
  @media (max-width: 440px) {
    width: 240px;
    height: 400px;
  }
`;
const Message = styled.h2`
  font-size: 45px;
  @media (max-width: 660px) and (min-width: 441px) {
    text-align: center;
  }
  @media (max-width: 440px) {
    text-align: center;
  }
`;

const InputOption = styled.select`
  height: 60px;
  padding: 12px 17px;
  margin-top: 24px;
  color: ${theme.colors.white};
  background-color: transparent;
  outline: none;
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  caret-color: ${theme.colors.golden};
  &:focus {
    border-color: ${theme.colors.golden};
  }
`;

const Options = styled.option`
  color: ${theme.colors.post_background};
`;

export {
  ErrorDiv,
  MessageError,
  Section,
  TopSection,
  DescriptionH2,
  DescriptionP,
  MidSection,
  WelcomeDiv,
  Message,
  InputOption,
  Options,
};

export {
  DivForm,
  InputName,
  Input,
  DivName,
  DivOwnCar,
  Legend,
  DescriptionPS3,
  InputChkBox,
  ToggleButton,
  DivSelectCar,
  SelectCarTitle,
  DivCarTypes,
  CarCard,
  SubmitButton,
  DivInputs,
};
