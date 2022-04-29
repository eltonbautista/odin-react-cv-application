// This component will be used as a container for my form(s)
import React, { Component } from 'react';
// import App from '../App';
import InformationHeaderRows from './InformationHeaderRows';
import uniqid from 'uniqid';

class Form extends Component {
	constructor(props) {
		super(props);

		this.props = props;
	}
	render() {
		const {
			updateResume,
			addExtraInformation,
			informationState,
			handleRemoveButton,
		} = this.props;

		const addButton = function addButton() {
			return <button type='submit'>Add</button>;
		};
		const removeButton = function removeButton(
			name,
			stateInfo,
			stateInfoInput
		) {
			return (
				<button
					onClick={handleRemoveButton}
					name={name}
					information={stateInfo}
					informationinputs={stateInfoInput}
					type='button'
				>
					Remove
				</button>
			);
		};

		const stateKeysInformation = Object.keys(
			this.props.informationState
		).splice(1, 6);
		const stateKeysInformationInputs = Object.keys(
			this.props.informationState
		).splice(8);
		// console.log(stateKeysInformation);
		// console.log(stateKeysInformationInputs);

		const informationHeaderRows = function () {
			const titles = [
				'Work Experience',
				'Education',
				'Certification',
				'Tech Stack',
				'Skills',
				'Passions',
			];
			const headerRows = [
				<InformationHeaderRows
					key={uniqid()}
					title='Personal Information'
					info={informationState.personalInformationInputs}
					updateResume={updateResume}
					value={informationState.personalInformation}
				/>,
			];
			for (let i = 0; i < 6; i++) {
				let uniqueKey = uniqid();
				headerRows.push(
					<InformationHeaderRows
						key={uniqueKey}
						title={titles[i]}
						info={informationState[stateKeysInformationInputs[i]]}
						value={informationState[stateKeysInformation[i]]}
						updateResume={updateResume}
						addBtn={addButton()}
						addExtraInformation={addExtraInformation}
						removeBtn={removeButton(
							stateKeysInformation[i] + 'RemoveButton',
							stateKeysInformation[i],
							stateKeysInformationInputs[i]
						)}
						handleRemoveButton={handleRemoveButton}
					/>
				);
			}
			return headerRows;
		};

		const [...myHeaderRows] = informationHeaderRows();
		return (
			<div id='form-container'>
				{myHeaderRows.map((header) => {
					return header;
				})}
				{/* <InformationHeaderRows
					title='Personal Information'
					info={informationState.personalInformationInputs}
					updateResume={updateResume}
					value={informationState.personalInformation}
				/>
				<InformationHeaderRows
					title='Work Experience'
					info={informationState.workExperienceInformationInputs}
					value={informationState.workExperienceInformation}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton('workExperienceInformationRemoveButton')}
					handleRemoveButton={handleRemoveButton}
				/>
				<InformationHeaderRows
					title='Education'
					info={informationState.educationInformationInputs}
					value={informationState.educationInformation}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton('educationInformationRemoveButton')}
				/>

				<InformationHeaderRows
					title='Certification'
					info={informationState.certificationInformationInputs}
					value={informationState.certificationInformation}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton('certificationInformationRemoveButton')}
				/>

				<InformationHeaderRows
					title='Tech Stack'
					info={informationState.techStackInformationInputs}
					value={informationState.techStackInformation}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton('techStackInformationRemoveButton')}
				/>
				<InformationHeaderRows
					title='Skills'
					info={informationState.skillsInformationInputs}
					value={informationState.skillsInformation}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton('skillsInformationRemoveButton')}
				/>
				<InformationHeaderRows
					title='Passions'
					info={informationState.passionsInformationInputs}
					value={informationState.passionsInformation}
					updateResume={updateResume}
					addBtn={addButton()}
					addExtraInformation={addExtraInformation}
					removeBtn={removeButton('passionsInformationRemoveButton')}
				/> */}
			</div>
		);
	}
}

export default Form;
