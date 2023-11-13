const addProduct = () => {
    const productField = document.getElementById("product-name");
    const productQuantity = document.getElementById("product-quantity");
    const product = productField.value;
    const quantity = productQuantity.value;
    productField.value = "";
    productQuantity.value = "";
    displayProduct(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById ("product-container");
    const li = document.createElement ("li");
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem ("cart");
    if (storedCart){
        cart = JSON.parse(storedCart);
    } 
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {

}