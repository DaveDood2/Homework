/*
Pizza Place Homework

    In your Homework repo, create a new directory named "Week2" and then within that directory, create a JavaScript file - name it something that indicates it is homework for Week 2
    Inside your JS file, create two variables: pizzaPlace and numberOfToppings
    Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
    Print the variables and their types.
    Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
    Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
    Add, commit, and push your JS file to your GitHub repo.
    WHEN FINISHED: Send your TA a message to let them know it's complete and make sure that your Jira ticket for homework submission includes a link to your GitHub Homework.

Bonus Challenge

    Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)

An example of the output you want for in this assignment is:

The House of Pizza string
8 number
At The House of Pizza, we have 8 toppings.
Quality, not quantity.
*/

let pizzaPlace = "Lucy's None Pizzas with Left Beef";
let numberOfToppings = 1;
console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(
  `Welcome to ${pizzaPlace}, it ain't hard to decide what to get on your pizza because we only have ${numberOfToppings} topping.`
);

numberOfToppings < 10
  ? console.log("Quality, not quantity.")
  : console.log("A whole lot of pizza.");

// Bonus challenge!
// ...if I did all even numbers from 1 to 1 topping it wouldn't print anything, so I print to 10 instead
// bit more interesting that way
for (let num = 2; num <= 10; num += 2) {
  console.log(num);
}
