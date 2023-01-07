import styled from "styled-components";
import { mobile } from "..//responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/premium-photo/beautiful-young-woman-with-shopping-bags-using-her-smart-phone-yellow-background_50889-43.jpg?w=2000")
      center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 1000;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 70%;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 10px;
`;
const Error = styled.span`
  color: red;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: darkcyan;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: teal;
  }
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value.split(" ").join(""))}
          />
          <Input
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="Password"
            type={`password`}
          />
          <Button disabled={false} onClick={handleClick}>
            LOGIN
          </Button>
          {error && <Error>Wrong password or not exist username!</Error>}
          <Link>Forgot Password?</Link>
          <Link>Create account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
