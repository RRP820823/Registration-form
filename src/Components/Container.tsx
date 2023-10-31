// import { StyledError } from "./Styles"

import styled from "styled-components";

let StyledContainer = styled.div<{ label: string }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: "10px";
  width: ${(props) => props.label === "submit" && "9.2em"};
`;

export default function Container({
  children,
  label,
  formik,
  onChange,
}: {
  children?: React.ReactNode;
<<<<<<< HEAD
  label?: any;
=======
  label?: string;
  formik?: any;
  onChange?: any;
>>>>>>> 09cc3f7fae5af368cfed423afcfece74356fdb58
}) {
  return (
    <StyledContainer label={label}>
      <div>{label !== "submit" && <p>{label}</p>}</div>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {children}
      </div>
<<<<<<< HEAD
    </StyledContainer>
=======
    </div>
>>>>>>> 09cc3f7fae5af368cfed423afcfece74356fdb58
  );
}
