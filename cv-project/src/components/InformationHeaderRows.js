import React, { Component } from 'react';
import InformationRows from './InformationRows';

class InformationHeaderRows extends Component {
	constructor({ title, info, addBtn, removeBtn, changeFunc }) {
		super();

		this.title = title;
		this.info = info;
		this.addBtn = addBtn;
		this.removeBtn = removeBtn;
		this.changeFunc = changeFunc;
	}

	render() {
		const title = this.title;
		const info = this.info;
		const addBtn = this.addBtn;
		const removeBtn = this.removeBtn;
		const properId =
			title.toLowerCase().replaceAll(' ', '-') + '-information-header';
		const changeFunc = this.changeFunc;
		return (
			<div id={properId}>
				<p>{title}</p>
				<InformationRows
					information={info}
					addBtn={addBtn}
					removeBtn={removeBtn}
					change={changeFunc}
				/>
			</div>
		);
	}
}

export default InformationHeaderRows;
