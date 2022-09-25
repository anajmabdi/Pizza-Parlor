function Order(name) {
  this.name = name;
  this.pizzas = {};
}

Order.prototype.addPizzaToOrder = function(pizza) {
  this.pizzas[this.name] = pizza;
}

Pizza.prototype.pizzaCost = function(){
  if (this.toppings.includes("pepperoni") && this.size === 'small' || this.toppings.includes("veggie") && this.size === 'small') {
    return this.price += 12;
  } else if (this.toppings.includes("pepperoni") && this.size === 'medium' || this.toppings.includes("veggie") && this.size === 'medium') {
    return this.price += 14;
  } else if (this.toppings.includes("pepperoni") && this.size === 'large' || this.toppings.includes("veggie") && this.size === 'large') {
    return this.price += 16;
  }
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}