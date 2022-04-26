import React, { Component } from 'react';
import ResumePreviewRows from './ResumePreviewRows';

class ResumePreviewHeaderRows extends Component {
	constructor({ title, information }) {
		super();

		this.title = title;
		this.information = information;
	}

	render() {
		const title = this.title;
		const information = this.information;

		return (
			<div>
				<p>{title}</p>
				<ResumePreviewRows information={information} />
			</div>
		);
	}
}

export default ResumePreviewHeaderRows;
