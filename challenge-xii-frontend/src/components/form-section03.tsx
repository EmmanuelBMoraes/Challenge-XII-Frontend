import styled from "styled-components";
import CarTypes from "./carTypes";

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const InputName = styled.input`
  width: 544px;
  height: 60px;
  padding: 12px 17px;
  margin-top: 24px;
  color: white;
  background-color: transparent;
  outline: none;
  border: 1px solid white;
  border-radius: 4px;
  caret-color: #fba403;
  &:focus {
    border-color: #fba403;
  }
`;

const Input = styled.input`
  height: 60px;
  padding: 12px 17px;
  margin-top: 24px;
  color: white;
  background-color: transparent;
  outline: none;
  border: 1px solid white;
  border-radius: 4px;
  caret-color: #fba403;
  &:focus {
    border-color: #fba403;
  }
`;

const DivName = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
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
  color: white;
  top: 184px;
  z-index: 100;
  background-color: #2c2c2c;
  padding-left: 3px;
  padding-right: 3px;
`;

const DescriptionP = styled.p`
  color: white;
  font-size: 16px;
`;

const InputChkBox = styled.input`
  &:checked + label::after {
    left: 20px;
    background-color: #fba403;
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
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    top: -3px;
    left: -2px;
    transition: all 0.4s;

    &:before{
        background-color: white;

    }
`;

const DivSelectCar = styled.div`
  padding-top: 24px;
`;

const SelectCarTitle = styled.p`
  font-weight: 500;
  font-size: 26;
  color: #fba403;
`;

const DivCarTypes = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

const CarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 147px;
  height: 80px;
  border: 1px solid white;
  border-radius: 4px;
  gap: 11px;
  color: white;
  cursor: pointer;
`;
export default function FormS3() {
  return (
    <form>
      <DivForm>
        <DivName>
          <InputName placeholder="First Name" />
          <InputName placeholder="Last Name" />
        </DivName>
        <Input placeholder="E-mail Adress" />
        <Legend>Country</Legend>
        <Input placeholder="Country" />
        <Input placeholder="City" />
        <Input placeholder="Referal Code" />
        <DivOwnCar>
          <DescriptionP>I drive my own car</DescriptionP>
          <div>
            <InputChkBox type="checkbox" />
            <ToggleButton></ToggleButton>
          </div>
        </DivOwnCar>
        <DivSelectCar>
          <SelectCarTitle>Select your car type</SelectCarTitle>
          <DivCarTypes>
            <CarCard>
              {CarTypes()[0]}
              <p>Sedan</p>
            </CarCard>
            <CarCard>
              {CarTypes()[1]}
              <p>SUV/Van</p>
            </CarCard>
            <CarCard>
              {CarTypes()[2]}
              <p>Semi Luxury</p>
            </CarCard>
            <CarCard>
              <input type="checkbox" />
              {CarTypes()[3]}
              <p>Luxury Car</p>
            </CarCard>
          </DivCarTypes>
        </DivSelectCar>
      </DivForm>
    </form>
  );
}
