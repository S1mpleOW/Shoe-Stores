import React from 'react';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './form.css';
import Input from './Input/Input';

const SignUpForm = ({ mounted, setMounted, setSignIn }) => {
	const [showPassword, setShowPassword] = React.useState(false);
	const scheme = yup
		.object({
			userNameSignup: yup
				.string()
				.required('Your name is required')
				.min(8, 'Your username must be at least 8 characters')
				.max(32, 'Your username must be maximum 32 characters'),
			emailSignUp: yup
				.string()
				.email('Please enter valid email address')
				.required('Email is required'),
			passwordSignUp: yup
				.string()
				.required('Password is required')
				.min(8, 'Password must be at least 8 characters'),
		})
		.required();
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: { userNameSignup: '', emailSignUp: '', passwordSignUp: '' },
		resolver: yupResolver(scheme),
	});
	React.useEffect(() => {
		const handleClick = (e) => {
			if (e.target.matches('.fixed.inset-0')) {
				setMounted(false);
			}
		};
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
	const handleSignIn = () => {
		setMounted(false);
		setSignIn(true);
	};
	const onSubmitHandler = (values) => {
		console.log(values);
	};
	return (
		<div
			className={`fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center p-5 transition-all duration-300 ${
				mounted ? 'visible opacity-100' : 'invisible opacity-0'
			}`}
		>
			<div className="w-full max-w-[470px] mx-auto bg-secondary px-3 py-5 rounded-xl flex flex-col justify-center">
				<h2 className="mb-3 text-2xl font-bold text-center uppercase text-third">Register</h2>
				{/* <div className="flex flex-col gap-3 mx-10 my-2 md:flex-row md:mx-3">
					<Button
						text={'Sign up with Google'}
						className={'normal-case w-full md:w-1/2 flex flex-col items-center gap-1'}
					>
						<i className="fab fa-google"></i>
					</Button>
					<Button
						text={'Sign up with Facebook'}
						className={
							'bg-primary text-secondary normal-case hover:opacity-80 w-full md:w-1/2 flex flex-col items-center gap-1'
						}
					>
						<i className="fa-brands fa-facebook-f"></i>
					</Button>
				</div>
				<div className="my-2">
					<span className="text-center block text-[20px] uppercase font-bold classOr">or</span>
				</div> */}
				<form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
					<div className="flex flex-col gap-2">
						<label htmlFor="userNameSignup">User name</label>
						<Input
							type="text"
							name="userNameSignup"
							id="userNameSignup"
							placeholder="Enter your user name"
							control={control}
						></Input>
						<p className="text-[#E74C3C] text-base font-bold h-5 relative -top-2">
							{errors.userNameSignup ? errors.userNameSignup?.message : ''}
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="emailSignUp">Email address</label>
						<Input
							type="email"
							name="emailSignUp"
							id="emailSignUp"
							placeholder="Enter your email"
							control={control}
						></Input>
						<p className="text-[#E74C3C] text-base font-bold h-5 relative -top-2">
							{errors.emailSignUp ? errors.emailSignUp?.message : ''}
						</p>
					</div>
					<div className="relative flex flex-col gap-2 my-2">
						<label htmlFor="passwordSignUp">Password</label>
						<Input
							type={`${showPassword ? 'text' : 'password'}`}
							name="passwordSignUp"
							id="passwordSignUp"
							placeholder="Enter your password"
							control={control}
						></Input>
						<i
							className={`fa fa-eye absolute top-[calc(50%-10px)] right-6 -translate-y-1/2sssssss cursor-pointer hover:text-primary transition-colors ${
								showPassword ? 'text-primary' : ''
							}`}
							onClick={() => setShowPassword(!showPassword)}
						></i>
						<p className="text-[#E74C3C] text-base font-bold h-5 relative -top-2">
							{errors.passwordSignUp ? errors.passwordSignUp?.message : ''}
						</p>
					</div>
					<Button
						text={'Sign in'}
						type="submit"
						className={
							'py-4 bg-primary text-secondary font-bold normal-case hover:opacity-90 transition-all w-full'
						}
					></Button>
				</form>
				<div className="flex items-center justify-center mt-5 whitespace-nowrap">
					<span className="block">Already have an account?</span>
					<button component="a" href="#" className="block ml-2 text-primary" onClick={handleSignIn}>
						Sign in
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
