import { IMarket } from '@/models';
import { AppStore } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { Selection } from '../Selection';
import './styles/Market.scss';

const Market : React.FC<IMarket> = ({id, name, selections}) => {
	const stateBets = useSelector((store: AppStore) => store.bets);
	const findBet = (selectionId: string) => !!stateBets.find(b => b.id === selectionId);

	return (
		<div className='market'>
			<div className="market__name">🏆 {name}</div>
			<div className="market__selections">
				{selections.map(selection => (
					<Selection
						key={selection.id}
						name={selection.name}
						price={selection.price}
						id={selection.id}
						isSelected={findBet(selection.id)} />
				))}
			</div>
		</div>
	)
};

export default Market;
