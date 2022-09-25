# <div align="center"> **Pizza Parlor**</div>

#### <div align="center"> *By Najma Abdi* </div>  
<p>&nbsp;</p>

## <div align="center"> Technologies Used
<div align="center">* HTML
<div align="center">* CSS
<div align="center">* JavaScript 

<p>&nbsp;</p>

## <div align="center"> Description </div>
<div align="center"> This website gives the total for pizza order based on how the user wants their pizza customized.</div>
<p>&nbsp;</p>


## <div align="center">Setup/Installation Requirements 
<div align="center">* Clone this repository to your desktop 
<div align="center">* Navigate to the top level of the directory
<div align="center">* Open index.html in your browser 
<p>&nbsp;</p>


## <div align="center"> Known bugs </div>

<p>&nbsp;</p>


## <div align="center"> TDD </div>
    Describe: Order(name)
    Test: 
      "It should store pizza orders."
    Code: 
      let order = new Order("Sam");
    Expected Output: 
      List of pizza orders

    Describe: Pizza()
    Test: 
      "It should hold properties of user's pizza order"
    Code: 
      let pizza = new Pizza("Sam", ["pepperoni", "anchovies"], "large", "4")
    Expected Output: 
      name:Sam, toppings:pepperoni, anchovies, size: large, price: 4

    Describe: addPizzaToOrder(pizza)
    Test: "It should add customer's pizza into the order object."
    Code: order.addPizzaToOrder(pizza);
    Expected Output: Sam: properties of pizza

    Describe: pizzaCost()
    Test: "It should give the pizza order a price."
    Code: pizza.pizzaCost()
    Expected Output: 12



<p>&nbsp;</p>

#### License

Copyright (c)  Najma Abdi