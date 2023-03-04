import { BsFillCursorFill } from 'react-icons/bs';
import Navigation from '../components/Navigation';
import emailjs from '@emailjs/browser';
export default function Contact() {
	const msg = document.getElementById('msg');
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('chidiebube_service', 'contact_form', e.target, 't0LUiQUyNh5dMeP94').then(
			(result) => {
				msg.innerHTML = 'Thank you for subscribing!';
				setTimeout(function() {
					msg.innerHTML = '';
				}, 5000);
				e.target.reset();
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div id="contact">
			<Navigation />
			<div className="max-w-[500px] bg-[#ececec] flex items-center justify-center 
			shadow-outerShadow relative mx-auto rounded-3xl p-4
			">
				<span className="w-[95%] h-[95%] rounded-3xl bg-transparent absolute shadow-innerShadow" />
				<form className="m-4" onSubmit={sendEmail}>
					<BsFillCursorFill className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] 
					bg-[#ececec] text-5xl text-[#000556] rounded-full p-[5px] shadow-outerShadow" />

					<div className="w-full flex items-center my-2.5 relative px-12">
						{/* <label className="basis-[28%]">Full Name</label> */}
						<input
							type="text"
							name="from_name"
							placeholder="Enter your name"
							className="basis-[68%] bg-transparent border-b border-solid outline-0 py-[10px] text-[#333] text-[16px]"
						/>
					</div>

					<div className="w-full flex items-center my-2.5 relative px-12">
						{/* <label className="basis-[28%]">Phone No.</label> */}
						<input
							type="tel"
							name="phone"
							placeholder="123 456 7890"
							className="basis-[68%] bg-transparent border-b border-solid outline-0 py-[10px] text-[#333] text-[16px]"
						/>
					</div>

					<div className="w-full flex items-center my-2.5 relative px-12">
						{/* <label className="basis-[28%]">Email Id</label> */}
						<input
							type="email"
							name="email_id"
							placeholder="Enter Email"
							className="basis-[68%] bg-transparent border-b border-solid outline-0 py-[10px] text-[#333] text-[16px]"
						/>
					</div>

					<div className="w-full flex items-center my-2.5 relative px-12">
						{/* <label className="basis-[28%]">Your Message</label> */}
						<textarea
							rows="5"
							name="message"
							placeholder="Enter your message"
							className="basis-[68%] bg-transparent border-b border-solid outline-0 py-[10px] text-[#333] text-[16px]"
						/>
					</div>

					<button className="bg-[#000556] text-[#fff] rounded border border-solid
					 border-[rgba(255, 255, 255, 0.5)] py-[10px] px-[40px] cursor-pointer mt-[30px] ml-[25%] ">
						Submit
					</button>
					<span className="block mt-8 ml-[35%] text-[#00b300] text-lg" id="msg" />
				</form>
			</div>
		</div>
	);
}
