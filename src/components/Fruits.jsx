export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎",
    },
    {
      name: "Banana",
      price: 8,
      emoji: "🍌",
    },
    {
      name: "Mango",
      price: 12,
      emoji: "🥭",
    },
    {
      name: "PineApple",
      price: 6,
      emoji: "🍍",
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
