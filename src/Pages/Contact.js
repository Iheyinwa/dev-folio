import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import Form from '../components/Form';

export default function Contact() {
	return (
		<section id="contact" className="grid lg:grid-cols-4 grid-cols-2 items-center mx-[7%] mt-[13%]">
			<aside className="col-span-2 mx-auto mb-20">
				<h3 className="text-3xl md:text-5xl font-noir">Get In Touch</h3>
				<div className="grid grid-cols-2 gap-4 mt-4">
					<a href="https://linkedin.com/in/aruogu-chidiebube" className="cursor-pointer flex gap-[4px] ">
						<BsLinkedin size={25} />
						<p>LinkedIn</p>
					</a>{' '}
					<a href="https://twitter.com/abubay28" className="cursor-pointer flex gap-[4px]">
						<BsTwitter size={25} />
						<p>Twitter</p>
					</a>
					<a href="https://wa.me/+2348171681400" className="cursor-pointer flex gap-[4px] ">
						<BsWhatsapp size={25} />
						<p>Whatsapp</p>
					</a>
					<a href="https://github.com/Iheyinwa" className="cursor-pointer flex gap-[4px] ">
						<BsGithub size={25} />
						<p>Github</p>
					</a>
				</div>
			</aside>
			<Form />
		</section>
	);
}
