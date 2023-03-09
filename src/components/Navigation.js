// import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import { useState } from 'react';
import ice from '../img/ice.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navigation() {
	const [ open, setOpen ] = useState(false);
	const onclick = () => {
		setOpen(!open);
	};
	return (
		<div className="lg:flex items-center lg:justify-between w-full overflow-hidden font-noir sticky">
			<div className="flex items-center px-12 py-8 ">
				<img src={ice} alt="profile" width="50px" height="50px" className="rounded-full pr-3" />
				<AnchorLink href="#home">
					<h1 className="text-3xl text-[#fff] font-noir">ICE</h1>
				</AnchorLink>
			</div>
			<button onClick={onclick}>
				{open ? (
					<FaTimes className="cursor-pointer text-3xl absolute right-[3%] top-[5.5%] lg:hidden text-white" />
				) : (
					<FaBars className="cursor-pointer text-3xl  absolute right-[3%] top-[5.5%] lg:hidden text-white" />
				)}
			</button>

			<ul
				className={`lg:flex items-center transition-all duration-500 ease-in w-[50%] font-noir ${open
					? 'h-screen opacity-100 mx-auto'
					: 'h-0.5 opacity-1'}`}
			>
				<AnchorLink href="#home">
					<li className="rounded-lg px-3 py-1 lg:text-xl text-3xl font-noir hover:text-white">
						<Button title="Home" />
					</li>
				</AnchorLink>
				<AnchorLink href="#skills">
					<li className="rounded-lg px-3 py-1 lg:text-xl text-3xl font-noir hover:text-white">
						<Button title="Skills" />
					</li>
				</AnchorLink>
				<AnchorLink href="#portfolio">
					<li className="rounded-lg px-3 py-1 lg:text-xl text-3xl font-noir hover:text-white">
						<Button title="Portfolio" />
					</li>
				</AnchorLink>

				<AnchorLink href="#contact">
					<li className="rounded-lg px-3 py-1 lg:text-xl text-3xl font-noir hover:text-white">
						<Button title="Contact" />
					</li>
				</AnchorLink>
			</ul>
		</div>
	);
}
