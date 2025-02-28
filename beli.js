
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseInt(this.getAttribute("data-price"));
            const image = this.parentElement.querySelector("img").src;
            
            addToCart(name, price, image);
        });
    });
});

function addToCart(name, price, image){
    let cart =JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produk Masuk Keranjang Boyy");
}

function displayCart(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
    
    let totalPrice = 0;
    cart.forEach((item, index) =>{
        let productTotal = item.price * item.quantity;
        totalPrice += productTotal;
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
        <img src= "${item.image}" alt="${item.name}" class="product-image">
        <div class = "product-info">
        <h4>${item.name}</h4>
        <p>Jumlah : ${item.quantity}</p>
        <p>Harga Per-Item : Rp. ${item.price.toLocaleString()}</p>
        <p>Total : Rp. ${productTotal.toLocaleString()}</p>
        </div>
        `;

        cartContainer.appendChild(productCard);
    })
    let discount = totalPrice * 0.05;
    let finalTotal = totalPrice - discount;

    document.getElementById("total-price").textContent = `Rp. ${totalPrice.toLocaleString()}`;
    document.getElementById("discount").textContent = `Rp. ${discount.toLocaleString()}`;
    document.getElementById("final-total").textContent = `Rp. ${finalTotal.toLocaleString()}`;
}
function checkout(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0){
        alert("Tidak ada item di keranjang!")
        return;
    }

    let customerName = document.getElementById("customer-name").value.trim();
    let customerPhone = document.getElementById("customer-phone").value.trim();
    let customerAddress = document.getElementById("customer-address").value.trim();

    if (!customerName || !customerPhone || !customerAddress){
        alert ("Silahkan isi nama,nomor, dan alamat pengiriman");
        return;
    }
    let order ={
        name: customerName,
        phone: customerPhone,
        address: customerAddress,
        total: document.getElementById("final-total").textContent,
    };
    localStorage.setItem("order", JSON.stringify(order));
    localStorage.removeItem("cart");

    alert("Pesanan Berhasil Dibuat! Terimakasih telah berbelanja");
    window.location.href = "index.html";
}