import React, { Component } from 'react';
import uniqid from 'uniqid';

class ResumePreviewRows extends Component {
	constructor(props) {
		super();

		this.props = props;
		this.uniqid = uniqid;
	}

	render() {
		const { information, title, personalImage } = this.props;
		// console.log(title);

		const listOfInformation = information.map((info) => {
			let keyId = uniqid();
			return (
				<li key={(keyId += 1)}>
					<div>{info}</div>
				</li>
			);
		});

		return (
			<div>
				<ul className='resume-preview-list'>{listOfInformation}</ul>
				{title === 'Personal Information' ? personalImage : null}
			</div>
		);
	}
}
export default ResumePreviewRows;
