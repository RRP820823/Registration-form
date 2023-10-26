// RegistrationForm.js

import "./App.css";
import Location from "./Components/Location";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import Container from "./Components/Container";

import { Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { StyledError } from "./Components/Error";

//made changes
// Styled Components
const FormContainer = styled.form<{ onChange?: any }>`
  margin: 0 auto;
  max-width: 750px;
`;

const FlexContainer = styled.div`
  display: flex;
  :last-child {
    margin-right: 0;
  }
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
  margin-right: 14px;

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
  type?:
    | "text"
    | "checkbox"
    | "checkbox"
    | "radio"
    | "tel"
    | "date"
    | "number"
    | any;
  icon?: React.ReactNode;
  placeholder?: string;
  hideLabel?: any;
  name?: any;
  id?: any;
  min?: any;
  max?: any;
  required?: any;
  onBlur?: any;
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

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  location: {
    city: any;
    country: any;
    state: any;
  };
  platform: "";
  Telephone: any;
  Address: string;
  "Date of Birth": {};
  isChecked: boolean;
}
const RegistrationForm: React.FC = () => {
  const [checkBoxvalues] = React.useState([
    "A Friend or colleague",
    "Google",
    "Article News",
    "Blog Post",
    "Other",
  ]);
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    location: {
      city: "",
      country: "",
      state: "",
    },
    platform: "",
    Telephone: "",
    Address: "",
    "Date of Birth": "",
    isChecked: false,
  };

  let validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    location: Yup.object().shape({
      city: Yup.string().required("city is required"),
      country: Yup.string().required("country is required"),
      state: Yup.string().required("state is required"),
    }),

    Telephone: Yup.string()
      .required("number is required")
      .max(10, "must not be greater than 10"),

    isChecked: Yup.boolean().oneOf([true], "Must be checked "),
    Address: Yup.string().required("address is required "),
    "Date of Birth": Yup.string().required("please enter Date"),
    // platform: Yup.object().shape({
    //   checkBoxvalues: Yup.array().min(1).of(Yup.string().required()),
    // }),

    // platform: Yup.string().required("please select platform "),

    platform: Yup.string()
      .required("Must Accept Terms and Conditions")
      .oneOf([...checkBoxvalues], "Must Accept Terms and Conditions"),
  });

  return (
    <>
      {/* {submitting ? <p>form submitted</p> : null} */}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Sumitted");
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            // strory start

            <>
              {console.log(formik)}
              <FormContainer onSubmit={formik.handleSubmit}>
                <pre>{JSON.stringify(formik.values)}</pre>
                <Container label="Name">
                  <FlexContainer>
                    <TextInput
                      placeholder="First Name"
                      type="text"
                      label="Name"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                    <TextInput
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      placeholder="Last Name"
                      type="text"
                      name="lastName" // onBlur={formik.handleBlur}
                      hideLabel
                    />
                  </FlexContainer>
                  <ErrorMessage name="lastName">
                    {(msg) => <StyledError name={msg}>{msg}</StyledError>}
                  </ErrorMessage>
                  {/* <ErrorMessage component={StyledError} name="lastName" /> */}
                </Container>

                <Container label="E-mail">
                  <TextInput
                    label={"E-mail"}
                    onChange={formik.handleChange}
                    type="text"
                    name="email"
                    icon={<AiOutlineMail />}
                    placeholder="E-mail"
                  />
                  <ErrorMessage component="div" name="email" />
                </Container>
                <Container label="Location">
                  <Location formik={formik}></Location>
                </Container>
                <Container label="Telephone">
                  <TextInput
                    label="Telephone"
                    onChange={formik.handleChange}
                    type="tel"
                    name="Telephone"
                    // icon={<AiOutlineCheck />}
                    placeholder="Telephone"
                  />
                  <ErrorMessage component="div" name="Telephone" />
                </Container>

                <Container label="4.Address">
                  <TextInput
                    label="Address"
                    onChange={formik.handleChange}
                    type="text"
                    name="Address"
                    // icon={<AiOutlineCheck />}
                    placeholder="Address"
                  />

                  <ErrorMessage component="div" name="Address" />
                </Container>

                <Container label=" 5.Date of Birth">
                  <TextInput
                    label="Date of Birth"
                    onChange={formik.handleChange}
                    type="date"
                    name="Date of Birth"
                    // icon={<AiOutlineCheck />}
                    placeholder="Date of Birth"
                  />
                  <ErrorMessage component="div" name="Date of Birth" />
                </Container>

                <Container
                  label="6.
Where did you hear about us?"
                >
                  {checkBoxvalues.map((v) => (
                    <>
                      <TextInput
                        label={v}
                        value={v}
                        id={v}
                        onChange={formik.handleChange}
                        type="radio"
                        name="platform"
                      />
                    </>
                  ))}

                  <ErrorMessage component="div" name="platform" />
                </Container>

                <Container>
                  <TextInput
                    placeholder="First Name"
                    value={formik.values.isChecked}
                    onChange={formik.handleChange}
                    type="checkbox"
                    name="isChecked"
                    id="checkbox-id" // Add a unique id for the checkbox
                    label="I have read, understood, and accepted the PRIVACY POLICY for membership. "
                  />

                  <ErrorMessage component="div" name="isChecked" />
                </Container>

                <TextInput
                  placeholder="submit"
                  type="submit"
                  name="lastName" // onBlur={formik.handleBlur}
                />
              </FormContainer>
            </>
            //start of the form
          );
        }}
      </Formik>
    </>
  );
};

export default RegistrationForm;

export { TextInput };
