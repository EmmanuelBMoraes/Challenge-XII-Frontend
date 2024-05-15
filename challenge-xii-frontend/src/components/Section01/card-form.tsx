import React, { FormEvent, useState, useEffect } from "react";
import { SearchIcon } from "./search-icon";
import { XIcon } from "./x-component";
import axios from "axios";
import {
  IconX,
  Link,
  ButtonFind,
  ButtonField,
  Legend,
  Input,
  DivTitle,
  FieldSet,
  InteractiveField,
} from "./styles";

interface GeoData {
  query: string;
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
}

const CardForm = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<GeoData>(
          "http://ip-api.com/json/?fields=61439"
        );
        setLocation(`${res.data.city}, ${res.data.country}`);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const [location, setLocation] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [inputErrorLocation, setInputErrorLocation] = useState<string>("");
  const [inputErrorDestination, setInputErrorDestination] =
    useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    //change later
    if (location != "" && destination != "") {
      window.location.href = "/not-found";
    }
    if (location === "") {
      setInputErrorLocation("red");
    } else {
      setInputErrorLocation("");
    }
    if (destination == "") {
      setInputErrorDestination("red");
    } else setInputErrorDestination("");
  };

  return (
    <form onSubmit={onSubmit}>
      <InteractiveField>
        <DivTitle>Find a Ride now</DivTitle>
        <FieldSet>
          <Legend>Your pick up</Legend>
          <Input
            type="text"
            placeholder="Current location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ borderColor: inputErrorLocation }}
          />
          <IconX onClick={() => setLocation("")}>
            <XIcon />
          </IconX>
        </FieldSet>
        <FieldSet>
          <Legend>Your pick up</Legend>
          <Input
            type="text"
            placeholder="Your destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{ borderColor: inputErrorDestination }}
          />
          <IconX onClick={() => setDestination("")}>
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
            <Link>MORE OPTIONS</Link>
          </div>
        </ButtonField>
      </InteractiveField>
    </form>
  );
};

export default CardForm;
