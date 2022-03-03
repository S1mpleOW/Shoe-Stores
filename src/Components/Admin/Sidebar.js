import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import dashboard from '../../config/dashboardData';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './Admin.css';

const Sidebar = ({ user, setUser, activeSidebar, setActiveSidebar }) => {
	const [activeIndex, setActiveIndex] = React.useState(0);
	let navigate = useNavigate();
	const location = useLocation();
	const handleSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				console.log('signed out');
				navigate('');
				localStorage.removeItem('user');
				setUser(null);
				console.log('Successfully signed out!');
			})
			.catch(() => {
				console.log('Failed to sign out!');
			});
	};

	React.useEffect(() => {
		const curPath = window.location.pathname.split('/')[1];
		const itemIndex = dashboard.findIndex((item) => item.section === curPath);
		setActiveIndex(curPath.length === 0 ? 0 : itemIndex);
	}, [location]);

	return (
		<div
			className={`fixed top-0 left-0 bottom-0 bg-secondary min-w-[200px] transition-all duration-500 ease-in-out shadow-lg ${
				activeSidebar ? 'translate-x-0' : '-translate-x-full'
			}`}
			onClick={() => setActiveSidebar(false)}
		>
			<div className="flex flex-col h-full px-5 pt-5 pb-20">
				<div className="flex items-center justify-between">
					<img
						src={`${user.photoURL}`}
						alt="avatar"
						className="block object-cover w-[30px] h-[30px] rounded-full"
					/>
					<i className="flex items-center justify-center w-[30px] h-[30px] p-3 ml-auto rounded-full cursor-pointer fa fa-times bg-primary text-secondary"></i>
				</div>
				<div className="flex flex-col gap-10 mt-10 text-center">
					{dashboard.map((item, index) => {
						return (
							<div className="relative" key={`nav-${index}`}>
								<Link
									to={item.link}
									key={`sidebarItem-${index}`}
									className={`block text-lg font-bold text-primary sidebarItem after:bg-primary ${
										activeIndex === index && 'active'
									}`}
								>
									{item.text}
								</Link>
							</div>
						);
					})}
				</div>
				<div
					className="flex items-center gap-3 mt-auto ml-auto cursor-pointer"
					onClick={handleSignOut}
				>
					<i className="fa-solid fa-arrow-right-from-bracket"></i>
					<span className="text-sm font-semibold">Signout</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
