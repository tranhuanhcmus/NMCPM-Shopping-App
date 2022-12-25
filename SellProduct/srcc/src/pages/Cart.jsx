import { AddCircle, RemoveCircle } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile} from "..//responsive";


const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
    
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type==="filled"&&"none"};
    background-color: ${(props)=>props.type==="filled"?"black": "transparent"};
    color: ${(props)=>props.type==="filled"&&"white"};
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;


const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

`;
const Info = styled.div`
    flex: 3;
`;


const Product = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
    
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const ProductImage = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`
    
`;

const ProductId = styled.span`
    
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
`;

const ProductSize = styled.span`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PriceDetail = styled.div`
    flex: 1;
`;

const ProductAmountContainer = styled.div`  
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;


const ProductAmount = styled.div`
    font-size: 24px;
    margin: 10px;
`;
const ProductPrice = styled.div`
    font-size: 30px;    
    font-weight: 200;
`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props)=>props.type==="total"&&"1000"};
    font-size: ${(props)=>props.type==="total"&&"24px"};
`;

const SummaryItemPrice = styled.span`
    
`;

const SummaryItemText = styled.span`
    
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 1000;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>COUNTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type = "filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <ProductImage src = "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.15752-9/315178735_1211516076242146_80799171001670039_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=bO9PMYQ0tLkAX_dXC7R&_nc_ht=scontent.fsgn5-6.fna&oh=03_AdRnqIpBH5yswxNL-_3yxnsheRwrQZpY40skg_qLipef1Q&oe=63C65AD8"/>
                                <Details>
                                    <ProductName><b>Product:</b> BAD RABIT T SHIRT</ProductName>
                                    <ProductColor color="black"/>
                                    <ProductId><b>ID:</b> 05012002</ProductId>
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddCircle/>
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveCircle/>
                                </ProductAmountContainer>
                                <ProductPrice>30$</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>

                        <Product>
                            <ProductDetail>
                                <ProductImage src = "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/319558529_672266601050294_5319397930419732435_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=r56dTTDWRL8AX8BD0lQ&_nc_oc=AQk6cr8mL8zL-cmotyppizpb8bIzBtgGKBFQrpxU12GuFvB5ZNdp_gtEFfMeuuIpeBw&tn=8H3ivP8Res3CkJuk&_nc_ht=scontent.fsgn5-5.fna&oh=03_AdTrJDP7_lMgtC9x_C-mW6n7kXgjCPAiaLK5IiWw6zw59A&oe=63C65DEA"/>
                                <Details>
                                    <ProductName><b>Product:</b> BAD RABIT JACKET</ProductName>
                                    <ProductColor color="Brown"/>
                                    <ProductId><b>ID:</b> 05012003</ProductId>
                                    <ProductSize><b>Size:</b> L</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddCircle/>
                                    <ProductAmount>1</ProductAmount>
                                    <RemoveCircle/>
                                </ProductAmountContainer>
                                <ProductPrice>80$</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtatal</SummaryItemText>
                            <SummaryItemPrice>140$</SummaryItemPrice>
                        </SummaryItem>

                        
                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice>5$</SummaryItemPrice>
                        </SummaryItem>

                        
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-5$</SummaryItemPrice>
                        </SummaryItem>

                       
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>140$</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />


        </Container>
    )
}

export default Cart
