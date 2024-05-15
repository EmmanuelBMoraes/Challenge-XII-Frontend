import Image from "next/image";
import styled from "styled-components";

type MessageProp = {
  message: string;
};

const ErrorDiv = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 5px;
`;
const MessageError = styled.p`
  color: red;
`;

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
