type Item = [string, number];

function calculatePrice(items: Item[]): number {
  return items.reduce((total, item) => total + item[1], 0); // item[1] assumed to be price
}
// Bad Practice: Relies on Details
// If the structure of items changes, this function breaks;

// if we pass ['item1', 'item description', 2.5]
// imagine we would have to rewrite the function above!
