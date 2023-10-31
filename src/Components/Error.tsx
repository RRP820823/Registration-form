// import React from "react";
// import styled from "styled-components";

// let Error = styled.p`
//   color: red;
// `;

// const StyledEror = ({ children }: { children: React.ReactNode }) => {
//   return <Error>{children}</Error>;
// };

// export { StyledEror };

// interface StyledErrorProps {
//   children: React.ReactNode;
// }

// const StyledError: React.FC<StyledErrorProps> = ({ children }) => (
//   <div style={{ color: "red", fontSize: "0.8em", marginTop: "5px" }}>
//     {children}
//   </div>
// );

interface StyledErrorProps {
  children?: React.ReactNode;
  name?: string;
}

const StyledError: React.FC<StyledErrorProps> = ({ children }) => (
  <div style={{ color: "red", fontSize: "0.8em", marginTop: "5px" }}>
    {children}
  </div>
);

export { StyledError };
