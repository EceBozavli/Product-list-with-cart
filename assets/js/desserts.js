products = [
  {
   id: 1, 
   img: "./assets/img/Waffle.png",
   category:"Waffle",
   name: "Waffle with Berries",
   price: 6.50,
   quantity: 0
  },
  {
    id: 2,
    img: "./assets/img/Creme-Brulee.png",
    category:"Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7.00,
    quantity: 0 
  },
  { 
    id: 3,
    img:"./assets/img/Macaron.png",
    category:"Macaron",
    name: "Macaron Mix of Five",
    price: 8.00,
    quantity: 0 
  },
  {
    id: 4,
    img:"./assets/img/Tiramisu.png",
    category:"Tiramisu",
    name: "Classic Tiramisu",
    price: 5.50,
    quantity: 0
  },
  {
    id: 5,
    img:"./assets/img/Baklava.png",
    category:"Baklava",
    name: "Pistachio Baklava",
    price: 4.00,
    quantity: 0
  },
  {
    id: 6,
    img:"./assets/img/Pie.png",
    category:"Pie",
    name: "Lemon Meringue Pie",
    price: 5.00,
    quantity: 0
  },
  {
    id: 7,
    img:"./assets/img/Cake.png",
    category:"Cake",
    name: "Red Velvet Cake",
    price: 4.50,
    quantity: 0
  },
  {
    id: 8,
    img:"./assets/img/Brownie.png",
    category:"Brownie",
    name: "Salted Caramel Brownie",
    price: 5.50,
    quantity: 0
  },
  {
    id: 9,
    img:"./assets/img/Panna-Cotta.png",
    category:"Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.50,
    quantity: 0
  },
];
/**
const products = document.querySelectorAll('.products button');
const orderList = document.querySelector('.orders');
const orders =[];

function renderOders() {
  orderList.innerText ='';
  for(const order of orders) {
    orderList.innerHTML += `<li>${order.name} x${order.quantity} </li>`
  }
}

function addOrder() {
  const orderName = this.innerText;
  const order = orders.find(x => x.name ===orderName);
  if(order) {
    order.quantity++;
  } else {
    orders.push(
      {
        name: orderName,
        quantity: 1
      }
    );
  }
  renderOders();
}

for (const product of products) {
  product.addEventListener('click', addOrder);
}
 */

const urunler = document.querySelector('.productList');
const orderList = document.querySelector('.orders');
 const orders =[];

function showPr() {
  urunler.innerHTML ='';
  for (const product of products) {
    urunler.innerHTML += `
      <div class="inner">
          <img src="${product.img}" class="prImg">
          <br><button class="addBtn" data-id="${product.id}">
                <img class="avatar" src="assets/img/avatar.png" alt="avatar">
                <span class="text">Add to Cart</span>
              </button>
          <p class="prCategory">${product.category}</p>
          <h3 class="prName">${product.name}</h3>
          <p class="prPrice">$ ${product.price}</p> 
          <p class="prQuantity">piece x${product.quantity}</p>
      </div>
    `; 
  }

  
  const addBtns = document.querySelectorAll('.addBtn');

  for(const btn of addBtns) {
    btn.addEventListener('click', sonucuBul); 
  }
}
function sonucuBul() {
  const productId = this.getAttribute('data-id');
  const product = products.find(x => x.id == productId);
  if(product) {
    product.quantity++;
    orderList.innerHTML = `<li>${product.name} x ${product.quantity}</li>`
    showPr();
  }else {
    orders.push(
      {
        id: productId,
        quantity: 1
        
      }
    )
  }
  renderOders();
};

showPr();








