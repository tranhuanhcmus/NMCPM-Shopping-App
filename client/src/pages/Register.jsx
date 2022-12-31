import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from "..//responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://img.freepik.com/premium-photo/beautiful-young-woman-with-shopping-bags-using-her-smart-phone-yellow-background_50889-43.jpg?w=2000") center;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
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
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    align-items: center;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border-radius: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: darkcyan;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
        background-color: teal;
    }
    
`;
const Register = () => {
  return (
    <Container>
        <Wrapper>
             <Title>CREATE AN ACCOUNT</Title>
             <Form>
                <Input placeholder = "Name" />
                <Input placeholder = "Last Name"/>
                <Input placeholder = "Email"/>
                <Input placeholder = "UserName"/>
                <Input placeholder = "Password"/>
                <Input placeholder = "ConfirmPassword"/>
                <Agreement>By creating an account, I consent to the processing of my persional data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>

             </Form>
        </Wrapper>
        <Link to ="/Register"></Link>
    </Container>
  )
}

export default Register
