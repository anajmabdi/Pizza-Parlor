// Business Logic

function Order(name, phoneNumber) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.pizzas = {};
}

Order.prototype.addPizzaToOrder = function(pizza) {
  this.pizzas[this.name] = pizza;
}

Pizza.prototype.pizzaCost = function(){
  if (this.toppings[0] && this.size === 'small' || this.toppings[1] && this.size === 'small'|| this.toppings[-1] && this.size === 'small' ) {
    return this.price += 12;
  } else if (this.toppings[0] && this.size === 'medium' || this.toppings[1] && this.size === 'medium' || this.toppings[2] && this.size === 'medium') {
    return this.price += 14;
  } else if (this.toppings[0] && this.size === 'large' || this.topping[1] && this.size === 'large' || this.toppings[2] && this.size === 'large') {
    return this.price += 16;
  }
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

// UI Logic

function handleFormSubmission(event) {
event.preventDefault();
let name = document.getElementById("order-name").value;
let phoneNumber = document.getElementById("phone-number").value;
let order = new Order(name, phoneNumber);

let list0fToppings = [];
let topping = document.querySelectorAll('input[name=topping]:checked');
topping.forEach(function(element) {
  list0fToppings.push(element);
});

let size = document.querySelector('input[name=size]:checked').value;
let pizza = new Pizza(list0fToppings, size);
console.log(pizza);
pizza.pizzaCost();
order.addPizzaToOrder(pizza);

document.getElementById("price").removeAttribute("class");
document.getElementById("cost").innerText = pizza.pizzaCost();
}

window.addEventListener("load", function() {
  document.getElementById("pizza-form").addEventListener("submit", handleFormSubmission);
})