import { c, useState } from "atomico";

function counter() {
  const [count, setCount] = useState(0);
  return (
    <host shadowDom>
      <p>The current count is: {count}</p>
      <button onclick={() => setCount(count + 1)}>➕</button>
      <button onclick={() => setCount(count - 1)}>➖</button>
    </host>
  );
}

export const Counter = c(counter);

customElements.define("my-counter", Counter);
