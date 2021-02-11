import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-brands-svg-icons";

const PortfolioModalSliderItem = ({ modal, index, length, setActiveIndex }) => {
	console.log(index);
	return (
		<Carousel.Item key={modal.id}>
			<div>
				<Carousel.Caption>
					<a
						href={`http://192.168.0.136:4500${modal.image.url}`}
						rel={modal.type}
						className='project-wrp fancybox'
						title={modal.title}>
						{modal.title}
					</a>
					<div class='slider-desc'>{modal.description}</div>
				</Carousel.Caption>
				<img
					src={`http://192.168.0.136:4500${modal.image.url}`}
					alt={modal.description}
				/>
			</div>
			<div className='carousel-next-prev-icons'>
				<FontAwesomeIcon
					className='carousel-icon carousel-prev-icon'
					icon={All.faAngrycreative}
					onClick={() => {
						if (index == 0) {
							setActiveIndex(length - 1);
						} else {
							setActiveIndex((prev) => prev - 1);
						}
					}}
				/>
				<FontAwesomeIcon
					className='carousel-icon carousel-next-icon'
					icon={All.faAngrycreative}
					onClick={() => {
						if (index == length - 1) {
							setActiveIndex(0);
						} else {
							setActiveIndex((prev) => prev + 1);
						}
					}}
				/>
			</div>
		</Carousel.Item>
	);
};

export default PortfolioModalSliderItem;