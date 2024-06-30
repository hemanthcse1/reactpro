export default function fruit({ name, price, emoji }) {
  return (
    <li>
      {emoji} {name} ${price}
    </li>
  );
}
