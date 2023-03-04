// import { useState } from "react"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function Carousel() {
	// const [index, setIndex] = useState(0);
	// const length=5;
	// const handlePrevious=()=>{
	//   const newIndex = index - 1;
	//   setIndex(newIndex < 0 ? length - 1 : newIndex);
	// }
	// const handleNext =()=>{
	//   const newIndex = index + 1;
	//   setIndex(newIndex >= length ? 0 : newIndex);
	// }
	return (
		<section>
			<BsFillArrowLeftCircleFill size={50} />
			<BsFillArrowRightCircleFill size={50} />
		</section>
	);
}
