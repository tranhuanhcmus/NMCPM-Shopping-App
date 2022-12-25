
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import {mobile} from "..//responsive";
const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px",flexDirection:"column" })}
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "30vh",width: "150px" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin:  30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px; 
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;   
`;

const FilterSizeOption = styled.option`
    
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/314472625_1350375295790632_987885955674058759_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7dNBwHzvUtYAX9acdtj&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdRl0jfLziyB0onQ3BCWP-JvEVwnDPC7QrpTEl8s5_H3rA&oe=63C56B39" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Badhabit jacket</Title>
                    <Desc>Herlo Herlo  Herlo Herlo Herlo Herlo</Desc>
                    <Price>50$</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="Black" />
                            <FilterColor color="Red" />
                            <FilterColor color="Yellow" />
                            <FilterColor color="Blue" />
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XXL</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                
                            </FilterSize>
                        </Filter>

                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <RemoveCircleOutline/>
                            <Amount>3</Amount>
                            <AddCircleOutline/>
                        </AmountContainer>
                        <Button>ADD CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

        </Container>
    )
}

export default Product
