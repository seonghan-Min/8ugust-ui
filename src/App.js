import './index.css';
import './media.css';
import profile from './img/profile.png';
import github from './img/Github_logo.png';
import { Link, Route } from 'react-router-dom';
import instagram from './img/Instagram_logo.png';
import PostList from './components/Blog/Tistory/index';
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";

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
					<img alt='instagram' src={instagram} onClick={() => window.location.href="https://www.instagram.com/8ugust_run/"}></img>
					<img alt='github' src={github} onClick={() => window.location.href="https://github.com/seonghan-Min"}></img>
				</div>
			</header>
			<div className='content-wrap'>
				<div className='left'>
					dsfasddfsa
				</div>
				<div className='right'>
					<div className='recent-post'>
						<div className='title'>
							<h2>New Post</h2>
						</div>
						<div className='list'>
							
						</div>
					</div>
					<div className='instagram'>
						<div className='title'>
							<img alt='profile' src={profile}></img> 
							<p>8ugust_run</p>
						</div>
						<div className='insta-img'>
							<img alt='profile' src={profile}></img>
						</div>
						<div className='insta-footer'>
							<span><FaRegHeart size={22}/></span>
							<span><FaRegComment size={22}/></span>
							<span><FaRegPaperPlane size={22}/></span>
						</div>
					</div>
				</div>
			</div>
		</>
  );
}

export default App;
