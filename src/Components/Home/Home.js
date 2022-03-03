import React from 'react';
import Button from '../Button/Button';
import './home.css';
import SliderCard from './SliderCard';

const Home = () => {
	return (
		<div className="container">
			<section className="flex flex-col md:grid grid-rows-[220px,220px,440px] grid-cols-4 gap-3">
				<div className="h-[250px] md:h-[450px] w-full rounded-xl overflow-hidden col-start-1 col-end-3 row-start-1 row-end-3 card">
					<img
						className="w-full h-full object-cover"
						src="https://source.unsplash.com/random"
						alt=""
					/>
					<div className="card-content">
						<h2 className="text-xl font-semibold text-secondary mb-2">Spring 2020</h2>
						<Button text={'Detail'} className="bg-transparent"></Button>
					</div>
				</div>
				<div className="h-[750px] md:h-[450px] rounded-xl overflow-hidden col-start-3 col-end-5 row-start-1 row-end-3 flex flex-col md:grid grid-rows-2 grid-cols-2 gap-3">
					<div className="w-full col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl overflow-hidden card">
						<img
							className="w-full h-full object-cover"
							src="https://source.unsplash.com/random"
							alt=""
						/>
						<div className="card-content">
							<h2 className="text-xl font-semibold text-secondary mb-2">Spring 2020</h2>
							<Button text={'Detail'} className="bg-transparent"></Button>
						</div>
					</div>
					<div className="col-start-2 col-end-3 row-start-1 row-end-2 rounded-xl overflow-hidden card">
						<img
							className="w-full h-full object-cover"
							src="https://source.unsplash.com/random"
							alt=""
						/>
						<div className="card-content">
							<h2 className="text-xl font-semibold text-secondary mb-2">Spring 2020</h2>
							<Button text={'Detail'} className="bg-transparent"></Button>
						</div>
					</div>
					<div className="col-start-1 col-end-3 row-start-2 row-end-3 rounded-xl overflow-hidden card">
						<img
							className="w-full h-full object-cover"
							src="https://source.unsplash.com/random"
							alt=""
						/>
						<div className="card-content">
							<h2 className="text-xl font-semibold text-secondary mb-2">Spring 2020</h2>
							<Button text={'Detail'} className="bg-transparent"></Button>
						</div>
					</div>
				</div>
				<div className="h-[250px] md:h-[450px] w-full rounded-xl col-start-1 col-end-5 row-start-3 row-end-4">
					<SliderCard></SliderCard>
				</div>
			</section>
		</div>
	);
};

export default Home;
