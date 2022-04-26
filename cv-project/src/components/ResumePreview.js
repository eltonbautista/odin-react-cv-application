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

		const formsArray = document.querySelectorAll('.form');
		const [
			personalInformationInputs,
			workExperienceInputs,
			educationInputs,
			certificationInputs,
			techStackInputs,
			skillsInputs,
			passionsInputs,
		] = formsArray;

		// information needs to render the values inside an input. This means that it would be consistently mapping over the appropriate array.
		// For example, we would be consistently mapping over personalInformationInputs' values
		return (
			<div id='resume-preview'>
				<ResumePreviewHeaderRows
					title='Personal Information'
					information={[
						'Name',
						'Title',
						'Address',
						'Email',
						'Phone number',
						'Description',
					]}
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
