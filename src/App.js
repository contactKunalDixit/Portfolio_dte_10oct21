import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<div className='App'>
			<Intro />
			<About />
			<ProductList />
			<Contact />
		</div>
	);
}

export default App;
