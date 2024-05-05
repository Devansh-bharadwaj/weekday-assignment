import { Provider } from "react-redux";
import Home from "./components/Home";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Home />
    </Provider>
  );
}

export default App;
