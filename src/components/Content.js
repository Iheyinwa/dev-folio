import { MdFileDownload } from 'react-icons/md';
import { RiBubbleChartFill } from 'react-icons/ri';
import MyResume from '../img/ICE_RESUME.pdf';
export default function Content() {
	return (
		<div className="font-noir text-left mt-40 px-8 lg:items-center lg:flex lg:justify-center">
			<section>
				<RiBubbleChartFill className="z-20 w-6 absolute left-24 text-2xl top-56 text-[#e3cd00]" />
				<RiBubbleChartFill className="z-20 w-6 absolute right-96 text-2xl top-36 text-[#e3cd00]" />
				<RiBubbleChartFill className="z-20 w-6 absolute left-64 text-2xl bottom-24 text-[#e3cd00]" />
				<RiBubbleChartFill className="z-20 w-6 absolute right-40 text-2xl  top-64 text-[#e3cd00]" />
				<div>
					<h1 className="tracking-wide w-[100%] justify-items-center md:text-7xl text-5xl 
				drop-shadow-lg shadow-black font-extrabold mix-blend-lighten uppercase bg-black">
						African Female<br />Developer
					</h1>
				</div>
				<a
					href={MyResume}
					download="Aruogu Chidiebube Resume"
					className="flex items-center justify-center p-4 mt-8 rounded-bl-3xl w-[50%] bg-[#131313]"
				>
					<MdFileDownload size={25} className="animate-bounce" fill="white" />
					<h2 className="font-bold text-xl">Resume</h2>
				</a>
				<div className="bg-ice" />
			</section>
		</div>
	);
}
