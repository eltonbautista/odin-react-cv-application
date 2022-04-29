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
		const stateKeysInformation = Object.keys(
			this.props.informationState
		).splice(1, 6);
		const resumePreviews = function () {
			const titles = [
				'Work Experience',
				'Education',
				' Certification',
				'Tech Stack',
				'Skills',
				'Passions',
			];
			const resumePreviewArray = [
				<ResumePreviewHeaderRows
					key={'Personal Information'}
					title='Personal Information'
					information={informationState.personalInformation}
					personalImage={profileImage}
				/>,
			];

			for (let i = 0; i < 6; i++) {
				resumePreviewArray.push(
					<ResumePreviewHeaderRows
						key={titles[i]}
						title={titles[i]}
						information={informationState[stateKeysInformation[i]]}
					/>
				);
			}
			return resumePreviewArray;
		};

		const myResumePreviews = resumePreviews().map((prev) => {
			return prev;
		});

		return (
			<div id='resume-preview'>
				{myResumePreviews}
				{/* <ResumePreviewHeaderRows
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
				/> */}
			</div>
		);
	}
}

export default ResumePreview;
