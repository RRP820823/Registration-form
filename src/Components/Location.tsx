import { Country, State, City } from "country-state-city";

// import { TextInput } from "../App";
import {
  StyledLabel,
  SelectBox,
  Wrapper,
  StyledOption,
  StyledSelect,
} from "./Styles";
import { ErrorMessage } from "formik";

interface LocationProps {
  formik?: any;
}
const Location: React.FC<LocationProps> = ({ formik }) => {
  return (
    <Wrapper>
      <SelectBox>
        <StyledLabel htmlFor="Country">Choose a Country:</StyledLabel>
        <StyledSelect
          name="location.country"
          id="Country"
          onChange={formik.handleChange}
        >
          <option> </option>
          {Country.getAllCountries().map((country: any) => (
            <>
              <StyledOption value={country.isoCode}>
                {country.name}
              </StyledOption>
            </>
          ))}
        </StyledSelect>
        <ErrorMessage component="div" name="location.country" />{" "}
        {/* Corrected name prop */}
      </SelectBox>

      <SelectBox>
        <label htmlFor="State">Choose a State:</label>
        <select name="location.state" id="State" onChange={formik.handleChange}>
          {State.getStatesOfCountry(formik.values.location.country).map(
            (state: any) => (
              <>
                <option value={state.isoCode}>{state.name}</option>
              </>
            )
          )}
        </select>
        <ErrorMessage component="div" name="location.state" />
      </SelectBox>

      <SelectBox>
        <label htmlFor="City">Choose a City:</label>
        <select name="location.city" id="City" onChange={formik.handleChange}>
          {City.getCitiesOfState(
            formik.values.location.country,
            formik.values.location.state
          ).map((city: any) => (
            <>
              <option value={city.name}>{city.name}</option>
            </>
          ))}
        </select>
        <ErrorMessage component="div" name="location.city" />{" "}
      </SelectBox>
    </Wrapper>
  );
};

export default Location;
