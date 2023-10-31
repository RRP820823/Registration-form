import "./App.css";
import Location from "./Components/Location";
<<<<<<< HEAD

import React, { useState, ChangeEvent } from "react";
=======
import React, { ChangeEvent } from "react";
>>>>>>> 09cc3f7fae5af368cfed423afcfece74356fdb58
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import Container from "./Components/Container";

<<<<<<< HEAD
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { StyledEror } from "./Components/Error";
=======
import { Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { StyledError } from "./Components/Error";
>>>>>>> 09cc3f7fae5af368cfed423afcfece74356fdb58

//  made changes
// Styled Components
const FormContainer = styled.form<{ onChange?: any }>`
  margin: 0 auto;
  max-width: 750px;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FlexContainer = styled.div`
  display: flex;
  :last-child {
<<<<<<< HEAD
    margin: 0;
  }
  @media (width < 768px) {
    :last-child {
      margin: 0;
    }
    :first-child {
      margin: 0;
    }
    flex-direction: column;
  }
=======
    margin-right: 0;
  }
  /* justify-content: space-between; */
  /* border: 1px solid black; */
  /* margin-bottom: 15px; */
  /* width: 100%; */
>>>>>>> 09cc3f7fae5af368cfed423afcfece74356fdb58
`;

const InputContainer = styled.div<{ name?: any }>`
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

const Label = styled.label<{ type?: string }>`
  margin-bottom: 5px;
  display: flex;
  flex: 1;
  height: 100%;
  color: black;
`;

const SubmitButton = styled.button`
  color: #fff;
  font-weight: 700;
  min-width: 9.2em;
  border-radius: 0 !important;
  background-color: #313131 !important;
  min-height: 3.4em;
`;
// const Input = styled.input<{ icon?: any }>`
//   width: ${(props) =>
//     props.type === "checkbox" || props.type === "radio" ? "40px" : "100%"};
//   padding: 8px;
//   border: none;
//   outline: none;
//   background-color: transparent;
//   margin: ${(props) => props.type === "checkbox" && "10px"};
// `;

const Input = styled.input<{ icon?: any }>`
  width: ${(props) =>
    props.type === "checkbox" || props.type === "radio" ? "40px" : "100%"};
  padding: 8px;
  border: none;
  outline: none;
  background-color: transparent; // Ensure transparent background
  margin: ${(props) => props.type === "checkbox" && "10px"};
  appearance: ${(props) => props.type === "checkbox" && "none"};
  background: ${(props) => props.type === "checkbox" && "red"};
  -webkit-appearance: ${(props) => props.type === "checkbox" && "none"};
  background-color: #f7d0cb;
  cursor: ${(props) => props.type === "checkbox" && "none"};
`;

//  Icon wrapper

const StytedIcon = styled.div<{ type?: any }>`
  width: 3em;
  /* height: 3.5em; */
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
  background-color: transparent; // Add this line
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 750px;
  width: 100%;
  padding-bottom: 0;
  margin-top: 1.7em;
  margin: 40px auto;
`;

function IconWrappeer({
  children,
  type,
}: {
  children?: React.ReactNode;
  type?: string;
}) {
  return <StytedIcon>{children}</StytedIcon>;
}

// TextInput Component
const TextInput: React.FC<{
  showIcon?: boolean;
  label?: string;
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
<<<<<<< HEAD
  type:
=======
  type?:
>>>>>>> 09cc3f7fae5af368cfed423afcfece74356fdb58
    | "text"
    | "checkbox"
    | "checkbox"
    | "radio"
    | "tel"
    | "date"
    | "number"
<<<<<<< HEAD
    | "submit";
=======
    | any;
>>>>>>> 09cc3f7fae5af368cfed423afcfece74356fdb58
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
  showIcon,
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
      {icon ? <IconWrappeer>{icon}</IconWrappeer> : null}

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
        required
      />
      {/* {type === "radio" || type === "checkbox" ? (
        <>
          <Label type={type} htmlFor={id}>
            {label}
          </Label>
        </>
      ) : null} */}

      {type === "radio" && (
        <>
          <Label type={type} htmlFor={id}>
            {label}
          </Label>
        </>
      )}

      {type === "checkbox" && (
        <>
          <Label
            style={{ display: "flex", gap: "10px" }}
            type={type}
            htmlFor={id}
          >
            <p>
              {label}
              <span>
                <u>Terms and Condition</u>
              </span>
            </p>
          </Label>
        </>
      )}
    </InputContainer>
  );
};

// RegistrationForm Component

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

<<<<<<< HEAD
  // const [startDate, setStartDate] = useState(new Date());

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
    e.preventDefault(); //Prevents the form from submitting and triggering a page reload

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
    return /^\d+$/.test(telephone);
  }
  return (
    <>
      {submitting ? <p>form submitted</p> : null}

      <Header>
        <h3 style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
          Registration Form
        </h3>
      </Header>
      <FormContainer onSubmit={handelSubmit}>
        <Container label="1.Name">
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
=======
  return (
    <>
      {/* {submitting ? <p>form submitted</p> : null} */}
>>>>>>> 09cc3f7fae5af368cfed423afcfece74356fdb58

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

<<<<<<< HEAD
        <Container label="2.E-mail">
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
        <Container label="3.Telephone">
          <TextInput
            label="Telephone"
            onChange={handelChange}
            type="tel"
            name="Telephone"
            icon={<BsTelephone />}
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
            icon={<CiLocationOn />}
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
            showIcon={false}
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
=======
>>>>>>> 09cc3f7fae5af368cfed423afcfece74356fdb58
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
<<<<<<< HEAD
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
            id="checkbox-id"
            label="I have read, understood, and accepted the PRIVACY POLICY for membership "
          />

          {Object.keys(error).length > 0 && (
            <StyledEror errorMesage={error.isChecked} />
          )}
        </Container>

        <Container label="submit">
          <SubmitButton type="submit">Submit</SubmitButton>
        </Container>
      </FormContainer>
=======
            //start of the form
          );
        }}
      </Formik>
>>>>>>> 09cc3f7fae5af368cfed423afcfece74356fdb58
    </>
  );
};

export default RegistrationForm;

export { TextInput };
