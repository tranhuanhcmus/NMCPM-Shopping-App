import styled from 'styled-components'
import { JACKETS } from '../data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
`;
const ListJacket = () => {
  return (
    <Container>
      {JACKETS.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default ListJacket
