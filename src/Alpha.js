import React, { useState } from 'react';

/**
 * This is Alpha - a component that is the best one ever.
 *
 * @returns {JSX.Element}
 */
export default () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked
      {count}
      {' '}
      times
    </button>
  );
};
