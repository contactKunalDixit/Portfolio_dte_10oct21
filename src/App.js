import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';

function App() {
	return (
		<div className='App'>
			<Intro></Intro>
			<About></About>
			<ProductList />
		</div>
	);
}

export default App;
