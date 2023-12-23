export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        Start Adding some Items to your Packing List 👜
      </footer>
    );
  }

  const total = items.length;
  const pack = items.filter((item) => item.packed).length;
  const percentage = Math.round((pack / (total < 1 ? 1 : total)) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything Ready to go ✈️"
          : `You have ${total} items on your list and you have already packed ${pack}
          items(${percentage}%)`}
      </em>
    </footer>
  );
}
