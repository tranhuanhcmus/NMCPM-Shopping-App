import {Facebook,Twitter,Instagram, MailOutline, Phone, Room} from "@material-ui/icons";
import styled from 'styled-components'
import {mobile} from "..//responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
    
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 40px;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;



const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;
const Right = styled.div`
    flex: 1;   
    padding: 20px; 
    ${mobile({ backgroundColor: "#fff8f8" })}

`;

const Title = styled.h3`
    margin: 10px 0px;
`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column; 
`;

const ListItems = styled.li`
    width: 50%;
    
    margin-bottom: 10px;
`;

const ContactItem = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MSND.</Logo>
            <Desc>
                We provide local brand products of Vietnam
            </Desc>
            <SocialContainer>
                <SocialIcon color ="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color ="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color ="55ACEE">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Usefull link</Title>
            <List>
                <Link to ="/BackHome"><ListItems>Home</ListItems></Link>
                <Link style ={{textDecorationL:'none'}} to = "/Cart"><ListItems>Cart</ListItems></Link>
                <Link to = "/BackTShirtProducts"><ListItems>T Shirt</ListItems></Link>
                <Link to ="/BackBagProducts"><ListItems>Bag</ListItems></Link>
                <Link to ="/BackJacketProducts"><ListItems>Jacket</ListItems></Link>
               

            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style = {{marginRight:"10px"}}/>404/49 Nguyen Dinh Chieu, district 3, HCM city</ContactItem>
            <ContactItem><Phone style = {{marginRight:"10px"}}/>+84 917314585</ContactItem>
            <ContactItem><MailOutline style = {{marginRight:"10px"}}/>hoa.nsh15@gmail.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer
