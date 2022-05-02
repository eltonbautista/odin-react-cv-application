// This component will be used as a container for my form(s)
import React, { Component } from 'react';
// import App from '../App';
import InformationHeaderRows from './InformationHeaderRows';

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
			addExtraDetails,
			changeId,
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
					key={'qwkjeh'}
					title='Personal Information'
					info={informationState.personalInformationInputs}
					updateResume={updateResume}
					value={informationState.personalInformation}
				/>,
			];
			for (let i = 0; i < 6; i++) {
				headerRows.push(
					<InformationHeaderRows
						key={titles[i]}
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
						stateKeysInfo={stateKeysInformation}
						stateKeysInfoInputs={stateKeysInformationInputs}
						addExtraDetails={addExtraDetails}
						state={informationState.specialId}
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
			</div>
		);
	}
}

export default Form;
