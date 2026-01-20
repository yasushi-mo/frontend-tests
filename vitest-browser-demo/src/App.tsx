import { Counter } from "./components/Counter";

function App() {
  return (
    <div>
      <h1>Vitest Browser Mode Demo</h1>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
