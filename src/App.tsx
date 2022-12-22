import { Home } from "./pages/Home";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import { SlideBet } from "./components";

function App() {
  return (
    <Provider store={store}>
      <Home />
      <SlideBet />
    </Provider>
  );
}

export default App;
