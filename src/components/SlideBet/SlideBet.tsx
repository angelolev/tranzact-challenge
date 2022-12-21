import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import { useSelector } from "react-redux";

import "./styles/SlideBet.scss";
import { AppStore } from "@/redux/store";
import { Bet } from "./Bet";
export interface SlideBetInterface {}

const SlideBet: React.FC<SlideBetInterface> = () => {
  const [isPaneOpen, setIsPaneOpen] = useState<boolean>(false);
  const stateBets = useSelector((store: AppStore) => store.bets);

  return (
    <div className="slidebet">
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={isPaneOpen}
        title="🎲 My bets"
        subtitle="Your selected bets"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setIsPaneOpen(false);
        }}
      >
        {stateBets.map((bet) => (
          <Bet key={bet.id} id={bet.id} name={bet.name} price={bet.price} />
        ))}
      </SlidingPane>
      <button className="slidebet__button" onClick={() => setIsPaneOpen(true)}>
	  💰 My Bets
      </button>
    </div>
  );
};

export default SlideBet;
