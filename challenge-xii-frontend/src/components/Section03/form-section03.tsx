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
import { useState, FormEvent, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { theme } from "@/app/theme";
import ErrorForm from "./error-form";
import SelectInput, { Option } from "./select";
import Sucssess from "./sucess";
type MessageProp = {
  message: string;
};

export default function FormS3() {
  const [optionsCountry, setOptionsCountry] = useState<Option[]>([]);
  const [optionsCity, setOptionsCity] = useState<Option[]>([]);
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
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [sucess, setSucsses] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resCountry = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/capital"
        );
        const optionsDataCountry = resCountry.data.data.map((country: any) => ({
          id: country.name,
          displayName: country.name,
        }));

        setOptionsCountry(optionsDataCountry);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (country != "") {
      const fetchData = async () => {
        try {
          const resCity = await axios.post(
            "https://countriesnow.space/api/v0.1/countries/cities",
            {
              country: country,
            }
          );
          const optionsDataCity = await resCity.data.data.map(
            (city: string) => ({
              id: city,
              displayName: city,
            })
          );

          setOptionsCity(optionsDataCity);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [country]);

  const handleSelectChangeCountry = (optionId: string) => {
    if (firstLoad) {
      setFirstLoad(false);
    }
    setCountry(optionId);
  };
  const handleSelectChangeCity = (optionId: string) => {
    setCity(optionId);
  };
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
        country: country,
        city: city,
        ownCar: ownCar,
        carType: carType,
      });
      setSucsses(true);
      setErrorMessage("");
    } catch (error) {
      console.log(error);
      const axiosError = error as AxiosError;
      const message: string = axiosError.request.response;
      setErrorMessage(message);
      setSucsses(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {sucess && <Sucssess />}
      {!sucess && (
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
            <SelectInput
              id="Country"
              options={optionsCountry}
              first={firstLoad}
              onChange={handleSelectChangeCountry}
            />
            {errorMessage.includes("country") && (
              <ErrorForm message="Invalid country" />
            )}
          </DivInputs>
          <SelectInput
            id="City"
            options={optionsCity}
            onChange={handleSelectChangeCity}
          />
          {errorMessage.includes("city") && (
            <ErrorForm message="Invalid city" />
          )}
          <Input placeholder="Referal Code" />
          <DivOwnCar>
            <DescriptionPS3>I drive my own car</DescriptionPS3>
            <div>
              <InputChkBox
                id="own car"
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
      )}
    </form>
  );
}
