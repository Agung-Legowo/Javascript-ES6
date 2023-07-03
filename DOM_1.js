// Seleksi elemen DOM
const button = document.querySelector('#myButton');
const input = document.querySelector('#myInput');
const output = document.querySelector('#myOutput');

// Menambahkan event listener menggunakan arrow function
button.addEventListener('click', () => {
  // Mengambil nilai dari input
  const inputValue = input.value;
  
  // Mengubah nilai output
  output.textContent = `Halo, ${inputValue}!`;
});
