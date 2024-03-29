import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

	renderSigninLink() {
		if(this.props.authenticated) {
			return (
				<li className="nav-item">
					<Link to="/signout" className="nav-link">Sign Out</Link>
				</li>
			);
		}

		return [
				<li className="nav-item" key="signin">
					<Link to="/signin" className="nav-link">Sign In</Link>
				</li>,
				<li className="nav-item" key="signup">
					<Link to="/signup" className="nav-link">Sign Up</Link>
				</li>
		];
	}

	render() {
		return (
			<nav className="navbar navbar-light">
				<Link className="navbar-brand" to="/">Redux Auth</Link>
				<ul className="nav navbar-nav">
					{ this.renderSigninLink() }
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated }
}


export default connect(mapStateToProps, null)(Header);
