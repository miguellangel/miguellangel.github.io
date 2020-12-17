import React from 'react';
import {withBreakpoints} from 'react-breakpoints';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Portfolio from "./components/Portfolio.js";


const App = ({breakpoints, currentBreakpoint}) => {
	
	
	React.useEffect(() => {
		if (breakpoints[currentBreakpoint] < breakpoints.mobileLandscape) {
			document.getElementsByTagName('html')[0].setAttribute('isMobile', true)
			document.getElementById('navCurveSVG').setAttribute('viewBox', '0 0 300 70')
			Array.from(document.getElementsByClassName('sectionCurveSVG')).map((sectionSVG) => sectionSVG.setAttribute('viewBox', '0 0 300 70'))
		} else {
			document.getElementsByTagName('html')[0].setAttribute('isMobile', false)
			document.getElementById('navCurveSVG').setAttribute('viewBox', '0 0 600 60')
			Array.from(document.getElementsByClassName('sectionCurveSVG')).map((sectionSVG) => sectionSVG.setAttribute('viewBox', '0 0 600 60'))
		}
	})

	return (
		<>
			<Portfolio viewMode={breakpoints[currentBreakpoint] < breakpoints.mobileLandscape ? 'mobile' : 'mobileLandscape'} />
		</>
	)
}

export default withBreakpoints(App);