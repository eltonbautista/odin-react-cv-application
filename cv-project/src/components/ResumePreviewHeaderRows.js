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
				{title === 'Personal Information' ? null : <p>{title}</p>}
				{/* <p>{title}</p> */}
				{/* <>{personalImage}</> */}
				<ResumePreviewRows
					information={information}
					title={title}
					personalImage={personalImage}
				/>
			</div>
		);
	}
}

export default ResumePreviewHeaderRows;
