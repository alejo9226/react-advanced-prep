import { useState } from 'react';

const ListItem = (({ value }: { value: number }) => {
  console.log(`Rendering not memo item: ${value}`);
  return <li>{value}</li>;
});

export const OptimizedListNotMemoized = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  const addItem = (() => {
    setItems((prevItems) => [...prevItems, prevItems.length + 1]);
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Not Memo Count: {count}</button>
      <button onClick={addItem}>Add Not Memo Item</button>
      <ul>
        {items.map((item) => (
          <ListItem key={item} value={item} />
        ))}
      </ul>
    </div>
  );
};
