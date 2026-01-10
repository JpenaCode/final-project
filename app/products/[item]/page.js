const ItemPage = async ({ params }) => {
  // params: contains values taken from the url (ex. params = {item: "iphone-17-pro"})
  const { item } = await params;
  // { item } : take the value named item out of the params

// the user request ^
// the app responds with v

  const response = await fetch(`http://localhost:3001/products/${item}`);
  const product = await response.json();

  

  return (
    <main>
      <h1>{product.name}</h1>
      <div>{JSON.stringify(product)}</div>
    </main>
  );
};

export default ItemPage;

