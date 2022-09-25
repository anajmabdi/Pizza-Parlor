function Order(name) {
  this.name = name;
  this.pizzas = {};
}

Order.prototype.addPizzaToOrder = function(pizza) {
  this.pizzas[this.name] = pizza;
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}