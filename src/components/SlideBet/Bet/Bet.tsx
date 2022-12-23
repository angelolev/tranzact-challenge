import { IBet } from '@/models';
import { removeBet } from '@/redux/states/bets';
import { isOpen } from '@/redux/states/slidebets';
import React from 'react';
import { useDispatch } from 'react-redux';
import './styles/Bet.scss';

const Bet : React.FC<IBet> = ({id, name, price}) => {
	const dispatch = useDispatch();
	
	const handleDelete = (betId: string) => {
		dispatch(removeBet(betId));
		dispatch(isOpen({'isOpen': false}))
	}

	return (
		<div className='bet' key={id}>
			<p className='bet__name'>{name}</p>
			<p className="bet__price">{price}</p>
			<button className='bet__button' onClick={() => handleDelete(id)}>Delete</button>
		</div>
	);
};

export default Bet;
