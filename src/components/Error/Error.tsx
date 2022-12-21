import React from 'react';
import './styles/Error.scss';

export interface ErrorInterface {
	message: string;
}

const Error : React.FC<ErrorInterface> = ({message}) => {
	return <div className='error'>{message}</div >;
};

export default Error;
