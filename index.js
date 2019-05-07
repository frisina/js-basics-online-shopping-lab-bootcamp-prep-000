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
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    var firstItem = Object.keys(cart[0]);
    var oneItem = "In your cart, you have " + firstItem;
    //var oneItem = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}`;
    return oneItem;
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
