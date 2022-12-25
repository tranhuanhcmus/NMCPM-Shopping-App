import styled from 'styled-components';
import {mobile} from "..//responsive";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://img.freepik.com/premium-photo/beautiful-young-woman-with-shopping-bags-using-her-smart-phone-yellow-background_50889-43.jpg?w=2000") center;
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
    margin-bottom:10px;
    
`;
const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
        <Wrapper>
             <Title>SIGN IN</Title>
             <Form>
                <Input placeholder = "Email"/>
                <Input placeholder = "Password"/>
                <Button>LOGIN</Button>
                <Link>Forgot Password?</Link>
                <Link>Create account</Link>
             </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
