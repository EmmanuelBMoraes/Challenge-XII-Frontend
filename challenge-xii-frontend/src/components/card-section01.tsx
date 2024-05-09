import React from "react";
import styled from "styled-components";

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

const InteractiveField = styled.div`
  background-color: #2c2c2c;
  padding: 30px 33px;
  border-radius: 4px;
  margin-top: 30px;
`;
const Ride = styled.span`
  color: #fba403;
`;

const FieldSet = styled.div`
  width: 544px;
  height: 60px;
  margin-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  position: relative;
`;

const DivTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const Input = styled.input`
  width: 544px;
  height: 60px;
  padding: 12px 17px;
  color: white;
`;

const Legend = styled.legend`
  position: absolute;
  margin-left: 16px;
  font-size: 12px;
  color: white;
  top: -7px;
  z-index: 100;
  background-color: #2c2c2c;
  padding-left: 3px;
  padding-right: 3px;
`;

export default function CardSection01() {
  return (
    <Card>
      <div>
        <div>
          <InfoH2> NEED A RIDE?</InfoH2>
        </div>
        <div>
          <InfoH1>
            Book with <MediumItalic>my</MediumItalic>
            <Ride>RIDE</Ride> now!
          </InfoH1>
        </div>
      </div>
      <form action="">
        <InteractiveField>
          <DivTitle>Find a Ride now</DivTitle>
          <FieldSet>
            <Legend>Your pick up</Legend>
            <Input type="text" placeholder="teste" />
          </FieldSet>
          <FieldSet>
            <Legend>Your pick up</Legend>
            <Input type="text" placeholder="teste" />
          </FieldSet>
        </InteractiveField>
      </form>
    </Card>
  );
}
