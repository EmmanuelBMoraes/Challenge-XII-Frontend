import {
  DivForm,
  InputName,
  Input,
  DivName,
  DivOwnCar,
  Legend,
  DescriptionPS3,
  InputChkBox,
  ToggleButton,
  DivSelectCar,
  SelectCarTitle,
  DivCarTypes,
  CarCard,
  SubmitButton,
  DivInputs,
} from "./styles";
import CarTypes from "./carTypes";
import { useState, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import { theme } from "@/app/theme";
import ErrorForm from "./error-form";
type MessageProp = {
  message: string;
};

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
      setErrorMessage("");
    } catch (error) {
      console.log(error);
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
          <DescriptionPS3>I drive my own car</DescriptionPS3>
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
