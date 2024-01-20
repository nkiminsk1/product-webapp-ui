import React from 'react';
import { Container, Grid } from '@material-ui/core';
import ProductCard from '../components/ProductCard';

//TODO make this dynamic. Will need to write a hook to pull in products
// that are for sale
const products = [
  { id: 1, name: 'Product 1', description: 'Description 1' },
  { id: 2, name: 'Product 2', description: 'Description 2' },
];

const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
