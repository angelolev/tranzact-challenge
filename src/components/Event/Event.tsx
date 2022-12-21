import { IEvent } from '@/models';
import React from 'react';
import { Market } from './Market';
import { useDispatch, useSelector } from 'react-redux';
import './styles/Event.scss';
import { AppStore } from '@/redux/store';

const Event : React.FC<IEvent> = ({id, name, markets, isVisible}) => {
	if (!isVisible) return <></>

	const stateBets = useSelector((store: AppStore) => store.bets);
	const findBet = (marketId: string) => !!stateBets.find(b => b.marketId === marketId);

	return (
		<div className='event'>
			<div className="event__title">⚽ {name}</div>
			<div className="event__markets">
				{markets.map((market) => (
					<Market 
						eventId={id}
						id={market.id}
						key={market.id}
						name={market.name}
						selections={market.selections}
						hasSelectedBets={findBet(market.id)} />
				))}
			</div>
		</div >
	)
};

export default Event;
