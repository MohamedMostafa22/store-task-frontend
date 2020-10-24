import React, { useEffect, useMemo, useState } from "react";

import { includes as _includes } from "lodash";

import TextInput from "./components/TextInput";
import DepartmentsTabs from "./components/DepartmentsTabs";
import ProductsList from "./components/ProductsList";
import { getDepartments, getProducts, getPromotions } from "./fetch";

import styled from "styled-components";

const ParentDiv = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const InputsContainer = styled.div`
  text-align: center;
  margin: 16px;
`;

function App() {
  const [products, setProducts] = useState();
  const [departments, setDepartments] = useState();
  const [promotions, setPromotions] = useState();
  const [chosenDepartment, setChosenDepartment] = useState();
  const [searchCriteria, setSearchCriteria] = useState();
  const [enteredPromo, setEnteredPromo] = useState();

  useEffect(() => {
    (async function fetchData() {
      setProducts(await getProducts());
      setDepartments(await getDepartments());
      setPromotions(await getPromotions());
    })();
  }, []);

  const displayedProducts = useMemo(() => {
    let filteredProducts = products;
    if (!enteredPromo) {
      if (chosenDepartment)
        filteredProducts = products.filter(
          (product) => product.department_id === chosenDepartment
        );
      if (searchCriteria)
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(searchCriteria)
        );
    } else {
      const matchingPromos = promotions.filter(
        (promo) => promo.code === enteredPromo
      );
      const productIds = matchingPromos.map((promo) => promo.product_id);
      filteredProducts = products.filter((product) =>
        _includes(productIds, product.id)
      );
    }

    return filteredProducts;
  }, [chosenDepartment, searchCriteria, products, enteredPromo, promotions]);

  return (
    <ParentDiv>
      <InputsContainer>
        <TextInput
          value={searchCriteria}
          onChange={(evt) => setSearchCriteria(evt.target.value)}
          label="Search"
          disabled={enteredPromo}
        />
        <TextInput
          value={enteredPromo}
          onChange={(evt) => {
            setSearchCriteria("");
            setEnteredPromo(evt.target.value);
          }}
          label="Enter Promotion"
        />
      </InputsContainer>
      <DepartmentsTabs
        departments={departments}
        onDepartmentChange={(departmentId) => setChosenDepartment(departmentId)}
      />
      <ProductsList products={displayedProducts} promotions={promotions} />
    </ParentDiv>
  );
}

export default App;
