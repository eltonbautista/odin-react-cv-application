import React, { Component } from 'react';
import ResumePreviewRows from './ResumePreviewRows';

class ResumePreviewHeaderRows extends Component {
	constructor(props) {
		super();

		this.props = props;
	}
	// !! For adding extra information, need to figure out a way to dynamically create more ResumePreviewRows
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
