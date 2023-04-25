import { c, useState } from "atomico";

function counter() {
  const [count, setCount] = useState(0);
  return (
    <host shadowDom>
      <p>The current count is: {count}</p>
      <button onclick={() => setCount(count + 1)}>Increment ➕</button>
      <button onclick={() => setCount(count - 1)}>Decrement ➖</button>
      <button onclick={() => setCount(0)}>Init 0️⃣</button>
    </host>
  );
}

export const Counter = c(counter);

customElements.define("my-counter", Counter);
