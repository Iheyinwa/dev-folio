import { BsFillCursorFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

export default function Form() {
	const [ values, setValues ] = useState({
		fullName: '',
		email: '',
		message: ''
	});
	const form = useRef();
	const [ status, setStatus ] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		// console.log(values);
		emailjs
      .sendForm("ice-service", "ice-form", e.target, "t0LUiQUyNh5dMeP94")
      .then(
        (response) => {
          console.log("SUCCESS!", response);

          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        },
		setValues({
          fullName: "",
          email: "",
          message: "",
        }),
        e.target.reset()
      );
	};

	useEffect(
		() => {
			if (status === 'SUCCESS') {
          setTimeout(() => {
            setStatus("");
          }, 3000);
			}
		},
		[ status ]
	);

	const handleChange = (e) => {
		setValues((values) => ({
			...values,
			[e.target.name]: e.target.value
		}));
	};

	const renderAlert = () => (
		<div className="flex-column px-4 text-[#008631] bg-black shadow-xl rounded text-center w-full">
			<p>your message submitted successfully</p>
		</div>
	);

	return (
    <div
      className="max-w-full bg-[#000] flex flex-col items-center justify-center 
			shadow-outerShadow relative mx-auto rounded-3xl p-4 col-span-2
			"
    >
      <form className="m-4" ref={form} onSubmit={sendEmail}>
        <BsFillCursorFill
          className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] 
					bg-[#000] text-5xl text-[#e3dc00] rounded-full p-[5px] shadow-outerShadow"
        />
        {status && renderAlert()}
        <div className="my-[15px] relative px-12">
          <label className="text-gray-500 text-sm" htmlFor="fullName">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            onChange={handleChange}
            defaultValue={values.fullName}
            className="bg-transparent border border-solid rounded p-[10px] text-[#fff] text-[16px] w-full focus:border-none caret-[#e3cd00] accent-[#e3cd00]"
          />
        </div>

        <div className="my-[15px] relative px-12">
          <label className="text-gray-500 text-sm" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            defaultValue={values.email}
            className="bg-transparent border border-solid rounded p-[10px] text-[#fff] text-[16px] w-full focus:border-none caret-[#e3cd00] accent-[#e3cd00]"
          />
        </div>

        <div className="my-[15px] relative px-12">
          <label className="text-gray-500 text-sm" htmlFor="message">
            Your Message
          </label>
          <textarea
            rows="5"
            name="message"
            onChange={handleChange}
            defaultValue={values.message}
            placeholder="Enter your message"
            className="bg-transparent border border-solid rounded p-[10px] text-[#fff] text-[16px] w-full focus:border-none caret-[#e3cd00] accent-[#e3cd00]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#e3cd00] hover:bg-[#008631] text-[#000] font-noir
					 py-[10px] px-[40px] mt-[30px] ml-[25%] cursor-pointer rounded-bl-3xl"
        >
          Send
        </button>
      </form>
    </div>
  );
}
