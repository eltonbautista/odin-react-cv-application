import React, { Component } from 'react';
import ResumePreviewHeaderRows from './ResumePreviewHeaderRows';

class ResumePreview extends Component {
	constructor({}) {
		super();
	}

	render() {
		const profileImage = (
			<div className='personal-image'>
				{' '}
				<img alt='profile'></img>{' '}
			</div>
		);
		return (
			<div id='resume-preview'>
				<ResumePreviewHeaderRows
					information={['Name', 'Email', 'Phone number']}
					personalImage={profileImage}
				/>
			</div>
		);
	}
}

export default ResumePreview;
