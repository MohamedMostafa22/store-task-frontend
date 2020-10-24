import React, { useState } from "react";

import styled from "styled-components";
import Product from "./Product";

const PRODUCTS_PER_PAGE = 7;

const Ul = styled.ul`
  list-style-type: none;
  text-align: center;
  background-color: white;
  margin: 0;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 40%;
  margin-left: 30%;
  border-radius: 10px;
`;

const PaginationContainer = styled.div`
  text-align: center;
`;

const PaginationButton = styled.button`
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 5px;
  margin: 4px;
  border: 0;
  background-color: inherit;
  opacity: 0.5;
`;

export default function ProductsList({ products, promotions }) {
  const [currentPage, setCurrentPage] = useState(0);
  const { displayedProducts, pagesCount } = (() => {
    if (Array.isArray(products)) {
      const displayedProducts = products.slice(
        PRODUCTS_PER_PAGE * currentPage,
        PRODUCTS_PER_PAGE * currentPage + PRODUCTS_PER_PAGE
      );
      const pagesCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);
      return {
        displayedProducts,
        pagesCount: pagesCount > 1 ? Array.from(Array(pagesCount).keys()) : [],
      };
    }
    return {
      displayedProducts: products,
      pagesCount: [],
    };
  })();

  return (
    <>
      <Ul>
        {Array.isArray(displayedProducts) &&
          displayedProducts.map((product) => (
            <Product
              product={product}
              promotion={
                Array.isArray(promotions) &&
                promotions.find((promo) => promo.product_id === product.id)
              }
              key={product.id}
            />
          ))}
      </Ul>
      <PaginationContainer>
        {pagesCount.length !== 0 &&
          pagesCount.map((index) => (
            <PaginationButton
              key={index}
              onClick={() => setCurrentPage(index)}
              style={{
                opacity: currentPage === index && 1,
              }}
            >
              {index + 1}
            </PaginationButton>
          ))}
      </PaginationContainer>
    </>
  );
}
