const BASE_API_URI = "http://localhost:8080/api";

async function getProducts() {
  try {
    const products = await fetch(`${BASE_API_URI}/products`);
    return await products.json();
  } catch (e) {
    return;
  }
}

async function getDepartments() {
  try {
    const departments = await fetch(`${BASE_API_URI}/departments`);
    return await departments.json();
  } catch (e) {
    return;
  }
}

async function getPromotions() {
  try {
    const promotions = await fetch(`${BASE_API_URI}/promotions`);
    return await promotions.json();
  } catch (e) {
    return;
  }
}

export { getProducts, getDepartments, getPromotions };
