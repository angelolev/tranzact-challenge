import React from 'react';
import './styles/Loading.scss';
export interface LoadingInterface {}

const Loading : React.FC<LoadingInterface> = () => {
	return <div className='loading'>Loading</div >;
};

export default Loading;
