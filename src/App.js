import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import instagram from './img/Instagram_logo.png';
import './index.css';

function App() {
	return (
		<>
			<header>
				<div className='site-title'>
					<h1>8UGUST.LOG</h1>
					<div>DEVELOPMENT & LIFE</div>
				</div>
				<div className='menu-container-pc'>
					<div>
						<p>Introduce</p>
					</div>
					<div>
						<p>Knowledge</p>
						<span>▼</span>
					</div>
					<div>
						<p>Development</p>
						<span>▼</span>
					</div>
					<div>
						<p>Life</p>
						<span>▼</span>
					</div>
				</div>
				<div className='menu-container-mobile'>
					<div>
						<p>Main Menu</p>
						<span>▼</span>
					</div>
				</div>
				<div className='site'>
					<img src={instagram}></img>
				</div>
			</header>
			<div className='content-wrap'>fdsafdsfdasfds</div>
		</>
  );
}

export default App;
