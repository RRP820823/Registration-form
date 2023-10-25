import styled from "styled-components"

let Error = styled.p`
  color: red;
`

const StyledEror = ({ errorMesage }: { errorMesage: string }) => {
  return <Error>{errorMesage?.toLowerCase()}</Error>
}

export { StyledEror }
