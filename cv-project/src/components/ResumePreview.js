import React, { Component } from 'react';
import ResumePreviewHeaderRows from './ResumePreviewHeaderRows';

class ResumePreview extends Component {
	constructor(props) {
		super();

		this.props = props;
	}

	render() {
		const { informationState } = this.props;
		// console.log(informationState.personalInformation);
		const profileImage = (
			<div className='personal-image'>
				{' '}
				<img alt='profile'></img>{' '}
			</div>
		);

		// console.log(informationTree);
		return (
			<div id='resume-preview'>
				<ResumePreviewHeaderRows
					title='Personal Information'
					information={informationState.personalInformation}
					personalImage={profileImage}
				/>
				<ResumePreviewHeaderRows
					title='Work Experience'
					information={informationState.workExperienceInformation}
				/>
				<ResumePreviewHeaderRows
					title='Education'
					information={informationState.educationInformation}
				/>
				<ResumePreviewHeaderRows
					title='Certification'
					information={informationState.certificationInformation}
				/>
				<ResumePreviewHeaderRows
					title='Tech Stack'
					information={informationState.techStackInformation}
				/>
				<ResumePreviewHeaderRows
					title='Skills'
					information={informationState.skillsInformation}
				/>
				<ResumePreviewHeaderRows
					title='Passions'
					information={informationState.passionsInformation}
				/>
			</div>
		);
	}
}

export default ResumePreview;
