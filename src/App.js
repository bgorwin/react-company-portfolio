import React from 'react';
// Global Style
import GlobalStyle from './components/GlobalStyle';
// Import Pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

// Router
import { Switch, Route, useLocation } from 'react-router-dom';

// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<div className='App'>
			<Nav />
			<GlobalStyle />

			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path='/react-personal-portfolio/' exact>
						<AboutUs />
					</Route>

					<Route path='/react-personal-portfolio/work' exact>
						<OurWork />
					</Route>
					<Route path='/react-personal-portfolio/work/:id' exact>
						<MovieDetail />
					</Route>
					<Route path='/react-personal-portfolio/contact' exact>
						<ContactUs />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
