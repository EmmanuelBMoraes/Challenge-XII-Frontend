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
import { useState, FormEvent, useEffect, useContext, useReducer } from "react";
import axios, { AxiosError } from "axios";
import { theme } from "@/app/theme";
import ErrorForm from "./error-form";
import SelectInput, { Option } from "./select";
import Sucssess from "./sucess";
import { AppContext } from "./section-03";

type StateDriver = {
  firstName: string;
  lastName: string;
  email: string;
  ownCar: boolean;
  carType: string;
};
type ActionDriver =
  | {
      type: "setFirstName";
      firstName: string;
    }
  | { type: "setLastName"; lastName: string }
  | { type: "setEmail"; email: string }
  | { type: "setOwnCar"; ownCar: boolean }
  | { type: "setCarType"; carType: string };

const reducer = (state: StateDriver, action: ActionDriver) => {
  switch (action.type) {
    case "setFirstName":
      return {
        ...state,
        firstName: action.firstName,
      };
    case "setLastName":
      return {
        ...state,
        lastName: action.lastName,
      };

    case "setEmail":
      return {
        ...state,
        email: action.email,
      };
    case "setOwnCar":
      return {
        ...state,
        ownCar: action.ownCar,
      };
    case "setCarType":
      return {
        ...state,
        carType: action.carType,
      };
    default:
      break;
  }
  return state;
};

export default function FormS3() {
  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    email: "",
    ownCar: false,
    carType: "",
  });

  const [optionsCountry, setOptionsCountry] = useState<Option[]>([]);
  const [optionsCity, setOptionsCity] = useState<Option[]>([]);
  const [selected, setSelected] = useState<string[]>([
    "white",
    "white",
    "white",
    "white",
  ]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const formSubmit = useContext(AppContext);

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
        console.log("Invalid request");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (country != "") {
      const fetchData = async () => {
        try {
          setOptionsCity([{ id: "loading", displayName: "Loading..." }]);
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
          setOptionsCity([{ id: "error", displayName: "Country unavailable" }]);
          console.log("Error on fetching data");
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
    dispatch({ type: "setCarType", carType: car });
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
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        country: country,
        city: city,
        ownCar: state.ownCar,
        carType: state.carType,
      });
      formSubmit?.setFormSubmited(true);
      setErrorMessage("");
    } catch (error) {
      const axiosError = error as AxiosError;
      const message: string = axiosError.request.response;
      setErrorMessage(message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {formSubmit?.formSubmited && <Sucssess />}
      {!formSubmit?.formSubmited && (
        <DivForm>
          <DivName>
            <div>
              <InputName
                placeholder="First Name"
                value={state.firstName}
                onChange={(e) =>
                  dispatch({ type: "setFirstName", firstName: e.target.value })
                }
              />
              {errorMessage.includes("firstName") && (
                <ErrorForm message="Invalid First Name" />
              )}
            </div>
            <div>
              <InputName
                placeholder="Last Name"
                value={state.lastName}
                onChange={(e) =>
                  dispatch({ type: "setLastName", lastName: e.target.value })
                }
              />
              {errorMessage.includes("lastName") && (
                <ErrorForm message="Invalid Last Name" />
              )}
            </div>
          </DivName>
          <DivInputs>
            <Input
              placeholder="E-mail Adress"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "setEmail", email: e.target.value })
              }
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
                checked={state.ownCar}
                onChange={(e) =>
                  dispatch({ type: "setOwnCar", ownCar: e.target.checked })
                }
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
