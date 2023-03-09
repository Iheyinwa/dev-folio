import Black from '../img/blackndwhite.png';
import iceAbubay from '../img/ice-abubay.png';
import abcd from '../img/abcd.png';
import rhinospine from '../img/rhinospine.png';
import cactus from '../img/cactus.png';
import PortfolioText from '../components/Portfoliotext';
export default function Portfolio() {
	return (
		<div id="portfolio">
			<p className="text-3xl md:text-5xl mx-24 font-noir">Portfolio</p>
			<section className="grid grid-cols-2 mx-[7%] mt-4 gap-8">
				<a
					className="w-full group col-span-2 rounded-br-3xl h-full shadow-2xl border"
					href="../img/blackndwhite.png"
					target="_blank"
				>
					<img src={Black} alt="Black + White" className="object-cover w-full group-hover:opacity-50" />
					<PortfolioText text="Black and White Landing Page created with HTML and CSS" />
				</a>
				<a
					className="w-full group rounded-br-3xl h-full shadow-2xl border"
					href="https://ice-abubay.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={iceAbubay} alt="Ice Portfolio" className="object-cover w-full group-hover:opacity-50" />
					<PortfolioText text="Aruogu Chidiebube's Portfolio created using Reactjs and TailwindCSS" />
				</a>
				<a
					className="w-full group rounded-br-3xl h-full shadow-2xl border"
					href="https://abcd-eta.vercel.app/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={abcd} alt="ABCD" className="object-cover w-full group-hover:opacity-50" />
					<PortfolioText text="ABCD Design from Figma created with Nextjs and TailwindCSS" />
				</a>
				<a
					className="w-full group rounded-br-3xl h-full shadow-2xl border"
					href="https://rhinospine.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={rhinospine} alt="Black + White" className="object-cover w-full group-hover:opacity-50" />
					<PortfolioText text="Black and White Landing Page created with HTML and CSS" />
				</a>
				<a
					className="w-full group rounded-br-3xl h-full shadow-2xl border"
					href="https://cactusinsurance.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={cactus} alt="Cactus" className="object-cover w-full group-hover:opacity-50" />
					<PortfolioText text="Cactus Insurance Company Design Template using Reactjs and TailwindCSS" />
				</a>
			</section>
		</div>
	);
}
