import { IBet } from '@/models';
import { removeBet } from '@/redux/states/bets';
import { isOpen } from '@/redux/states/slidebets';
import React from 'react';
import { useDispatch } from 'react-redux';
import './styles/Bet.scss';

const Bet : React.FC<IBet> = ({id, name, price}) => {
	const dispatch = useDispatch();
	
	const handleDelete = (bet: IBet) => {
		dispatch(removeBet(bet));
		dispatch(isOpen({'isOpen': false}))
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
