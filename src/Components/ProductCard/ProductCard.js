import React from 'react';
import Button from '../Button/Button';
import { useParams } from 'react-router-dom';
import { getProduct } from '../Products/Products';
const ProductCard = () => {
	let { name, brand, desc, imgUrl } = getProduct(parseInt(useParams().productId));
	return (
		<div className="container">
			<section className="flex flex-col justify-between gap-3 md:flex-row">
				<img
					src={`${imgUrl}`}
					alt="product"
					className="md:w-[40%] lg:max-h-[450px] md:max-h-[400px] shrink-0 rounded-lg object-cover"
				/>
				<div className="flex flex-col md:w-[60%] py-8 px-4 bg-secondary rounded-xl">
					<h3 className="font-medium text-[16px] lg:text-[20px] leading-5 mb-2 text-truncate">
						{name}
					</h3>
					<div className="flex items-center mt-4">
						<div className="flex gap-x-2 mr-2 text-[13px]">
							<i className="fa fa-star text-primary"></i>
							<i className="fa fa-star text-primary"></i>
							<i className="fa fa-star text-primary"></i>
							<i className="fa fa-star text-primary"></i>
							<i className="fa fa-star"></i>
						</div>
						<span className="pl-2 text-sm border-l-2 border-primary">
							Brand: <strong>{brand}</strong>
						</span>
					</div>
					<div className="mt-4">
						<span className="text-base">Detail</span>
						<p className="text-[14px] font-normal leading-5 mt-3">{desc}</p>
					</div>
					<div className="mt-4">
						<form className="flex flex-col gap-y-5">
							<div className="flex items-center gap-4">
								<label htmlFor="size">Size</label>
								<select
									name="size"
									id="size"
									className="border rounded-lg outline-none border-primary"
								>
									<option value="S">S</option>
									<option value="M">M</option>
									<option value="L">L</option>
									<option value="XL">XL</option>
								</select>
							</div>
							<div className="flex items-center gap-4">
								<label htmlFor="quantity">Quantity</label>
								<input
									type="number"
									name="quantity"
									id="quantity"
									defaultValue={38}
									min="38"
									max="43"
									className="px-2 py-1 border rounded-lg outline-none border-primary"
								/>
							</div>
							<div className="flex items-center gap-4 ml-auto mr-auto md:mr-0">
								<Button text={'add to cart'} className={'flex items-center'}>
									<i className="fas fa-shopping-cart text-[14px] mr-2"></i>
								</Button>
								<Button text={'Buy now'} className={''}></Button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductCard;
