import { IBet, ISelection } from '@/models';
import React, { useState } from 'react';
import './styles/Selection.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBet } from '@/redux/states/bets';
import { AppStore } from '@/redux/store';
import { isOpen } from '@/redux/states/slidebets';


const Selection : React.FC<ISelection> = ({id, name, price, isSelected}) => {
	const [selectedBets, setSelectedBets] = useState<IBet[]>([]);

	const dispatch = useDispatch();
	const stateBets = useSelector((store: AppStore) => store.bets);
	const findBet = (bet: IBet) => !!stateBets.find(b => b.id === bet.id);
	const filterBet = (bet: IBet) => stateBets.filter(b => b.id !== bet.id);

	const handleChange = (bet: IBet) => {
		const currentBet = findBet(bet) ? filterBet(bet) : [...stateBets, bet]
		dispatch(addBet(currentBet))
		dispatch(isOpen({'isOpen': true}))
	};

	return (
		<div className="selection">
			<button className={isSelected ? 'selection__button is--selected' : 'selection__button'} onClick={()=>handleChange({id, name, price})}>{name} <br /> {price}</button>
		</div>
	);
};

export default Selection;
