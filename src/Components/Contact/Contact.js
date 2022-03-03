import React from 'react';
import Button from '../Button/Button';
import Input from '../Form/Input/Input';
import TextArea from '../Form/TextArea/TextArea';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const Contact = () => {
	const scheme = yup.object({
		firstNameContact: yup.string().required('First name is required'),
		lastNameContact: yup.string().required('Last name is required'),
		emailContact: yup.string().required('Email is required').email('Please enter a valid email'),
		phoneContact: yup.string().required('Phone is required'),
		messageContact: yup.string().required('Message is required'),
	});

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstNameContact: '',
			lastNameContact: '',
			emailContact: '',
			phoneContact: '',
			messageContact: '',
		},
		resolver: yupResolver(scheme),
	});

	const onHandleSubmit = (value) => {
		console.log(value);
	};

	return (
		<div className="container min-h-[100vh]">
			<div className="flex flex-col md:flex-row gap-5">
				<div className="w-full md:w-2/5 bg-[#3a276ef8] rounded-xl p-6 text-secondary relative">
					<div className="bg-primary absolute w-[80px] h-[80px] xl:w-[200px] xl:h-[200px] bottom-0 right-0 rounded-tl-full"></div>
					<h3 className="mb-4 xl:mb-8 text-[25px] xl:text-[32px] font-bold">Contact Information</h3>
					<p className="text-base text-[#ccc]">
						Fill up the form and our Team will get back to you within 24 hours
					</p>
					<div className="flex flex-col gap-8 mt-8 xl:mt-[50px]">
						<div className="flex gap-4 items-center">
							<i className="fa-solid fa-phone text-primary text-[20px]"></i>
							<a href="tel:+0123456789">+0123456789</a>
						</div>
						<div className="flex gap-4 items-center">
							<i className="fa-solid fa-envelope text-primary text-[20px]"></i>
							<a href="mailto:123456789@gmail.com">123456789@gmail.com</a>
						</div>
						<div className="flex gap-4 items-center">
							<i className="fa-solid fa-location-dot text-primary text-[20px]"></i>
							<a href="tel:+0123456789">+0123456789</a>
						</div>
					</div>
					<div className="flex gap-4 h-[70px] mt-7 xl:h-auto xl:mt-[100px]">
						<a
							href="facebook.com"
							className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-primary transition-colors"
						>
							<i className="fa-brands fa-facebook-f"></i>
						</a>
						<a
							href="facebook.com"
							className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-primary transition-colors"
						>
							<i className="fa-brands fa-twitter"></i>
						</a>
						<a
							href="facebook.com"
							className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-primary transition-colors"
						>
							<i className="fa-brands fa-instagram"></i>
						</a>
						<a
							href="facebook.com"
							className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-primary transition-colors"
						>
							<i className="fa-brands fa-linkedin-in"></i>
						</a>
					</div>
				</div>
				<div className="w-full md:w-3/5 bg-secondary rounded-xl py-6 px-3">
					<form
						className="flex flex-col gap-5 md:gap-7"
						autoComplete="off"
						onSubmit={handleSubmit(onHandleSubmit)}
					>
						<div className="flex flex-col md:flex-row gap-4">
							<div className="flex flex-col gap-2 w-full md:w-1/2 px-3">
								<label htmlFor="firstNameContact">First name</label>
								<Input
									type="text"
									name="firstNameContact"
									id="firstNameContact"
									placeholder="Enter your first name"
									className="pb-3 outline-none w-full border-b-[1px] border-b-third focus:border-b-primary transition-colors"
									control={control}
								></Input>
								<p className="text-[#E74C3C] text-base font-bold h-5">
									{errors.firstNameContact ? errors.firstNameContact?.message : ''}
								</p>
							</div>
							<div className="flex flex-col gap-2 w-full md:w-1/2 px-3">
								<label htmlFor="lastNameContact">Last name</label>
								<Input
									type="text"
									name="lastNameContact"
									id="lastNameContact"
									placeholder="Enter your last name"
									className="pb-3 outline-none w-full border-b-[1px] border-b-third focus:border-b-primary transition-colors"
									control={control}
								></Input>
								<p className="text-[#E74C3C] text-base font-bold h-5">
									{errors.lastNameContact ? errors.lastNameContact?.message : ''}
								</p>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<div className="flex flex-col gap-2 w-full md:w-1/2 px-3">
								<label htmlFor="emailContact">Mail</label>
								<Input
									type="text"
									name="emailContact"
									id="emailContact"
									placeholder="Enter your email"
									className="pb-3 outline-none w-full border-b-[1px] border-b-third focus:border-b-primary transition-colors"
									control={control}
								></Input>
								<p className="text-[#E74C3C] text-base font-bold h-5">
									{errors.emailContact ? errors.emailContact?.message : ''}
								</p>
							</div>
							<div className="flex flex-col gap-2 w-full md:w-1/2 px-3">
								<label htmlFor="phoneContact">Phone</label>
								<Input
									type="text"
									name="phoneContact"
									id="phoneContact"
									placeholder="Enter your phone number"
									className="pb-3 outline-none w-full border-b-[1px] border-b-third focus:border-b-primary transition-colors"
									control={control}
								></Input>
								<p className="text-[#E74C3C] text-base font-bold h-5">
									{errors.phoneContact ? errors.phoneContact?.message : ''}
								</p>
							</div>
						</div>
						<div className="w-full px-3">
							<label htmlFor="messageContact">Message</label>
							<TextArea
								name="messageContact"
								id="messageContact"
								placeholder="Enter your message"
								control={control}
							></TextArea>
							<p className="text-[#E74C3C] text-base font-bold h-5">
								{errors.messageContact ? errors.messageContact?.message : ''}
							</p>
						</div>
						<Button text={'Send'} className="bg-[#3a276ef8] text-secondary"></Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
