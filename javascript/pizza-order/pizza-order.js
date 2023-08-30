/// <reference path="./global.d.ts" />
//
// @ts-check
const PIZZA_PRICES = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
};
const EXTRAS_PRICES = {
  ExtraSauce: 1,
  ExtraToppings: 2,
};

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let extraPriceTotal = [];
  for (let i = 0; i < extras.length; i++) {
    if (extras[i]) {
      extraPriceTotal.push(EXTRAS_PRICES[extras[i]]);
    }
  }

  return extraPriceTotal.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    PIZZA_PRICES[pizza]
  );
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;

  for (let i = 0; i < pizzaOrders.length; i++) {
    let { pizza, extras } = pizzaOrders[i];
    total += pizzaPrice(pizza, ...extras);
  }

  return total;
}
