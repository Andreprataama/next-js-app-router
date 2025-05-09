"use client";

import { dataStore } from "./store/dataStore";

export default function Home() {
  const { count, inc } = dataStore();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => inc(count + 1)}>Add</button>
    </>
  );
}
