import React, { Component } from 'react';
import InformationRows from './InformationRows';

class InformationHeaderRows extends Component {
	constructor(title, info) {
		super();

		this.title = title;
		this.info = info;
		// this.informationRows = informationRows;
	}

	render() {
		const { title } = this.title;
		const { info } = this.info;
		console.log(info);
		console.log(title);

		// const { informationRows } = this.informationRows;
		return (
			<div className={title}>
				<p>{title}</p>
				<InformationRows information={['Name', 'Email', 'Phone Number']} />
			</div>
		);
	}
}

export default InformationHeaderRows;
