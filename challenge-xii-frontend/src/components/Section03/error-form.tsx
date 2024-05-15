import Image from "next/image";
import { ErrorDiv, MessageError } from "./styles";

type MessageProp = {
  message: string;
};

export default function ErrorForm({ message }: MessageProp) {
  return (
    <ErrorDiv>
      <Image
        src="https://challenge-xii-bucket-compass-uol-emma.s3.amazonaws.com/cards/image+25.png"
        alt="Alert Icon"
        width={16}
        height={16}
      />
      <MessageError>{message}</MessageError>
    </ErrorDiv>
  );
}
