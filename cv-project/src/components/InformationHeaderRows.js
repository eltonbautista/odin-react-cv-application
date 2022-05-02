import React, { Component } from 'react';
import InformationRows from './InformationRows';

class InformationHeaderRows extends Component {
	constructor(props) {
		super();

		this.props = props;
	}

	render() {
		const {
			title,
			value,
			info,
			addBtn,
			removeBtn,
			updateResume,
			addExtraInformation,
			stateKeysInfo,
			stateKeysInfoInputs,
			addExtraDetails,
			state,
			changeId,
		} = this.props;

		const properId =
			title.toLowerCase().replaceAll(' ', '-') + '-information-header';
		return (
			<div id={properId}>
				<p>{title}</p>
				<InformationRows
					value={value}
					information={info}
					updateResume={updateResume}
					addBtn={addBtn}
					addExtraInformation={addExtraInformation}
					removeBtn={removeBtn}
					classGrouping={title}
					stateKeysInformation={stateKeysInfo}
					stateKeysInformationInputs={stateKeysInfoInputs}
					addExtraDetails={addExtraDetails}
					state={state}
				/>
			</div>
		);
	}
}

export default InformationHeaderRows;
