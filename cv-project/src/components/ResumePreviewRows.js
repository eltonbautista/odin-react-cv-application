import React, { Component } from 'react';
import uniqid from 'uniqid';

class ResumePreviewRows extends Component {
	constructor(props) {
		super();

		this.props = props;
		this.uniqid = uniqid;
	}

	render() {
		const { information } = this.props;
		let keyId = uniqid();
		const listOfInformation = information.map((info) => {
			// const properId = info.toLowerCase().replaceAll(' ', '-') + '-preview';

			return (
				<li key={(keyId += 1)}>
					<div>{info}</div>
				</li>
			);
		});

		return (
			<div>
				<ul className='resume-preview-list'>{listOfInformation}</ul>
			</div>
		);
	}
}
export default ResumePreviewRows;
