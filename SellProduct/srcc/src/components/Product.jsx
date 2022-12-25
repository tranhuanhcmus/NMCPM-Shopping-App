
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, } from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0,0,0,0.2);  
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
`; 

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  gray;
    position: relative;
    &: hover ${Info}{
        opacity: 1;
    }
`;


const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: cornsilk;
    justify-content: center;
    align-items: center;
    display: flex;   
    margin: 10px;
    cursor: pointer;
    transition: all 1s ease;
    &:hover{
        background-color: lightcyan;
        transform: scale(1.1);
    }
`;

const Product = ({ item }) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;