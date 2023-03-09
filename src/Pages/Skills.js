import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa';
import { RiBubbleChartFill } from 'react-icons/ri';
import Skillset from '../components/Skillset';
import { MATERIALUI, NEXTJS, REACTJS, TAILWINDCSS, TYPESCRIPT } from '../Icons';

export default function Skills() {
	return (
		<main>
			<RiBubbleChartFill className="z-20 w-6 relative left-24 text-2xl top-[300px] text-[#e3cd00]" />
			<RiBubbleChartFill className="z-20 w-6 absolute left-[90%] text-2xl top-[900px] text-[#e3cd00]" />
			<section
				id="skills"
				className="mx-[7%] my-24 md:p-24 p-12 w-[86%] h-full bg-skills-section backdrop-blur-xs flex gap-4 flex-col md:flex-row justify-around rounded-3xl"
			>
				<Skillset
					title="Languages"
					children={
						<div className="grid gap-4 md:grid-cols-4 grid-cols-2">
							<FaHtml5 size={50} fill="rgba(227,76,38,1)" />
							<FaCss3 size={50} fill="rgba(38,77,228,1)" />
							<FaJs size={50} fill="#f0db4f" />
							<TYPESCRIPT />
						</div>
					}
				/>
				<Skillset
					title="Frameworks"
					children={
						<div className="grid gap-4 md:grid-cols-4 grid-cols-2">
							<REACTJS />
							<NEXTJS />
							<TAILWINDCSS />
							<MATERIALUI />
						</div>
					}
				/>
			</section>
		</main>
	);
}
