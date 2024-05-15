import styled from "styled-components";
import CardForm from "./card-form";

const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const InfoH2 = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: 400;
`;
const InfoH1 = styled.h2`
  color: white;
  font-size: 50px;
`;

const MediumItalic = styled.span`
  font-weight: 500;
  font-style: italic;
  color: #fba403;
`;

const Ride = styled.span`
  color: #fba403;
`;

export default function CardSection01() {
  return (
    <Card>
      <div>
        <div>
          <InfoH2> NEED A RIDE? </InfoH2>
        </div>
        <div>
          <InfoH1>
            Book with <MediumItalic>my</MediumItalic>
            <Ride>RIDE</Ride> now!
          </InfoH1>
        </div>
        <CardForm />
      </div>
    </Card>
  );
}
