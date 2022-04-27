import React, { Component } from 'react';

class ResumePreviewRows extends Component {
	constructor(props) {
		super();

		this.props = props;
	}

	render() {
		const { information } = this.props;

		const listOfInformation = information.map((info) => {
			const properId = info.toLowerCase().replaceAll(' ', '-') + '-preview';

			return (
				<li key={properId}>
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
