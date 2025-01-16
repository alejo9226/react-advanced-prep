import React, { useState, useCallback } from 'react';

const ListItem = React.memo(({ value }: { value: number }) => {
  console.log(`Rendering item: ${value}`);
  return <li>{value}</li>;
});

export const OptimizedListMemoized = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  const addItem = useCallback(() => {
    setItems((prevItems) => [...prevItems, prevItems.length + 1]);
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item) => (
            <ListItem key={item} value={item} />
          ))}
        </ul>
      </div>
    </>
  );
};
