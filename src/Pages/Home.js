import Navigation from '../components/Navigation';
import Content from '../components/Content';
import Skills from './Skills';
import Portfolio from './Portfolio';

export default function Home() {
	return (
		<div className="w-full h-[100vh]" id="home">
			<Navigation />
			<Content />
			<Skills />
			<Portfolio />
		</div>
	);
}
