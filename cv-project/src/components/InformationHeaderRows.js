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
			handleRemoveButton,
		} = this.props;
		// console.log(this.props);

		const properId =
			title.toLowerCase().replaceAll(' ', '-') + '-information-header';
		// console.log(updateState);
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
					handleRemoveButton={handleRemoveButton}
					classGrouping={title}
				/>
			</div>
		);
	}
}

export default InformationHeaderRows;
