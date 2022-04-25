import React, { Component } from 'react';
import InformationRows from './InformationRows';

class InformationHeaderRows extends Component {
	constructor({ title, info, imgFiler }) {
		super();

		this.title = title;
		this.info = info;
	}

	render() {
		const title = this.title;
		const info = this.info;
		const rend = this.rend;
		const imgFiler = this.imgFiler;

		return (
			<div className={title}>
				<p>{title}</p>
				<InformationRows information={info} imgFiler={imgFiler} />
			</div>
		);
	}
}

export default InformationHeaderRows;
