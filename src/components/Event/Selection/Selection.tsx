import { IBet, ISelection } from '@/models';
import React, { useState } from 'react';
import './styles/Selection.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBet } from '@/redux/states/bets';
import { AppStore } from '@/redux/store';


const Selection : React.FC<ISelection> = ({name, price, eventId}) => {
	const [selectedBets, setSelectedBets] = useState<IBet[]>([]);

	const dispatch = useDispatch();
	const stateBets = useSelector((store: AppStore) => store.bets);
	const findBet = (bet: IBet) => !!stateBets.find(b => b.id === bet.id);
	const filterBet = (bet: IBet) => stateBets.filter(b => b.id !== bet.id);

	const handleChange = (bet: IBet) => {
		const currentBet = findBet(bet) ? filterBet(bet) : [...stateBets, bet]
		dispatch(addBet(currentBet))
	};

	return (
		<div className="selection">
			<button className='selection__button' onClick={()=>handleChange({id: `bet-${name}`, name, price, eventId})}>{name} <br /> {price}</button>
		</div>
	);
};

export default Selection;
