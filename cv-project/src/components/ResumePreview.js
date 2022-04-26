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

		// information needs to render the values inside an input. This means that it would be consistently mapping over the appropriate array.
		// For example, we would be consistently mapping over personalInformationInputs' values

		// const informationTree = {
		// 	personalInformation: [
		// 		'Name',
		// 		'Title',
		// 		'Address',
		// 		'Email',
		// 		'Phone number',
		// 		'Description',
		// 	],
		// 	workExperienceInformation: ['Position', 'Company', 'City'],
		// 	educationInformation: ['University name', 'City', 'Degree'],
		// 	certificationInformation: ['Certification Example'],
		// 	techStackInformation: ['CSS', 'HTML'],
		// 	skillsInformation: ['Customer service'],
		// 	passionsInformation: ['Snowboarding', 'Bouldering'],
		// };

		// First pass down informationTree from constructor.
		// Then the appropriate keys will be used in each <ResumePreviewHeaderRows> information attribute.
		// I think the passed down variable should be a function that returns informationTree.

		const informationTree = this.information;
		// console.log(this.information.personalInformation);
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
