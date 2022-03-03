import React from 'react';
import Button from '../Button/Button';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const Signout = ({ user, setUser }) => {
	const handleSignOut = () => {
		console.log(user);
		firebase
			.auth()
			.signOut()
			.then(() => {
				setUser(null);
				console.log('Successfully signed out!');
			})
			.catch(() => {
				console.log('Failed to sign out!');
			});
	};
	return (
		<div className="w-[30px] h-[30px] rounded-full relative cursor-pointer sign-out">
			<img
				src={`${user.photoURL}`}
				alt="avatar"
				className="block object-cover w-full h-full rounded-full"
			/>
			<div
				className="absolute top-[calc(100%+5px)] right-0 bg-secondary z-10 rounded-xl transition-all sign-out-btn hover:opacity-80"
				onClick={handleSignOut}
			>
				<Button text={'Sign out'} className="shadow-xl whitespace-nowrap"></Button>
			</div>
		</div>
	);
};

export default Signout;
