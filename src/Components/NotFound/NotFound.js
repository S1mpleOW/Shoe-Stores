import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../asset/notFound.png';
const NotFound = () => {
	return (
		<div className="mt-[70px] container">
			<img src={notFound} alt="not-found" className="object-cover w-full h-full" />
			<Link to="/" className="flex gap-2 mt-3 transition-colors hover:text-primary">
				<i className="fa fa-arrow-left"></i>
				Go Home
			</Link>
		</div>
	);
};

export default NotFound;
