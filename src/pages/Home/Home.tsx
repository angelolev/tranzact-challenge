import React, { useEffect } from 'react';
import { EventsList } from './EventsList';
import './styles/Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '@/hooks';
import { Loading, Error } from '@/components';
import { addEvents } from '@/redux/states/events';
import { AppStore } from '@/redux/store';

export interface IHome {}

const Home : React.FC<IHome> = () => {
	const { data, loading, error } = useFetch();
	const dispatch = useDispatch();
	const storeEvents = useSelector((store: AppStore) => store.events);

	useEffect(()=> {
		if(data.length > 0) {
			dispatch(addEvents(data));
		}
	},[data])

	if (loading) return <Loading/>
    if (error) return <Error message={error}/>
	
	return (
		<div className='home'>
			<EventsList events={storeEvents}/>
		</div>
	)
};

export default Home;
