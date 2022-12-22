import { IBet, ISelection } from '@/models';
import React from 'react';
import './styles/Selection.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBet, removeBet } from '@/redux/states/bets';
import { AppStore } from '@/redux/store';
import { isOpen } from '@/redux/states/slidebets';


const Selection : React.FC<ISelection> = ({id, name, price, isSelected}) => {

	const dispatch = useDispatch();
	const stateBets = useSelector((store: AppStore) => store.bets);
	const findBet = (bet: IBet) => !!stateBets.find(b => b.id === bet.id);
	const filterBet = (bet: IBet) => stateBets.filter(b => b.id !== bet.id);

	const handleChange = (bet: IBet) => {
		if(findBet(bet)) {
			dispatch(removeBet(bet))
		} else {
			dispatch(addBet(bet))
			dispatch(isOpen({'isOpen': true}))
		}
	};

	return (
		<div className="selection">
			<button className={isSelected ? 'selection__button is--selected' : 'selection__button'} onClick={()=>handleChange({id, name, price})}>{name} <br /> {price}</button>
		</div>
	);
};

export default Selection;
