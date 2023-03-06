import Black from '../img/blackndwhite.png';
export default function Portfolio() {
	return (
		<div id="portfolio">
			<p className="text-3xl md:text-5xl mx-24 font-noir">Portfolio</p>
			<section className="grid grid-cols-2 mx-[7%] mt-4 gap-8">
				<img src={Black} alt="Black + White" className="col-span-2 rounded-br-3xl w-full" />
				<img src={Black} alt="Black + White" className="col-span-1 rounded-br-3xl" />
				<img src={Black} alt="Black + White" className="rounded-br-3xl" />
				<img src={Black} alt="Black + White" className="rounded-br-3xl" />
				<img src={Black} alt="Black + White" className="rounded-br-3xl" />
			</section>
		</div>
	);
}
