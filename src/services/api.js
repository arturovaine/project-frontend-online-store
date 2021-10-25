export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const dataJSON = await data.json();
  return dataJSON;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const dataJSON = await data.json();
  return dataJSON;
}
