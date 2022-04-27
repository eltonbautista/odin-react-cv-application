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
