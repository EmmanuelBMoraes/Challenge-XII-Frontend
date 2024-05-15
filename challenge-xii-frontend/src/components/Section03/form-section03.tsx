import styled from "styled-components";
import CarTypes from "./carTypes";
import { useState, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import { theme } from "@/app/theme";
import ErrorForm from "./error-form";
type MessageProp = {
  message: string;
};

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
  color: ${theme.colors.white};
  background-color: transparent;
  outline: none;
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  caret-color: ${theme.colors.golden};
  &:focus {
    border-color: ${theme.colors.golden};
  }
`;

const Input = styled.input`
  height: 60px;
  padding: 12px 17px;
  margin-top: 24px;
  color: ${theme.colors.white};
  background-color: transparent;
  outline: none;
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  caret-color: ${theme.colors.golden};
  &:focus {
    border-color: ${theme.colors.golden};
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
  color: ${theme.colors.white};
  top: 17px;
  z-index: 100;
  background-color: #2c2c2c;
  padding-left: 3px;
  padding-right: 3px;
`;

const DescriptionP = styled.p`
  color: ${theme.colors.white};
  font-size: 16px;
`;

const InputChkBox = styled.input`
  &:checked + label::after {
    left: 20px;
    background-color: ${theme.colors.golden};
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
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${theme.colors.white};
    top: -3px;
    left: -2px;
    transition: all 0.4s;

    &:before {
      background-color: ${theme.colors.white};
    }
  }
`;

const DivSelectCar = styled.div`
  padding-top: 24px;
`;

const SelectCarTitle = styled.p`
  font-weight: 500;
  font-size: 26;
  color: ${theme.colors.golden};
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
  border: 1px solid ${theme.colors.white};
  border-radius: 4px;
  gap: 11px;
  color: ${theme.colors.white};
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 56px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.golden};
  outline: none;
  border: none;
  border-radius: 6px;
  margin-top: 24px;
  cursor: pointer;
  font-weight: 500;
`;

const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function FormS3() {
  const [selected, setSelected] = useState<string[]>([
    "white",
    "white",
    "white",
    "white",
  ]);
  const [carType, setCarType] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [ownCar, setOwnCar] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleClick = (car: string) => {
    setCarType(car);
    const selectedCar: string[] = ["white", "white", "white", "white"];
    switch (car) {
      case "Sedan":
        selectedCar[0] = `${theme.colors.golden}`;
        break;
      case "SUV/Van":
        selectedCar[1] = `${theme.colors.golden}`;
        break;
      case "Semi Luxury":
        selectedCar[2] = `${theme.colors.golden}`;
        break;
      case "Luxury":
        selectedCar[3] = `${theme.colors.golden}`;
        break;

      default:
        break;
    }
    setSelected(selectedCar);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const postDriver = await axios.post("http://localhost:3001/drivers", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: "Default",
        city: "Default",
        ownCar: ownCar,
        carType: carType,
      });
      console.log(e);
    } catch (error) {
      const axiosError = error as AxiosError;
      const message: string = axiosError.request.response;
      setErrorMessage(message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DivForm>
        <DivName>
          <div>
            <InputName
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errorMessage.includes("firstName") && (
              <ErrorForm message="Invalid First Name" />
            )}
          </div>
          <div>
            <InputName
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errorMessage.includes("lastName") && (
              <ErrorForm message="Invalid Last Name" />
            )}
          </div>
        </DivName>
        <DivInputs>
          <Input
            placeholder="E-mail Adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessage.includes("email") && (
            <ErrorForm message="Invalid e-mail" />
          )}
        </DivInputs>
        <DivInputs>
          <Legend>Country</Legend>
          <Input placeholder="Country" />
        </DivInputs>
        <Input placeholder="City" />
        <Input placeholder="Referal Code" />
        <DivOwnCar>
          <DescriptionP>I drive my own car</DescriptionP>
          <div>
            <InputChkBox
              type="checkbox"
              checked={ownCar}
              onChange={(e) => setOwnCar(e.target.checked)}
            />
            <ToggleButton></ToggleButton>
          </div>
        </DivOwnCar>
        <DivSelectCar>
          <SelectCarTitle>Select your car type</SelectCarTitle>
          <DivCarTypes>
            <CarCard
              style={{ borderColor: selected[0] }}
              onClick={() => handleClick("Sedan")}
            >
              {CarTypes()[0]}
              <p>Sedan</p>
            </CarCard>
            <CarCard
              style={{ borderColor: selected[1] }}
              onClick={() => handleClick("SUV/Van")}
            >
              {CarTypes()[1]}
              <p>SUV/Van</p>
            </CarCard>
            <CarCard
              style={{ borderColor: selected[2] }}
              onClick={() => handleClick("Semi Luxury")}
            >
              {CarTypes()[2]}
              <p>Semi Luxury</p>
            </CarCard>
            <CarCard
              style={{ borderColor: selected[3] }}
              onClick={() => handleClick("Luxury")}
            >
              {CarTypes()[3]}
              <p>Luxury Car</p>
            </CarCard>
          </DivCarTypes>
          {errorMessage.includes("carType") && (
            <ErrorForm message="Select a vehicle type" />
          )}
        </DivSelectCar>
        <SubmitButton type="submit">SUBMIT</SubmitButton>
      </DivForm>
    </form>
  );
}
