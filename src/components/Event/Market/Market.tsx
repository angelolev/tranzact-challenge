import { IMarket } from '@/models';
import React from 'react';
import { Selection } from '../Selection';
import './styles/Market.scss';

const Market : React.FC<IMarket> = ({eventId, name, selections}) => {
	return (
		<div className="market">
			<div className="market__name">🏆 {name}</div>
			<div className="market__selections">
				{selections.map(selection => (
					<Selection
						eventId={eventId}
						key={selection.id}
						name={selection.name}
						price={selection.price}
						id={selection.id} />
				))}
			</div>
		</div>
	)
};

export default Market;
