const ProductsPage = async () => {
  const response = await fetch('http://localhost:3001/products');
  //backend gets the data from psql database and displays it as json data
  const products = await response.json();
  // tells the app to read the response as json 

  return (
    <main>
      <h1>Products</h1>
      <div>{JSON.stringify(products)}</div>
      {/* JSON.stringify: turns objects to text */}
    </main>
  );
};

export default ProductsPage;
