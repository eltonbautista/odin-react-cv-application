import React, { Component } from 'react';
import ResumePreviewHeaderRows from './ResumePreviewHeaderRows';

class ResumePreview extends Component {
	constructor({ informationState }) {
		super();

		this.information = informationState;
	}

	render() {
		const profileImage = (
			<div className='personal-image'>
				{' '}
				<img alt='profile'></img>{' '}
			</div>
		);

		const informationTree = this.information;

		return (
			<div id='resume-preview'>
				<ResumePreviewHeaderRows
					title='Personal Information'
					information={informationTree.personalInformation}
					personalImage={profileImage}
				/>
				<ResumePreviewHeaderRows
					title='Work Experience'
					information={['Position', 'Company', 'City']}
				/>
				<ResumePreviewHeaderRows
					title='Education'
					information={['University name', 'City', 'Degree']}
				/>
				<ResumePreviewHeaderRows
					title='Certification'
					information={['Certification Example']}
				/>
				<ResumePreviewHeaderRows
					title='Tech Stack'
					information={['CSS', 'HTML']}
				/>
				<ResumePreviewHeaderRows
					title='Skills'
					information={['Customer service']}
				/>
				<ResumePreviewHeaderRows
					title='Passions'
					information={['Snowboarding', 'Bouldering']}
				/>
			</div>
		);
	}
}

export default ResumePreview;
