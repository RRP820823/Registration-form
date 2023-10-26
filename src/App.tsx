// RegistrationForm.js

import "./App.css";
import Location from "./Components/Location";
import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { AiOutlineMail, AiOutlineCheck } from "react-icons/ai";
import Container from "./Components/Container";
// import { StyledError } from "./Components/Styles";
import { StyledEror } from "./Components/Error";

//made changes
// Styled Components
const FormContainer = styled.form`
  margin: 0 auto;
  max-width: 750px;
`;

const FlexContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* border: 1px solid black; */
  /* margin-bottom: 15px; */
  /* width: 100%; */
`;

const InputContainer = styled.div<{ name?: any }>`
  /* flex: 1;
  margin-right: 10px; */
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  width: 100%;
  border-color: #313131;
  /* background-color: #f6d9d5; */
  min-height: 47px;
  line-height: 1.3em;
  box-shadow: none;
  justify-content: space-between;
  margin-right: 11px;

  /* width: ${(props) =>
    props.name === "firstName" || props.name === "lastName" ? "100%" : null}; */
  /* width: ${(props) =>
    props.name === "firstName" || props.name === "lastName"
      ? "50%"
      : "100%"}; */

  /* margin: 0; */
  padding: 0;
  box-sizing: border-box;
`;

const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  flex: 1;
  height: 100%;
`;

const Input = styled.input<{ icon?: any }>`
  width: ${(props) =>
    props.type === "checkbox" || props.type === "radio" ? "40px" : "100%"};

  padding: 8px;
  border: none;
  outline: none;
`;

// TextInput Component
const TextInput: React.FC<{
  label?: string;
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "checkbox" | "checkbox" | "radio" | "tel" | "date" | "number";
  icon?: React.ReactNode;
  placeholder?: string;
  hideLabel?: any;
  name?: any;
  id?: any;
  min?: any;
  max?: any;
  required?: any;
}> = ({
  label,
  value,
  id,
  onChange,
  type,
  icon,
  hideLabel,
  placeholder,
  name,
  min,
  max,
  required,
}) => {
  return (
    <InputContainer name={name}>
      {icon ? icon : null}
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        icon={icon}
        id={id}
        name={name}
        min={5}
        max={10}
        // required
      />
      {type === "radio" || type === "checkbox" ? (
        <Label htmlFor={id}> {label}</Label>
      ) : null}
    </InputContainer>
  );
};

// RegistrationForm Component
// New Comment

type Props = {
  firstName: string;
  lastName: string;
  platform: string;
  isChecked: boolean;
  Telephone: string | number | any;
  Email: string;
  Address: string;
  "Date of Birth": any;
};
const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<Props>({
    firstName: "",
    lastName: "",
    platform: "",
    isChecked: false,
    Telephone: "",
    Email: "",
    Address: "",
    "Date of Birth": "",
  });

  const [error, setError] = useState<any>({});

  const [submitting, setSubmitting] = useState<boolean>(false);

  console.log("formData", formData);
  console.log("error", error);

  console.log("submitting", submitting.toString());

  let handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let handelCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  function handelSubmit(e: React.FormEvent): void {
    e.preventDefault(); // Prevents the form from submitting and triggering a page reload

    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is missing";
    }

    if (!formData.Address) {
      newErrors.Address = "Address  is missing";
    }

    if (!formData.lastName) {
      newErrors.lastName = "last Name is missing";
    }

    if (!formData.Email) {
      newErrors.Email = "Email is missing";
    } else if (!isValidEmail(formData.Email)) {
      newErrors.Email = "Invalid Email format";
    }

    if (!formData.Telephone) {
      newErrors.Telephone = "Telephone is missing";
    } else if (formData.Telephone.length > 10) {
      newErrors.Telephone = "Telephone should not be greater than 10";
    } else if (!isValidTelephone(formData.Telephone)) {
      newErrors.Telephone = "Invalid Telephone format";
    }

    if (!formData.isChecked) {
      newErrors.isChecked = "isChecked  is missing";
    }

    if (!formData.platform) {
      newErrors.platform = "platform  is missing";
    }
    if (!formData["Date of Birth"]) {
      newErrors["Date of Birth"] = " Date of Birth is missing";
    }

    setError(newErrors);

    setError((prevError: {}) => {
      if (Object.keys(prevError).length === 0) {
        setSubmitting(true);
      }
      return prevError;
    });
  }

  function isValidEmail(email: string): boolean {
    return email.includes("@");
  }

  function isValidTelephone(telephone: string): boolean {
    // Implement your telephone validation logic here
    // For a simple example, check if it contains only numbers

    return /^\d+$/.test(telephone);
  }
  return (
    <>
      {submitting ? <p>form submitted</p> : null}
      <FormContainer onSubmit={handelSubmit}>
        <Container label="Name">
          <FlexContainer>
            <TextInput
              placeholder="First Name"
              value={formData.firstName}
              onChange={handelChange}
              type="text"
              label="Name"
              name="firstName"
            />
            <TextInput
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handelChange}
              type="text"
              name="lastName"
              hideLabel
            />
          </FlexContainer>

          <div style={{ display: "flex", gap: "10px" }}>
            {Object.keys(error).length > 0 && error.firstName !== "" && (
              <StyledEror errorMesage={error.firstName} />
            )}
            {Object.keys(error).length > 0 && (
              <StyledEror errorMesage={error.lastName} />
            )}
          </div>
          {/* <StyledError style={{}}>{error.firstName}</StyledError> */}
        </Container>

        <Container label="E-mail">
          <TextInput
            label={"E-mail"}
            onChange={handelChange}
            type="text"
            name="Email"
            icon={<AiOutlineMail />}
            placeholder="E-mail"
          />
          <div>{error.Email}</div>

          {Object.keys(error).length > 0 && error.Email !== "" && (
            <StyledEror errorMesage={error.Email} />
          )}
        </Container>
        <Container>
          <Location></Location>
        </Container>
        <Container label="Telephone">
          <TextInput
            label="Telephone"
            onChange={handelChange}
            type="tel"
            name="Telephone"
            // icon={<AiOutlineCheck />}
            placeholder="Telephone"
          />

          {Object.keys(error).length > 0 && (
            <StyledEror errorMesage={error.Telephone} />
          )}
        </Container>

        <Container label="4.Address">
          <TextInput
            label="Address"
            onChange={handelChange}
            type="text"
            name="Address"
            // icon={<AiOutlineCheck />}
            placeholder="Address"
          />

          {Object.keys(error).length > 0 && (
            <StyledEror errorMesage={error.Address} />
          )}
        </Container>

        <Container label=" 5.Date of Birth">
          <TextInput
            label="Date of Birth"
            onChange={handelChange}
            type="date"
            name="Date of Birth"
            // icon={<AiOutlineCheck />}
            placeholder="Date of Birth"
          />
          {Object.keys(error).length > 0 && (
            <StyledEror errorMesage={error["Date of Birth"]} />
          )}
        </Container>

        <Container
          label="6.
Where did you hear about us?"
        >
          {[
            "A Friend or colleague",
            "Google",
            "Article News",
            "Blog Post",
            "Other",
          ].map((v) => (
            <>
              <TextInput
                label={v}
                value={v}
                id={v}
                onChange={handelChange}
                type="radio"
                name="platform"
              />
            </>
          ))}

          {Object.keys(error).length > 0 && (
            <StyledEror errorMesage={error.platform} />
          )}
        </Container>

        <Container>
          <TextInput
            placeholder="First Name"
            value={formData.isChecked}
            onChange={handelCheckBoxChange}
            type="checkbox"
            name="isChecked"
            id="checkbox-id" // Add a unique id for the checkbox
            label="I have read, understood, and accepted the PRIVACY POLICY for membership. "
          />

          {Object.keys(error).length > 0 && (
            <StyledEror errorMesage={error.isChecked} />
          )}
        </Container>

        <button type="submit">Submit</button>
      </FormContainer>
    </>
  );
};

export default RegistrationForm;

export { TextInput };
