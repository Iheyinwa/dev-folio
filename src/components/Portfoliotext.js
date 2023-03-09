import Button from './Button';

export default function PortfolioText({ text }) {
	return (
		<div className="-mt-[170px] lg:-mt-[200px] p-5 text-sm lg:text-lg">
			<div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
				<div className="p-2">
					<p className="text-sm lg:text-lg text-white font-noir w-full">{text}</p>
					{/* <button className="px-4 py-2 text-sm text-white bg-green-600">Visit site</button> */}
					<Button title="Visit Site" />
				</div>
			</div>
		</div>
	);
}
