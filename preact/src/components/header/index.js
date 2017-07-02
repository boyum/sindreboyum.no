import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	state = {
		navIsOpen: false
	};

	render(props, state) {
		return (
			<header class={style.header}>
				<h1>Sindre Bøyum</h1>
				<button class={style.nav_toggle} onClick={this.toggleNav}>
					<span class="visuallyhidden">{!state.navIsOpen ? 'Open' : 'Close'} menu</span>
				</button>
				<nav class={state.navIsOpen ? style.nav_open : ''} inert={!state.navIsOpen}>
					<ul>
						<li><Link activeClassName={style.active} href="/" onClick={this.closeNav}>Home</Link></li>
						<li><Link activeClassName={style.active} href="/profile" onClick={this.closeNav}>Me</Link></li>
						<li><Link activeClassName={style.active} href="/portfolio" onClick={this.closeNav}>Portfolio</Link></li>
					</ul>				
				</nav>
			</header>
		);
	}

	toggleNav = () => {
		const isOpen = this.state.navIsOpen;
		this.setState({ navIsOpen: !isOpen});
	}

	closeNav = () => {
		this.setState({navIsOpen: false });
	}
}
