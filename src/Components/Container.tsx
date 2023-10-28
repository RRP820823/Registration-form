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
}: {
  children?: React.ReactNode;
  label?: any;
}) {
  return (
    <StyledContainer label={label}>
      <div>{label !== "submit" && <p>{label}</p>}</div>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {children}
      </div>
    </StyledContainer>
  );
}
