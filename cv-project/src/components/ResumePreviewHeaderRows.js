import React, { Component } from 'react';
import ResumePreviewRows from './ResumePreviewRows';

class ResumePreviewHeaderRows extends Component {
	constructor(props) {
		super();

		this.props = props;
	}
	render() {
		const { title, information, personalImage } = this.props;

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
