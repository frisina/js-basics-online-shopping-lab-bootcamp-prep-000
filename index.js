var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemObject = new Object();

 itemObject.itemName = item;
 itemObject.itemPrice = Math.floor(Math.random() * 101);

 cart.push(itemObject);
 return `${itemObject.itemName} has been added to your cart.`
}

function viewCart() {
  var text = "In your cart, you have"
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    text = text + ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
    //var oneItem = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}`;
    return text;
  } else if (cart.length === 2) {
    return text;
  }
}



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
