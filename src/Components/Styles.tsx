import React from "react";
import styled from "styled-components";

const Error = styled.div`
  color: red;
`;

function StyledError({ name, error }: { name: string; error: any }) {
  return <Error>{name} is missing </Error>;
}

//location styles

let StyledLabel = styled.label``;

const StyledOption = styled.option``;
const StyledSelect = styled.select``;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
`;

const Container = styled.div`
  flex-direction: column;
  display: flex;

  flex: 1;
  width: 33.33%;
  gap: 10px;
`;

export const SelectBox = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export { Wrapper, StyledLabel, StyledOption, StyledSelect };
