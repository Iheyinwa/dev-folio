import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa';
import Skillset from '../components/Skillset';
import { MATERIALUI, NEXTJS, REACTJS, TAILWINDCSS } from '../Icons';

export default function Skills() {
	return (
		<section
			id="skills"
			className="mx-[7%] my-24 p-24 w-[86%] h-[56%] bg-skills-section backdrop-blur-xs flex gap-4 flex-col md:flex-row justify-around rounded-3xl"
		>
			<Skillset
				title="Languages"
				children={
					<div className="flex gap-4">
						<FaHtml5 size={50} fill="rgba(227,76,38,1)" />
						<FaCss3 size={50} fill="rgba(38,77,228,1)" />
						<FaJs size={50} fill="#f0db4f" />
					</div>
				}
			/>
			<Skillset
				title="Frameworks"
				children={
					<div className="flex gap-4">
						<REACTJS />
						<NEXTJS />
						<TAILWINDCSS />
						<MATERIALUI />
					</div>
				}
			/>
		</section>
	);
}
