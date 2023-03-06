import { BsFillCursorFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Form() {
	const form = useRef();
	// const msg = document.getElementById('msg');

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('chidiebube_service', 'contact_form', form.current, 't0LUiQUyNh5dMeP94').then(
			() => {
				alert('sent');
				e.target.reset();
			},
			() => {
				alert('An error occurred. Please try again soon');
			}
		);
	};

	return (
		<div className="max-w-full bg-[#000] flex items-center justify-center 
			shadow-outerShadow relative mx-auto rounded-3xl p-4 col-span-2
			">
			<span className="w-[95%] h-[95%] rounded-3xl bg-transparent absolute shadow-innerShadow" />
			<form className="m-4" onSubmit={sendEmail} ref={form}>
				<BsFillCursorFill className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] 
					bg-[#ececec] text-5xl text-[#000556] rounded-full p-[5px] shadow-outerShadow" />

				<div className="w-full flex items-center my-2.5 relative px-12">
					{/* <label className="basis-[28%]">Full Name</label> */}
					<input
						type="text"
						name="full_name"
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

				<button
					type="submit"
					className="cursor-pointer bg-[#e3cd00] text-[#000] font-noir rounded-bl-3xl
					 py-[10px] px-[40px] mt-[30px] ml-[25%] "
				>
					Submit
				</button>
				<span className="block mt-8 ml-[35%] text-[#00b300] text-lg" id="msg" />
			</form>
		</div>
	);
}
