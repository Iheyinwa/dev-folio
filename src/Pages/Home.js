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
		</div>
	);
}
