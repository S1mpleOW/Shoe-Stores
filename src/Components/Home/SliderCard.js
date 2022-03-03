import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Button from '../Button/Button';
import './home.css';
const SliderCard = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		// autoplay: true,
		// lazyLoad: true,
		// autoplaySpeed: 5000,
		// className: 'slides',
	};
	return (
		<Slider {...settings} className="flex items-center">
			<div className="card">
				<img
					className="w-full h-full object-cover"
					src="https://source.unsplash.com/random/1"
					alt=""
				/>
				<div className="card-content">
					<h2 className="text-xl font-semibold text-secondary mb-2">Spring 2020</h2>
					<Button text={'Detail'} className="bg-transparent"></Button>
				</div>
			</div>
			<div className="card">
				<img
					className="w-full h-full object-cover"
					src="https://source.unsplash.com/random/2"
					alt=""
				/>
				<div className="card-content">
					<h2 className="text-xl font-semibold text-secondary mb-2">Spring 2020</h2>
					<Button text={'Detail'} className="bg-transparent"></Button>
				</div>
			</div>
			<div className="card">
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
		</Slider>
	);
};

export default SliderCard;
