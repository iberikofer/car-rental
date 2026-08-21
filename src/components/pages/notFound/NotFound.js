import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate('/', { replace: true });
		}, 3500);
		return () => clearTimeout(timer);
	}, [navigate]);

	return (
		<div
			style={{
				minHeight: 'calc(100vh - 65px)',
				background: 'radial-gradient(circle at 50% 20%, #edf3ff 0%, #f7f9fd 50%, #ffffff 100%)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#111827',
				textAlign: 'center',
				padding: '24px',
			}}
		>
			<h1
				style={{
					fontSize: 'clamp(64px, 12vw, 120px)',
					fontWeight: 900,
					margin: 0,
					background: 'linear-gradient(135deg, #ff4d4d, #dc2626)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				}}
			>
				404
			</h1>
			<h2 style={{ fontSize: '24px', fontWeight: 700, margin: '16px 0 8px 0', color: '#111827' }}>
				Page Not Found
			</h2>
			<p style={{ color: '#6b7280', maxWidth: '400px', marginBottom: '24px', fontSize: '16px' }}>
				Redirecting to home page in 3 seconds...
			</p>
			<Link
				to="/"
				style={{
					background: 'linear-gradient(135deg, #ff4d4d 0%, #dc2626 100%)',
					color: '#ffffff',
					padding: '12px 28px',
					borderRadius: '12px',
					fontWeight: 600,
					textDecoration: 'none',
					boxShadow: '0 4px 16px rgba(255, 77, 77, 0.35)',
				}}
			>
				Return Home Now
			</Link>
		</div>
	);
}

