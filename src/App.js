import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import Sidebar from './Components/Admin/Sidebar';
import ScrollToTop from './Components/Dashboard/ScrollToTop';
function App() {
	const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')));
	const [admin, setAdmin] = React.useState(true);
	const [activeSidebar, setActiveSidebar] = React.useState(true);
	const navigate = useNavigate();
	React.useEffect(() => {
		if (user && admin) {
			navigate('dashboard');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, admin]);
	return (
		<>
			{user && admin ? (
				<Sidebar
					user={user}
					setUser={setUser}
					activeSidebar={activeSidebar}
					setActiveSidebar={setActiveSidebar}
				/>
			) : (
				<Navbar setUser={setUser} />
			)}
			<ScrollToTop></ScrollToTop>
			<Outlet context={{ activeSidebar, setActiveSidebar }}></Outlet>
		</>
	);
}

export default App;
