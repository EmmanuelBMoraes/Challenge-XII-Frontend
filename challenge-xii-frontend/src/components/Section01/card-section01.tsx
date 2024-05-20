import CardForm from "./card-form";
import { Card, InfoH2, InfoH1, MediumItalic, Ride } from "./styles";

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
