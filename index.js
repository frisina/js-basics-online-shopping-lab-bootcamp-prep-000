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
  var text = "In your cart, you have ";
  if (cart.length === 0) {
    var text = "Your shopping cart is empty.";
    return text;
  } else
    { for(var i = 0; i < cart.length - 1; i++) {
    text += item.itemName + " at " + item.itemPrice + ",";
    }
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
