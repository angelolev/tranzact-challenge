import { IBet } from '@/models';
import { removeBet } from '@/redux/states/bets';
import { AppStore } from '@/redux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/Bet.scss';

const Bet : React.FC<IBet> = ({id, name, price}) => {
	const stateBets = useSelector((store: AppStore) => store.bets);
	const dispatch = useDispatch();
	
	const handleDelete = (bet: IBet) => {
		dispatch(removeBet(bet));
	}

	return (
		<div className='bet' key={id}>
			<p className='bet__name'>{name}</p>
			<p className="bet__price">{price}</p>
			<button className='bet__button' onClick={() => handleDelete({id, name, price})}>Delete</button>
		</div>
	);
};

export default Bet;
