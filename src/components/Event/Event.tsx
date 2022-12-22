import { IEvent } from '@/models';
import React from 'react';
import { Market } from './Market';
import './styles/Event.scss';

const Event : React.FC<IEvent> = ({id, name, markets, isVisible}) => {
	if (!isVisible) return <></>

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
						selections={market.selections} />
				))}
			</div>
		</div >
	)
};

export default Event;
