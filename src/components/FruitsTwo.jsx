import Fruit from "./Fruit";

export default function Fruits() {
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
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
        ))}
      </ul>
    </div>
  );
}
