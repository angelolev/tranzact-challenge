import React from 'react';
import './styles/EventsList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { addBet } from '@/redux/states/bets';
import { IBet, IEvent } from '@/models';
import { useFetch } from '@/hooks';
import { Loading, Error, Event } from '@/components';


export interface EventsListInterface {}

const EventsList : React.FC<EventsListInterface> = () => {
	const { data, loading, error } = useFetch();

	const dispatch = useDispatch();

  	const stateBets = useSelector((store: AppStore) => store.bets);
	const findBet = (eventId: string) => !!stateBets.find(b => b.eventId === eventId);
	
	if (loading) return <Loading/>
    if (error) return <Error message={error}/>

	return (
		<div className='events-list'>
			{data.map((event: IEvent) => (
				<Event
					id={event.id}
					key={event.id}
					markets={event.markets}
					name={event.name}
					isVisible={event.markets.length > 0}
					hasSelectedBets={findBet(event.id)}
				/>
			))}
			
		</div>
	)
};

export default EventsList;
