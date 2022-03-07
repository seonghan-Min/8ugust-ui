import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import instagram from './img/Instagram_logo.png';
import github from './img/Github_logo.png';
import profile from './img/profile.png';
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
					<img src={instagram} onClick={() => window.location.href="https://www.instagram.com/8ugust_run/"}></img>
					<img src={github} onClick={() => window.location.href="https://github.com/seonghan-Min"}></img>
				</div>
			</header>
			<div className='content-wrap'>
				<div className='left'>
					dsfasddfsa
				</div>
				<div className='right'>
					<div className='instagram'>
						<div>
							<img src={profile}></img> 
							<p>8ugust_run</p>
						</div>
						<img src={profile}></img>
					</div>
				</div>
			</div>
		</>
  );
}

export default App;
