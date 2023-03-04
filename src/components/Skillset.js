export default function Skillset({ title, children }) {
	return (
		<div className="font-noir p-12 rounded-tl-3xl rounded-br-3xl backdrop-blur-[25.5px] bg-[rgba(8, 8, 8, 0.8)] w-[40%] h-[164px] outline outline-[#e3cd00]">
			<span className="mt-12 text-3xl">{title}</span>
			{children}
		</div>
	);
}
