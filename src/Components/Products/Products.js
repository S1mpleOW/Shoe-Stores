import React from 'react';
import Product from './Product';
import './Products.css';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
export const products = [
	{
		number: 0,
		name: 'Air Jordan 3 GS Cyber Monday',
		price: '3.550.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/6_Giay_Nike/Jordan/Air_Jordan_3_GS_Cyber_Monday/34667561466_8a7dd224ad_k.jpg',
		brand: 'JORDAN',
		code: '398614020',
		desc: 'Air Jordan 3 GS Cyber Monday size nữ, tông màu đơn giản, cổ điển, dễ phối đồ- Fullbox, Brandnew, 100% Authentic, US shipped.- Liên hệ: INBOX FB hoặc CALL: 091 836 1962',
	},
	{
		number: 1,
		name: 'Air Jordan 4 Retro Game Royal',
		price: '5.250.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/AIR_JORDAN_4_RETRO_GAME_ROYAL/_DSC1711.jpg',
		brand: 'JORDAN308497006',
		code: '308497006',
		desc: 'Toàn bộ thân giày được làm bằng da tự nhiên cao cấp- Đệm Air lộ thiên- Hàng có sẵn- Fullbox, Brandnew, 100% Authentic',
	},
	{
		number: 2,
		name: '[HÀNG ORDER] Jordan 1 Ultra High Flyknit - Royal Blue',
		price: '4.250.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/Jordan_1_Ultra_high_Flyknit_Royal_Blue/J1_Ultra_high_Flyknit_Royal_Blue_1.jpg',
		brand: 'JORDAN 1919704006',
		code: '919704006',
		desc: 'Thân giày được làm bằng chất liệu Flyknit cao cấp, độc quyền của Nike, siêu nhẹ và cực kỳ thông thoáng- Phối màu Royal Blue huyền thoại- Hàng có sẵn- Fullbox, Brandnew, 100% Authentic',
	},
	{
		number: 3,
		name: 'Asics Gel-Lyte III "Bright Pack" (Black)',
		price: '3.050.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/10_Asics/Asics_GelLyte_III_Bright_Pack_Black/1.jpg',
		brand: 'ASICSH6Z0L/9090',
		code: 'H6Z0L/9090',
		desc: 'Hàng có sẵn- Fullbox, Brandnew, 100% Authentic, US shipped.',
	},
	{
		number: 4,
		name: 'Nike Flyknit Racer',
		price: '3.850.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/Nike_Flyknit_Racer/49648711136_a4590dc997_k.jpg',
		brand: 'NIKE526628 731',
		code: '526628 731',
		desc: 'Hàng có sẵn- Fullbox, Brandnew, 100% Authentic',
	},
	{
		number: 5,
		name: 'Adidas Swift Run',
		price: '1.500.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/Adidas_Swift_Run/49199090433_0767400426_k.jpg',
		brand: 'ADIDASB37117',
		code: 'B37117',
		desc: 'Hàng có sẵn- Fullbox, Brandnew, 100% Authentic',
	},
	{
		number: 6,
		name: "Nike Air Max 1 Premium 'Dark Curry'",
		price: '5.000.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/6_Giay_Nike/Air_max/Nike_Air_Max_1_Premium_Dark_Curry_/1.jpg',
		brand: 'NIKE908366700',
		code: '908366700',
		desc: 'Hàng có sẵn- Fullbox, Brandnew, 100% Authentic, US shipped.',
	},
	{
		number: 7,
		name: 'Nike Flyknit Racer',
		price: '3.850.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/Nike_Flyknit_Racer_1/49648169483_c639235c5a_k.jpg',
		brand: 'NIKE526628 009',
		code: '526628 009',
		desc: 'Hàng có sẵn- Fullbox, Brandnew, 100% Authentic',
	},
	{
		number: 8,
		name: 'Air Jordan 4 Retro Laser Black Gum',
		price: '6.500.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/6_Giay_Nike/Jordan/Air_Jordan_4_Retro_Laser_30th_Anniversary/1.jpg',
		brand: 'JORDANCI1184-001',
		code: 'CI1184-001',
		desc: 'Hàng có sẵn- Fullbox, Brandnew, 100% Authentic',
	},
	{
		number: 9,
		name: 'Air Jordan 11 Retro - UNC',
		price: '5.500.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/6_Giay_Nike/Jordan/Air_Jordan_11_Retro_UNC/1.jpg',
		brand: 'JORDAN528895106',
		code: '528895106',
		desc: 'Hàng có sẵn- Fullbox, Brandnew, 100% Authentic, US shipped.',
	},
	{
		number: 10,
		name: 'Air Jordan 5 Retro "Satin Bred"',
		price: '5.500.000d',
		imgUrl:
			'http://103.56.156.239:82/filemanager/userfiles/6_Giay_Nike/Jordan/Air_Jordan_5_Retro_Satin_Bred/1.jpg',
		brand: 'JORDAN136027006',
		code: '136027006',
		desc: 'Hàng có sẵn- Fullbox, Brandnew, 100% Authentic, US shipped.',
	},
];

const Products = () => {
	const params = useParams().productId;
	console.log(params);
	return (
		<div className="container">
			{params ? (
				<ProductCard></ProductCard>
			) : (
				<section className="grid grid-cols-1 gap-5 md:grid-cols-3">
					{products.map((product, index) => {
						return (
							<Product
								key={index}
								id={index}
								name={product.name}
								price={product.price}
								imgUrl={product.imgUrl}
								brand={product.brand}
								code={product.code}
								desc={product.desc}
							></Product>
						);
					})}
				</section>
			)}
		</div>
	);
};

export default Products;

export function getProduct(number) {
	return products.find((product) => product.number === number);
}
