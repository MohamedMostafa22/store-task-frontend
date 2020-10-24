import React from "react";
import styled from "styled-components";

const ListItemRoot = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: flex-start;
  text-decoration: none;
  padding-left: 16px;
  padding-right: 16px;
`;

const ListItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItemText = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

const ListItemSecondaryText = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: rgba(0, 0, 0, 0.54);
`;

export default function Product({ product, promotion }) {
  return (
    <ListItemRoot>
      <ListItemTextContainer>
        <ListItemText>{product.name}</ListItemText>
        <ListItemSecondaryText>
          {promotion
            ? `Price: ${product.price} => ${
                Number(product.price) -
                Number(product.price) * (Number(promotion.discount) / 100 )
              } (If code "${promotion.code}" is applied)`
            : `Price: ${product.price}`}
        </ListItemSecondaryText>
      </ListItemTextContainer>
    </ListItemRoot>
  );
}
