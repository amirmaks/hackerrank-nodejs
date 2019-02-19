// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
  let p = meal_cost * (tip_percent/100);
  let t = meal_cost * (tax_percent/100);
  let s = Math.round(meal_cost + p + t);
  console.log(s);
}


solve(12.00, 20, 8);
