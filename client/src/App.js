import './App.css';
import GeolocationForm from './components/GeolocationForm';
import SitumLogo from './components/SitumLogo';
import { Card, Grid } from '@material-ui/core';
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
