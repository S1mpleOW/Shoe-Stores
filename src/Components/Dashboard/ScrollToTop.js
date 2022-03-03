import React from 'react';

const ScrollToTop = () => {
	const [activeScroll, setActiveScroll] = React.useState(false);
	const handleScrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	React.useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 50) {
				setActiveScroll(true);
			} else {
				setActiveScroll(false);
			}
		};
		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);
	return (
		<div
			className={`${
				activeScroll
					? 'fixed bottom-0 right-0 mb-5 mr-5 w-[50px] h-[50px] bg-primary text-secondary flex items-center justify-center cursor-pointer rounded-lg z-50'
					: 'hidden'
			}`}
			onClick={handleScrollTop}
		>
			<i className="fa fa-angle-up text-[30px]"></i>
		</div>
	);
};

export default ScrollToTop;
