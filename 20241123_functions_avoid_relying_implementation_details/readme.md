# Functions Should Avoid Relying on Implementation Details

## Example of a Function That Relies on Details

![A bad example of a function relying on implementation details](./media/bad_example.png)

## And Here Is An Example That Is Good Because
1. It's encapsulated and its internal details are not relevant to the consumer.
2. The user interacts with its public interface: tuple of items and a 'getPrice' function:

![A good example of encapsulated function](./media/good_example.png)
