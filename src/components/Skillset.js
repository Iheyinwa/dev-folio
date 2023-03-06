export default function Skillset({ title, children }) {
	return (
		<div className="font-noir p-12 rounded-tl-3xl rounded-br-3xl backdrop-blur-[25.5px] bg-[rgba(8, 8, 8, 0.8)] lg:w-[40%] md:h-[164px] h-fit outline outline-[#e3cd00]">
			<span className="mt-8 text-3xl md:text-5xl">{title}</span>
			{children}
		</div>
	);
}
