import React from 'react';
import './styles/Loading.scss';
export interface LoadingInterface {}

const Loading : React.FC<LoadingInterface> = () => {
	return (
		<div className='loading'>
			<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
		</div >
	)
};

export default Loading;
