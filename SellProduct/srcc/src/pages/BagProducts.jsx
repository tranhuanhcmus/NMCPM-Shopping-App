import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import ListBag from '../components/ListBag';
import Navbar from '../components/Navbar';
import {mobile} from "..//responsive";

const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px",display:"flex",flexDirection:"column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option`

`;
const BagProducts = () => {
  return (
    <Container>
        <Navbar/>
        <Title>Deresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                  <Option disabled selected>Color</Option>
                  <Option>Red</Option>
                  <Option>White</Option>
                  <Option>Black</Option>
                  <Option>Green</Option>
                  <Option>Pink</Option>
                </Select>

                <Select>
                  <Option disabled selected>Size</Option>
                  <Option>XXL</Option>
                  <Option>XL</Option>
                  <Option>L</Option>
                  <Option>M</Option>
                  <Option>S</Option>

                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Product:</FilterText>
                <Select>
                  <Option disabled selected>Newest</Option>
                  <Option>Price(asc)</Option>
                  <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <ListBag/>
        <Footer/>
    </Container>
  )
}

export default BagProducts
