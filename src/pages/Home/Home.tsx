import React from 'react';
import { EventsList } from './EventsList';
import './styles/Home.scss';
export interface IHome {}

const Home : React.FC<IHome> = () => {
	return (
		<div className='home'>
			<EventsList />
		</div>
	)
};

export default Home;
