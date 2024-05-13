import React, { FormEvent, useState, useEffect } from "react";
import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { XIcon } from "./x-component";
import axios from "axios";

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

const InteractiveField = styled.div`
  background-color: #2c2c2c;
  padding: 30px 33px;
  border-radius: 4px;
  margin-top: 30px;
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
  cursor: pointer;
`;

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
