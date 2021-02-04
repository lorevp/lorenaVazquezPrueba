import logo from './logo.svg';
import './App.css';
import GeolocationForm from './components/GeolocationForm';
import SitumLogo from './components/SitumLogo';
import { Card, Grid } from '@material-ui/core';

function App() {
	return (
		<Grid>
			<Grid item xs={11} lg={6}>
				<Card style={{ padding: '1em', minHeight: '70vh', marginTop: '1em' }}>
					<SitumLogo />
					<GeolocationForm />
				</Card>
			</Grid>
		</Grid>
	);
}

export default App;
