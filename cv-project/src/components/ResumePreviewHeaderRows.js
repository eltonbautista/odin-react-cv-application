import React, { Component } from 'react';
import ResumePreviewRows from './ResumePreviewRows';

class ResumePreviewHeaderRows extends Component {
	constructor({ title, information, personalImage }) {
		super();

		this.title = title;
		this.information = information;
		this.personalImage = personalImage;
	}

	render() {
		const title = this.title;
		const information = this.information;
		const personalImage = this.personalImage;

		return (
			<div>
				<p>{title}</p>
				<>{personalImage}</>
				<ResumePreviewRows information={information} />
			</div>
		);
	}
}

export default ResumePreviewHeaderRows;
