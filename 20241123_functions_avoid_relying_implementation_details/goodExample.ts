function calculatePrice<T>(items: T[], getPrice: (item: T) => number): number {
  // Use reduce with a regular function to 
  // sum the prices by applying getPrice to each item
  return items.reduce(function(total, item) {
    // Return the updated total after adding the price of the current item
    return total + getPrice(item);
  }, 0);
}

// Example usage
interface Item {
  name: string; // Item has a name (string)
  price: number; // Item has a price (number)
}

const items: Item[] = [
  { name: "apple", price: 1 },
  { name: "banana", price: 2 },
];

// Function to extract price from an item
const getPrice = (item: Item): number => item.price;

// Call the function with items and price extraction logic
const totalPrice = calculatePrice(items, getPrice);

console.log(totalPrice); // Output: 3

// The function is now agnostic to how prices are represented, making it more reusable
