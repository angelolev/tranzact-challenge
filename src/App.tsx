import "./App.css";
import { Home } from "./pages/Home";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import { SlideBet } from "./components";

function App() {
  // const [isPaneOpen, setIsPaneOpen] = useState<boolean>(false);

  // const stateBets = useSelector((store: AppStore) => store.bets);

  // console.log(stateBets, 'bets store')

  return (
    <Provider store={store}>
      <Home />
      <SlideBet />
      
      {/* <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={isPaneOpen}
        title="My bets"
        subtitle="Your selected bets"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setIsPaneOpen(false);
        }}
      >
        <div>And I am pane content. BTW, what rocks?</div>
        <br />
      </SlidingPane> */}
    </Provider>
  );
}

export default App;
