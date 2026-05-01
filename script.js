let cart = JSON.parse(localStorage.getItem("cart")) || [];

function add(name, price){
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
alert("تمت الإضافة");
}

function showCart(){
let list = document.getElementById("cart");
let total = 0;
list.innerHTML = "";

cart.forEach(item=>{
list.innerHTML += `<li>${item.name} - ${item.price}$</li>`;
total += item.price;
});

document.getElementById("total").innerText = total + "$";
}

function checkout(){
let msg = "طلب:\n";
cart.forEach(i=>{
msg += i.name + " - " + i.price + "$\n";
});
window.open("https://wa.me/213XXXXXXXXX?text=" + encodeURIComponent(msg));
}
