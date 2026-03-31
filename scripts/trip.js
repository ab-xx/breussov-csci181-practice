// ------------------------------------------------------------
// Variables
// ------------------------------------------------------------
const driver_name = "Alex";
const distance_miles = 503;
const mpg = 23;
const gas_price_per_gallon = 3.69;
const fuel_capacity_gallons = 19;
let is_round_trip = true;
let total_distance = is_round_trip ? distance_miles * 2 : distance_miles;
let miles_traveled = 0;
let stop_number = 0;
const final_gallons = calculateGallonsNeeded(total_distance, mpg);
const final_cost = calculateFuelCost(final_gallons, gas_price_per_gallon);
console.log(
  `Gas Stop Log for ${driver_name}, from Stevensville, MT to Seattle, WA Trip`,
);

// ------------------------------------------------------------
// Derived/Calculated Values
// ------------------------------------------------------------
const gallons_needed = calculateGallonsNeeded(distance_miles, mpg);
const miles_per_tank = fuel_capacity_gallons * mpg;
while (miles_traveled + miles_per_tank < total_distance) {
  stop_number++;
  miles_traveled += miles_per_tank;
  let gallons_at_stop = calculateGallonsNeeded(miles_traveled, mpg);
  let fuel_cost_at_stop = calculateFuelCost(
    gallons_at_stop,
    gas_price_per_gallon,
  );
  console.log(
    `Stop #${stop_number}: Traveled miles: ${miles_traveled}. Total fuel cost so far: $${fuel_cost_at_stop.toFixed(2)}.`,
  );
}

// ------------------------------------------------------------
// Functions
// ------------------------------------------------------------
function calculateGallonsNeeded(total_distance, mpg) {
  return total_distance / mpg;
}
function calculateFuelCost(gallons, gas_price_per_gallon) {
  return gallons * gas_price_per_gallon;
}
// ------------------------------------------------------------
// Main Program Execution
// ------------------------------------------------------------
console.log(`Total Distance: ${total_distance} miles`);
console.log(`Gallons Needed: ${final_gallons.toFixed(2)} gallons`);
console.log(`Total cost for the trip is $${final_cost.toFixed(2)}.`);
