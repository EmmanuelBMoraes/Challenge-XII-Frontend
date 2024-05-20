import Image from "next/image";
import { WelcomeDiv, Message } from "./styles";

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
