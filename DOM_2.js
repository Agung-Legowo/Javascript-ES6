// Seleksi elemen DOM
const container = document.querySelector('.container');

// Data produk
const products = [
  { id: 1, name: 'baju pria', price: 10 },
  { id: 2, name: 'sepatu wanita', price: 20 },
  { id: 3, name: 'jam tangan pria', price: 30 },
];

// Fungsi untuk membuat elemen produk
const createProductElement = (product) => {
  const productElement = document.createElement('div');
  productElement.classList.add('product');

  const nameElement = document.createElement('h3');
  nameElement.textContent = product.name;

  const priceElement = document.createElement('p');
  priceElement.textContent = `$${product.price}`;

  productElement.appendChild(nameElement);
  productElement.appendChild(priceElement);

  return productElement;
};

// Menambahkan elemen produk ke dalam container
products.forEach((product) => {
  const productElement = createProductElement(product);
  container.appendChild(productElement);
});

// Event listener untuk produk yang diklik
container.addEventListener('click', (event) => {
  if (event.target.classList.contains('product')) {
    const productName = event.target.querySelector('h3').textContent;
    console.log(`Anda mengklik produk: ${productName}`);
  }
});
