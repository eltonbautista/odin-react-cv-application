import React, { Component } from 'react';
import InformationRows from './InformationRows';

class InformationHeaderRows extends Component {
	constructor(props) {
		super();

		this.props = props;
	}

	render() {
		const { title, info, addBtn, removeBtn, updateResume } = this.props;
		// console.log(this.props);

		const properId =
			title.toLowerCase().replaceAll(' ', '-') + '-information-header';
		// console.log(updateState);
		return (
			<div id={properId}>
				<p>{title}</p>
				<InformationRows
					information={info}
					addBtn={addBtn}
					removeBtn={removeBtn}
					updateResume={updateResume}
					classGrouping={title}
				/>
			</div>
		);
	}
}

export default InformationHeaderRows;
