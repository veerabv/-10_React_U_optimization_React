import { useState } from 'react';

import { log } from '../../log.js';

function HistoryItem({ count }) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    // if we select on element and click another increment count the selected element chnaged due to index key to solve this give unique key
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>  
      {count}
    </li>
  );
}

export default function CounterHistory({ history }) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
