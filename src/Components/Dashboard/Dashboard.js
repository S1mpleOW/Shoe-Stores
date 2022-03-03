import React from 'react';
import logo from '../../asset/logoWhite.png';
import Button from '../Button/Button';
import Signout from '../Form/Signout';
import { useOutletContext } from 'react-router-dom';
import { products } from '../Products/Products';
import './Dashboard.css';
const Dashboard = () => {
	const { activeSidebar, setActiveSidebar } = useOutletContext();
	const handleAddProduct = () => {
		console.log('add product');
	};

	return (
		<div
			className={`mb-[30px] mr-0 ml-0 px-5 transition-all duration-500 ease-in-out ${
				activeSidebar ? 'md:ml-[220px] lg:mr-[100px]' : 'md:mx-auto max-w-[1200px]'
			}`}
		>
			<div className="w-full bg-primary h-[100px] rounded-xl mt-5 flex items-center justify-between p-4">
				<img src={logo} alt="logo" className="block object-cover" />
				<i
					className="cursor-pointer fa fa-bars text-secondary"
					onClick={() => setActiveSidebar(!activeSidebar)}
				></i>
			</div>
			<div className="grid gap-5 mt-5 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
				{products.map((item, index) => {
					return (
						<div className="flex flex-col p-3 bg-secondary rounded-xl" key={`product-${index}`}>
							<h3 className="mb-3 text-base">{item.name}</h3>
							<img
								src={item.imgUrl}
								alt="imageProduct"
								className="object-cover w-full mt-auto h-100px rounded-xl"
							/>
							<div className="flex flex-col">
								<Button text="Edit product" className="mt-3"></Button>
								<Button text="Delete product" className="mt-3"></Button>
							</div>
						</div>
					);
				})}
				<div
					className="flex flex-col items-center justify-center p-3 cursor-pointer bg-secondary rounded-xl"
					onClick={handleAddProduct}
				>
					<i className="fa-solid fa-plus text-[50px]"></i>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
