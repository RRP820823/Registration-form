import styled from "styled-components"

const Error = styled.div`
  color: red;
`

function StyledError({ name, error }: { name: string; error: any }) {
  return <Error>{name} is missing </Error>
}

export { StyledError }
