import { useCallback } from "react";

const Swiper = ({ images, currentImage, setCurrentImage }) => {
	const next = useCallback(() => {
		setCurrentImage((oldValue) => (oldValue + 1) % images.length);
	}, [setCurrentImage]);

	const prev = useCallback(() => {
		setCurrentImage(
			(oldValue) => (oldValue - 1 + images.length) % images.length,
		);
	}, [setCurrentImage]);

	return (
		<div className="swiper">
			<div className="swiper-window">
				<img src={images[currentImage].url} alt="" className="swiper-img" />
			</div>
			<button onClick={() => prev()} className="btn swiper-btn">
				&lt;
			</button>
			<button onClick={() => next()} className="btn swiper-btn">
				&gt;
			</button>
		</div>
	);
};

export default Swiper;
