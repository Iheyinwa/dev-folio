import { MdFileDownload } from 'react-icons/md';
import { motion } from 'framer-motion';
import MyResume from "../img/ARUOGU-CHIDIEBUBE-RESUME.pdf";

const paragraphVariants = {
	hidden:{
		opacity: 0,
	},
	visible:{
		opacity:1,
		transition:{
		delay: 0.5,
		ease: 'easeIn'
		}
	}

}
export default function Content() {
	return (
		<div className="font-noir text-left mt-40 px-8 lg:items-center lg:flex lg:justify-center">
			<section>
				<div>
					<motion.h1
					variants={paragraphVariants}
					initial='hidden'
					animate='visible'
					 className="tracking-wide w-[100%] justify-items-center md:text-7xl text-5xl 
				drop-shadow-lg shadow-black font-extrabold mix-blend-lighten uppercase bg-black">
						African Female<br />Developer
					</motion.h1>
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
