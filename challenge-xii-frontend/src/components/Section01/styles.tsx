import { theme } from "@/app/theme";
import styled from "styled-components";

const InteractiveField = styled.div`
  background-color: #2c2c2c;
  padding: 30px 33px;
  border-radius: 4px;
  margin-top: 30px;
`;

const FieldSet = styled.div`
  width: 544px;
  height: 60px;
  margin-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  position: relative;
  &:focus-within svg {
    fill: ${theme.colors.golden};
  }
  > input::placeholder-shown + div {
    display: none;
  }
`;

const DivTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.white};
`;

const Input = styled.input`
  width: 544px;
  height: 60px;
  padding: 12px 17px;
  color: ${theme.colors.white};
  background-color: transparent;
  outline: none;
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  caret-color: ${theme.colors.golden};
  &:focus {
    border-color: ${theme.colors.golden};
  }
  &:placeholder-shown + div {
    display: none;
  }
`;

const Legend = styled.legend`
  position: absolute;
  margin-left: 16px;
  font-size: 12px;
  color: ${theme.colors.white};
  top: -7px;
  z-index: 100;
  background-color: #2c2c2c;
  padding-left: 3px;
  padding-right: 3px;
`;

const ButtonField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const ButtonFind = styled.button`
  width: 215px;
  height: 56px;
  background-color: ${theme.colors.golden};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Link = styled.a`
  text-decoration: none;
  color: ${theme.colors.golden};
`;

const IconX = styled.div`
  position: absolute;
  top: 21.5px;
  right: 15px;
  svg {
    fill: ${theme.colors.white};
  }
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const InfoH2 = styled.h2`
  color: ${theme.colors.white};
  font-size: 26px;
  font-weight: 400;
`;
const InfoH1 = styled.h2`
  color: ${theme.colors.white};
  font-size: 50px;
`;

const MediumItalic = styled.span`
  font-weight: 500;
  font-style: italic;
  color: ${theme.colors.golden};
`;

const Ride = styled.span`
  color: ${theme.colors.golden};
`;
const Section = styled.div`
  display: flex;
  padding: 74px 89px;
  gap: 42px;
`;

export {
  IconX,
  Link,
  ButtonFind,
  ButtonField,
  Legend,
  Input,
  DivTitle,
  FieldSet,
  InteractiveField,
  Card,
  InfoH2,
  InfoH1,
  MediumItalic,
  Ride,
  Section,
};
