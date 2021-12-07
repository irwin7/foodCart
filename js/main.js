let elTempShopItem = document.querySelector("#shop-item").content;
let elTempCartItem = document.querySelector("#cart-item").content;
let elCostTemp = document.querySelector("#cost").content;
let elShopBox = document.querySelector(".shop-box");
let elCartBox = document.querySelector(".cart__inner-box");
let elCost = document.querySelector(".cost");
let price = 0;

for(let item of foods){
  let shopTemp = elTempShopItem.cloneNode(true);
  shopTemp.querySelector(".shop-box__img").src = item.img;
  shopTemp.querySelector(".shop-box__title").textContent = item.name;
  shopTemp.querySelector(".price").textContent = item.price;
  shopTemp.querySelector(".id").textContent = item.id;
  elShopBox.append(shopTemp);
};
let elAddBtn = document.querySelectorAll(".shop-box__btn");

for(let item of elAddBtn){
  let itemId = Number(item.parentElement.querySelector(".id").textContent - 1);
  item.addEventListener("click",()=>{
    let cartTemp = elTempCartItem.cloneNode(true);
    cartTemp.querySelector(".cart-box__img").src = foods[itemId].img;
    cartTemp.querySelector(".cart-box__title").textContent = foods[itemId].name;
    cartTemp.querySelector(".price").textContent = foods[itemId].price;
    elCartBox.append(cartTemp);

    price += foods[itemId].price;
    let tax = price * 0.13;
    let subtotal = price + tax;

    elCost.innerHTML = "";
    let costTemp = elCostTemp.cloneNode(true);
    costTemp.querySelector(".subtotal-price").textContent += price.toFixed(0);
    costTemp.querySelector(".tax-price").textContent += tax.toFixed(2);
    costTemp.querySelector(".total-price").textContent += subtotal.toFixed(2);
    elCost.append(costTemp);
  });
};