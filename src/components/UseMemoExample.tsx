import React, { useState, useMemo, useCallback } from 'react';

const List = React.memo(({ items, onAdd }: { items: number[]; onAdd: () => void }) => {
  console.log('List rendered');
  return (
    <div>
      <button onClick={onAdd}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3]);

  // Memoriza la lista de números (useMemo)
  // const numbersSum = useMemo(() => {
  const numbersSum = () => {
    console.log('Calculating sum...');
    return numbers.reduce((sum, num) => sum + num, 0); // Solo recalcula si `numbers` cambia
  // }, [numbers]);
  };

  // Memoriza la función para añadir números (useCallback)
  const addNumber = useCallback(() => {
    setNumbers((prev) => [...prev, prev.length + 1]);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      <h2>Sum of Numbers: {numbersSum()}</h2>
      <List items={numbers} onAdd={addNumber} />
    </div>
  );
};

export default UseMemoExample;
