import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { XIcon } from "./x-component";
import GetGeolocation from "./getGeolocation";

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
  padding-right: 12px;
  padding-bottom: 12px;
  position: relative;
  &:focus-within svg {
    fill: #fba403;
  }
  > input::placeholder-shown + div {
    display: none;
  }
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
  background-color: transparent;
  outline: none;
  border: 1px solid white;
  border-radius: 4px;
  &:focus {
    border-color: #fba403;
  }
  &:placeholder-shown + div {
    display: none;
  }
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

const ButtonField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const ButtonFind = styled.button`
  width: 215px;
  height: 56px;
  background-color: #fba403;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Link = styled.a`
  text-decoration: none;
  color: #fba403;
`;

const IconX = styled.div`
  position: absolute;
  top: 21.5px;
  right: 15px;
  svg {
    fill: white;
  }
`;

export default function CardSection01() {
  const local = GetGeolocation();

  const userLocal: string = `${local[0] || ""}, ${local[1] || ""}`;

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
      </div>
      <form action="">
        <InteractiveField>
          <DivTitle>Find a Ride now</DivTitle>
          <FieldSet>
            <Legend>Your pick up</Legend>
            <Input
              type="text"
              placeholder="Current location"
              defaultValue={userLocal.length > 3 ? userLocal : ""}
            />
            <IconX>
              <XIcon />
            </IconX>
          </FieldSet>
          <FieldSet>
            <Legend>Your pick up</Legend>
            <Input type="text" placeholder="Your destination" />
            <IconX>
              <XIcon />
            </IconX>
          </FieldSet>
          <ButtonField>
            <div>
              <ButtonFind>
                <SearchIcon />
                FIND A DRIVER
              </ButtonFind>
            </div>
            <div>
              <Link href="">MORE OPTIONS</Link>
            </div>
          </ButtonField>
        </InteractiveField>
      </form>
    </Card>
  );
}
