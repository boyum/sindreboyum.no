import { h, Component } from 'preact';
import style from './style';
import PromotedProjects from '../../components/promoted-projects';
import FaGithub from 'react-icons/fa/github';
import FaTwitter from 'react-icons/fa/twitter';
import FaCodepen from 'react-icons/fa/codepen';

export default class Home extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class={style.home}>
				<h1 class={style.heading}>Hi! I'm Sindre</h1>

				<div class={style.description}>
					I like JS and web tinkering!
				</div>

				<ul class={style.links}>
					<li title="Github">
						<FaGithub />
						<a href="https://github.com/boyum">@boyum<span class="visuallyhidden"> on GitHub</span></a>
					</li>
					<li title="Twitter">
						<FaTwitter />
						<a href="https://twitter.com/sindreboyum">@sindreboyum<span class="visuallyhidden"> on Twitter</span></a>
					</li>
					<li title="Codepen">
						<FaCodepen />
						<a href="https://codepen.io/sindre">@sindre<span class="visuallyhidden"> on Codepen</span></a>
					</li>
				</ul>

				{/*<div class={style.promoted_projects}>
					<h2>Projects</h2>
					<PromotedProjects />
				</div>*/}
			</div>
		);
	}
}


