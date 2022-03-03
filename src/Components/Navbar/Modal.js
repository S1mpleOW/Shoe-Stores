import React from 'react';
import SignInForm from '../Form/SignInForm';
import SignUpForm from '../Form/SignUpForm';

const Modal = ({ setUser }) => {
	const [showSignIn, setShowSignIn] = React.useState(false);
	const [showSignUp, setShowSignUp] = React.useState(false);
	const handleSignIn = () => {
		setShowSignIn(!showSignIn);
	};
	const handleSignUp = () => {
		setShowSignUp(!showSignUp);
	};
	return (
		<>
			<div className="text-[#fff] login cursor-pointer w-[30px] h-[30px] rounded-full flex items-center justify-center">
				<i className=" fa fa-user"></i>
				<div className="flex flex-col rounded-lg cursor-pointer user">
					<div
						className="p-5 min-w-[100px] border-b-2 border-solid border-[#EDA3B5] hover:opacity-80 cursor-pointer transition-colors"
						onClick={handleSignIn}
					>
						Sign in
					</div>
					<div
						className="p-5 min-w-[100px] hover:opacity-80 cursor-pointer transition-colors"
						onClick={handleSignUp}
					>
						Sign up
					</div>
				</div>
			</div>
			<SignInForm
				mounted={showSignIn}
				setUser={setUser}
				setMounted={setShowSignIn}
				setSignUp={setShowSignUp}
			></SignInForm>
			<SignUpForm
				mounted={showSignUp}
				setMounted={setShowSignUp}
				setSignIn={setShowSignIn}
			></SignUpForm>
		</>
	);
};

export default Modal;
