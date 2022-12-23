import React from "react";
import SlidingPane from "react-sliding-pane";
import { useDispatch, useSelector } from "react-redux";

import "./styles/SlideBet.scss";
import { AppStore } from "@/redux/store";
import { Bet } from "./Bet";
import { isOpen } from "@/redux/states/slidebets";
export interface SlideBetInterface {}

const SlideBet: React.FC<SlideBetInterface> = () => {
  const dispatch = useDispatch();
  const stateBets = useSelector((store: AppStore) => store.bets);
  const slidingState = useSelector((store: AppStore) => store.slideBets);

  return (
    <div className="slidebet">
      <SlidingPane
        isOpen={slidingState.isOpen}
        title="🎲 My bets"
        subtitle="Your selected bets"
        onRequestClose={() => {
          dispatch(isOpen({ isOpen: false }));
        }}
      >
        {stateBets.map((bet) => (
          <Bet key={bet.id} id={bet.id} name={bet.name} price={bet.price} />
        ))}
      </SlidingPane>
      <button
        className="slidebet__button"
        onClick={() => dispatch(isOpen({ isOpen: true }))}
      >
        💰 My Bets
      </button>
    </div>
  );
};

export default SlideBet;
