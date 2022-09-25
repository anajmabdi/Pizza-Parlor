function Order() {
  this.pizzas = {};
}

function Pizza(name, toppings, size) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;
}