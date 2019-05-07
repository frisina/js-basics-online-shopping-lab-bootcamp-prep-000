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
    { 
      var newarray = [];
      for (var i = 0; i < cart.length; i++)
        {
          var keys = Object.keys(cart[i])[0];
          newarray.push(keys + " at $" + cart[i][keys])
        }
        if (newarray.length === 1) {
          text += newarray + ".";
        } else if (newarray.length === 2) {
          text += (newarray[0] + " and " + newarray[1] + ".")
        } else if (newarray.length > 2) {
          var lastelement = newarray.pop()
          var other_item = newarray.join(", ")
          text += (other_item + ", and " + lastelement + ".")  
        }
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
