import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import { mobile } from "..//responsive";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import { logout } from "../redux/userRedux";
import { useDispatch,useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "90px" })}
  background-color: #A9A9A9; ;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, JustifyContent: "center" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-family: "Diplomata SC", cursive;
  font-weight: bold;
  color: black;
  ${mobile({ fontSize: "24px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  width: 100%;
  height: 30px;
  background-color: white;
  align-items: center;
  margin-left: 25px;
  padding: 0px 20px;
  border-radius: 10px;
`;

const MenuItems = styled.div`
  font-size: 17px;
  font-family: "Diplomata SC", cursive;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const MenuProduct = styled.div`
  display: flex;
`;
const Product = styled.div`
  font-family: "Diplomata SC", cursive;
  font-size: 17px;
  color: black;
  cursor: pointer;
  margin-left: 65px;
  margin-top: 10px;
  text-decoration: none;
  display: block;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

function Navbar() {
  const user = useSelector((state) => state.user.currentUser);
console.log(user);
  const state=useSelector((state)=>state)
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link style={{ textDecoration: "none" }} to="/" element={<Home />}>
            <Logo>MSND</Logo>
          </Link>
          <MenuProduct>
            <Link style={{ textDecoration: "none" }} to="/BagProducts">
              <Product>Bag</Product>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/TShirtProducts">
              <Product>T Shirt</Product>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/JacketProducts">
              <Product>Jacket</Product>
            </Link>
          </MenuProduct>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontsize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
        
          {
          user? 
          <Link style={{ textDecoration: "none" }} onClick={()=> {dispatch(logout(user));
          console.log(state);}} >
            <MenuItems>Log Out</MenuItems>
          </Link> 
          : <>
          <Link style={{ textDecoration: "none" }} to="/Register">
                <MenuItems>Register</MenuItems>
              </Link>
          <Link style={{ textDecoration: "none" }} to="/Login">
                <MenuItems>Sign In</MenuItems>
            </Link>
            </>
            
            }


              <Link style={{ textDecoration: "none" }} to="/Cart">
                <MenuItems>
                  <Badge
                    overlap="rectangular"
                    badgeContent={quantity}
                    color="primary"
                  >
                    <ShoppingCartOutlined color="action" />
                  </Badge>
                </MenuItems>
              </Link>
              <MenuItems>
                <AccountCircleOutlined color="action" />
              </MenuItems>
            </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
