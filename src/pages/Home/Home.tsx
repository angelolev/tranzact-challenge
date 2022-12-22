import React, { useEffect } from 'react';
import { EventsList } from './EventsList';
import './styles/Home.scss';
import { useDispatch } from 'react-redux';
import { useFetch } from '@/hooks';
import { Loading, Error } from '@/components';
import { addEvents } from '@/redux/states/events';

export interface IHome {}

const Home : React.FC<IHome> = () => {
	const { data, loading, error } = useFetch();
	const dispatch = useDispatch();

	useEffect(()=> {
		if(data.length > 0) {
			dispatch(addEvents(data));
		}
	},[data])

	if (loading) return <Loading/>
    if (error) return <Error message={error}/>
	
	return (
		<div className='home'>
			<EventsList />
		</div>
	)
};

export default Home;
