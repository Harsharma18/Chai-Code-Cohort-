let cartItems = {};
let cartContainer = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");

function addToCart(productName, price) {
  if (cartItems[productName]) {
    cartItems[productName].quantity++;
  } else {
    cartItems[productName] = { price, quantity: 1 };
  }
  console.log("Object Cart:", cartItems);
  updateCart();
}

function removeFromCart(productName) {
  if (cartItems[productName]) {
    cartItems[productName].quantity--;
    if (cartItems[productName].quantity <= 0) {
      delete cartItems[productName];
    }
  }
  updateCart();
}

function cancelItemFromCart(productName) {
  delete cartItems[productName];
  updateCart();
}

function updateCart() {
  let total = 0;
  cartContainer.innerHTML = "";

  if (Object.keys(cartItems).length === 0) {
    cartContainer.innerHTML = "<div class='empty-cart'>Cart is empty</div>";
  } else {
    Object.keys(cartItems).forEach((productName) => {
        // console.log("object key",productName);
      const item = cartItems[productName];
      const subtotal = item.price * item.quantity;
      total += subtotal;

      let div = document.createElement("div");
      div.innerHTML = `
        <p>${productName}</p>
        <div>
          <button onclick="removeFromCart('${productName}')">-</button>
          ${item.quantity}
          <button onclick="addToCart('${productName}', ${item.price})">+</button>
          $${subtotal.toFixed(2)}
          <button onclick="cancelItemFromCart('${productName}')">Remove</button>
        </div>
      `;
      cartContainer.appendChild(div);
    });
  }

  cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}
// let cartItems = [];
// let cartContainer = document.getElementById("cart-items");
// let cartTotal = document.getElementById("cart-total");

// function addToCart(productName, price) {
//   let found = false;
//   for (let item of cartItems) {
//     if (item.name === productName) {
//       item.quantity++;
//       found = true;
//       break;
//     }
//   }
//   if (!found) {
//     cartItems.push({ name: productName, price, quantity: 1 });
//   }
//   console.log("Array Cart:", cartItems);
//   updateCart();
// }

// function removeFromCart(productName) {
//   for (let i = 0; i < cartItems.length; i++) {
//     if (cartItems[i].name === productName) {
//       cartItems[i].quantity--;
//       if (cartItems[i].quantity <= 0) {
//         cartItems.splice(i, 1);
//       }
//       break;
//     }
//   }
//   updateCart();
// }

// function cancelItemFromCart(productName) {
//   cartItems = cartItems.filter((item) => item.name !== productName);
//   updateCart();
// }

// function updateCart() {
//   let total = 0;
//   cartContainer.innerHTML = "";

//   if (cartItems.length === 0) {
//     cartContainer.innerHTML = "<div class='empty-cart'>Cart is empty</div>";
//   } else {
//     cartItems.forEach((item) => {
//       const subtotal = item.price * item.quantity;
//       total += subtotal;

//       let div = document.createElement("div");
//       div.innerHTML = `
//         <p>${item.name}</p>
//         <div>
//           <button onclick="removeFromCart('${item.name}')">-</button>
//           ${item.quantity}
//           <button onclick="addToCart('${item.name}', ${item.price})">+</button>
//           $${subtotal.toFixed(2)}
//           <button onclick="cancelItemFromCart('${item.name}')">Remove</button>
//         </div>
//       `;
//       cartContainer.appendChild(div);
//     });
//   }

//   cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
// }
