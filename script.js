
    const productSelect = document.getElementById('productSelect');
    const productDetails = document.getElementById('productDetails');
    let allProducts = [];

    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      allProducts = await response.json();

      allProducts.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.title;
        productSelect.appendChild(option);
      });
    }

    productSelect.addEventListener('change', () => {
      const selectedId = productSelect.value;
      if (!selectedId) {
        productDetails.innerHTML = '';
        return;
      }

      const selectedProduct = allProducts.find(p => p.id == selectedId);
      productDetails.innerHTML = `
        <h3>${selectedProduct.title}</h3>
        <img src="${selectedProduct.image}" alt="${selectedProduct.title}">
        <p><strong>Description:</strong> ${selectedProduct.description}</p>
        <p><strong>Price:</strong> $${selectedProduct.price}</p>
      `;
    });

    fetchProducts();
  
