import React, { Component } from 'react';
import InformationRows from './InformationRows';

class InformationHeaderRows extends Component {
	constructor({ title, info }) {
		super();

		this.title = title;
		this.info = info;
	}

	render() {
		const title = this.title;
		const info = this.info;

		return (
			<div className={title}>
				<p>{title}</p>
				<InformationRows information={info} />
			</div>
		);
	}
}

export default InformationHeaderRows;
