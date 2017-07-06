import { h, Component } from 'preact';
import style from './style';
import PromotedProjects from '../../components/promoted-projects';
import FaGithub from 'react-icons/fa/github';
import FaTwitter from 'react-icons/fa/twitter';
import FaCodepen from 'react-icons/fa/codepen';
import AsyncImage from '../../components/async-image';

export default class Home extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class={style.home}>
				<AsyncImage class={style.image} large="/assets/sindre_300.jpg" placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAUEBAQEAwUEBAQGBQUGCA0ICAcHCBALDAkNExAUExIQEhIUFx0ZFBYcFhISGiMaHB4fISEhFBkkJyQgJh0gISD/wAALCAAQABABAREA/8QAFgABAQEAAAAAAAAAAAAAAAAABQcI/8QAJxAAAgEDAgUEAwAAAAAAAAAAAQIEAwURBiEABxIxUQgTIjJBQoH/2gAIAQEAAD8A0JqN7nF03LrWdqSTvitJ6yl0p5YAuVH2wCTj88G6SN6kWVhfLlTuUhHGJNOMY/UCM4K9tttx58jiV8xPURbrHqivpO22ORcItCoaFwmq/Sy9wRRHYspxuSBsQPPC/K7m5pzUF8bR8CLPR3R5EeXKUL7+ACyFf1IGSMZBwf7/AP/Z" />
				<h1 class={style.heading}>I'm Sindre!</h1>

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


