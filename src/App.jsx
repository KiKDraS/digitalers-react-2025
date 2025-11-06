import { Provider } from "react-redux";
import { Counter } from "./features/counter/components/Counter";
import { store } from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
