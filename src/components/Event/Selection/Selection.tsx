import { IBet, ISelection } from '@/models';
import React from 'react';
import './styles/Selection.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBet, removeBet } from '@/redux/states/bets';
import { AppStore } from '@/redux/store';
import { isOpen } from '@/redux/states/slidebets';
import { findBet } from '@/utilities/findBet.utility';

const Selection : React.FC<ISelection> = ({id, name, price, isSelected}) => {

	const dispatch = useDispatch();
	const stateBets = useSelector((store: AppStore) => store.bets);

	const handleChange = (bet: IBet) => {
		if(findBet(bet.id, stateBets)) {
			dispatch(removeBet(bet))
		} else {
			dispatch(addBet(bet))
			dispatch(isOpen({'isOpen': true}))
		}
	};

	return (
		<div className="selection">
			<button data-testid={id} id={id} className={isSelected ? 'selection__button is--selected' : 'selection__button'} onClick={()=>handleChange({id, name, price})}>
				{name} <br /> {price}
			</button>
		</div>
	);
};

export default Selection;
