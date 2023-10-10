import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/', { replace: true });
		}, 3000);
	}, [navigate]);

	return (
		<div>
			<h1>404</h1>
			<p>Page is Not Found </p>
		</div>
	);
}
