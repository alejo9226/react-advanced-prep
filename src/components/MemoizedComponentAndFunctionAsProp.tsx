import React, { useCallback } from "react";

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});

export const MemoizedComponentAndFunctionAsProp = () => {
  const [count, setCount] = React.useState(0);

  // const handleClick = () => {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  // };
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
};
