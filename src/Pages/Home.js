import Navigation from '../components/Navigation';
import Content from '../components/Content';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function Home() {
	return (
		<div id="home">
			<Navigation />
			<Content />
			<Skills />
			<Portfolio />
			<Contact />
			<hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
			<p>Text</p>
		</div>
	);
}
