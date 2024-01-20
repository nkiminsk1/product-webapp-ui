import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography color="textSecondary">{product.description}</Typography>
        {/* Add more details as needed */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;