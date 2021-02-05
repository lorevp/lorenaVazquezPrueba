import './App.css';
import GeolocationForm from './components/GeolocationForm';
import SitumLogo from './components/SitumLogo';
import Frame from './components/Frame';

function App() {
	return (
		<Frame>
			<SitumLogo />
			<GeolocationForm />
		</Frame>
	);
}

export default App;
