// This component will be used as a container for my form(s)
import React, { Component } from 'react';
// import App from '../App';
import InformationHeaderRows from './InformationHeaderRows';

class Form extends Component {
	constructor(props) {
		super();

		this.props = props;
	}
	render() {
		const { updateResume, addExtraInformation, informationState } = this.props;

		const addButton = function addButton() {
			return <button type='submit'>Add</button>;
		};
		const removeButton = function removeButton() {
			return <button type='button'>Remove</button>;
		};
		return (
			<div id='form-container'>
				<InformationHeaderRows
					title='Personal Information'
					info={informationState.personalInformationInputs}
					updateResume={updateResume}
				/>
				<InformationHeaderRows
					title='Work Experience'
					info={informationState.workExperienceInformationInputs}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton()}
				/>
				<InformationHeaderRows
					title='Education'
					info={informationState.educationInformationInputs}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton()}
				/>

				<InformationHeaderRows
					title='Certification'
					info={informationState.certificationInformationInputs}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton()}
				/>

				<InformationHeaderRows
					title='Tech Stack'
					info={informationState.techStackInformationInputs}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton()}
				/>
				<InformationHeaderRows
					title='Skills'
					info={informationState.skillsInformationInputs}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton()}
				/>
				<InformationHeaderRows
					title='Passions'
					info={informationState.passionsInformationInputs}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton()}
				/>
			</div>
		);
	}
}

export default Form;
