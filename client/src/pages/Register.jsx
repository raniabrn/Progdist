import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color : rgb(224,205,169);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 17px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-family: "Poppins" sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
display: block;
border: none;
outline: none;
font-size: 1.7rem;
font-weight: 510;
text-transform: uppercase;
letter-spacing: 1px;
border-radius: 5px;
cursor: pointer;
color: white;
border-radius: 8px;
background-color: black;
position: relative;
width: 100%;
height: 60px;
left: -1%;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title><b>CREATE AN ACCOUNT</b></Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
