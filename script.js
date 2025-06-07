const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=9');
    const products = await response.json();
    return products;
}

console.log(getProducts);

const renderProducts = async () => {
    const products = await getProducts()
    const container = document.querySelector('.products-container')
    for (const item of products) {
        const productWrapper = document.createElement('li');
        const productTitle = document.createElement('h4');
        const productImage = document.createElement('img');
        const productDescription = document.createElement('p');
        const productPriceSection = document.createElement('section');
        const productPrice = document.createElement('span');
        const productAddBtn = document.createElement('button');

        productWrapper.classList.add("product-item");
        productPriceSection.classList.add("product-item-price");
        productImage.src = item.image;
        productTitle.innerText = item.title;
        productDescription.innerText = item.description;
        productPrice.innerText = item.price;
        productAddBtn.innerText = 'Add to cart'

        productPriceSection.append(productPrice, productAddBtn);
        productWrapper.append(
            productTitle,
            productImage,
            productDescription,
            productPriceSection);
        container.append(productWrapper)
    }
}

renderProducts();