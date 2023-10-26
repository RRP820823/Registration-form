import { Country, State, City } from "country-state-city";
import React, { useEffect, useState } from "react";
// import { TextInput } from "../App";
import {
  StyledLabel,
  SelectBox,
  Wrapper,
  StyledOption,
  StyledSelect,
} from "./Styles";
const Location: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<{ isoCode?: any }>({});
  const [selectedState, setSelectedState] = useState<{ isoCode?: any }>({});
  const [selectedCity, setSelectedCity] = useState<{ isoCode?: any }>({});

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    let CurrentCountry: any = Country.getAllCountries().find(
      (c) => c.name === event?.currentTarget?.value
    );
    setSelectedCountry(CurrentCountry);
  };

  const handleStateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    let CurrentState: any = State.getStatesOfCountry(
      selectedCountry?.isoCode
    ).find((s) => s.name === event?.currentTarget?.value);
    setSelectedState(CurrentState);
  };

  const handleCityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    let CurrentCity: any = City.getCitiesOfState(
      selectedCountry?.isoCode,
      selectedState.isoCode
    ).find((c) => c.name === event?.currentTarget?.value);
    setSelectedCity(CurrentCity);
  };

  useEffect(() => {
    console.log("selectedCountry", selectedCountry);
    console.log("selectedState", selectedState);
    console.log("selectedCity", selectedCity);
    return () => console.clear();
  });

  //   console.log(Country.getAllCountries());

  return (
    <Wrapper>
      <SelectBox>
        <StyledLabel htmlFor="Country">Choose a Country:</StyledLabel>
        <StyledSelect id="Country" onChange={handleChange}>
          {Country.getAllCountries().map((country: any) => (
            <>
              <StyledOption value={country.name}>{country.name}</StyledOption>
            </>
          ))}
        </StyledSelect>
      </SelectBox>

      <SelectBox>
        <label htmlFor="State">Choose a State:</label>
        <select id="State" onChange={handleStateChange}>
          {State.getStatesOfCountry(selectedCountry?.isoCode).map(
            (state: any) => (
              <>
                <option value={state.name}>{state.name}</option>
              </>
            )
          )}
        </select>
      </SelectBox>

      <SelectBox>
        <label htmlFor="City">Choose a City:</label>
        <select id="City" onChange={handleCityChange}>
          {City.getCitiesOfState(
            selectedCountry?.isoCode,
            selectedState?.isoCode
          ).map((city: any) => (
            <>
              <option value={city.name}>{city.name}</option>
            </>
          ))}
        </select>
      </SelectBox>
    </Wrapper>
  );
};

export default Location;
