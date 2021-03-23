import React from 'react';
import {
  ProductContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCar,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductElements';

const Products = ({ heading, data }) => {
  return (
    <ProductContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCar key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCar>
          );
        })}
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Products;