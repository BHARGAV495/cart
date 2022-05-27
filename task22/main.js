addEventListener("click")callback
let carts = document.querySelectorAll('.add-cart');



let product = [
  {
    name: "kanakams",
    tag: "kanakams",
    price: 62000,
    inCart; 0

  }
];


for (let i=0; i< carts.length; i++) {
    carts[i].addEventlistener('click', () =>{
        console.log("added to cart");
    })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cardNumbers() {
  let productNumbers = localStorage getItem('cartNumbers');


  productNumbers = parseInt(productNumbers);

  if(productNumbers) {
     localStorage.setItem('cartNumbers' , productNumbers + 1);
     document.querySelector('.cart span').textContent = productNumbers + 1;
  }else {
    localStorage.setItem('cartNumbers' 1);
    document.querySelector('.cart span').textContent = 1;
  }
}
onLoadCartNumbers();
