import { theme } from "@/app/theme";
import Image from "next/image";
import styled from "styled-components";

const WelcomeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 46px;
  z-index: 1000000000000000;
  width: 1168px;
  height: 533px;
  background-color: ${theme.colors.component_background};
  color: ${theme.colors.white};
  position: absolute;
  top: 1px;
  left: -76px;
  border-radius: 10px;
`;
const Message = styled.h2`
  font-size: 45px;
`;
export default function Sucssess() {
  return (
    <WelcomeDiv>
      <Image
        src="https://challenge-xii-bucket-compass-uol-emma.s3.amazonaws.com/cards/check+icon+1.svg"
        alt="check in"
        width={175}
        height={175}
      />
      <Message>Welcome, Driver!</Message>
    </WelcomeDiv>
  );
}
