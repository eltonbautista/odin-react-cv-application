import React, { Component } from 'react';

class Header extends Component {
	constructor({ title }) {
		super();

		this.title = title;
	}

	render() {
		const title = this.title;

		return <header className='header'>{title}</header>;
	}
}

export default Header;
