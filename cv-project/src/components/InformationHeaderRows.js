import React, { Component } from 'react';
import InformationRows from './InformationRows';

class InformationHeaderRows extends Component {
	constructor({ title, info, addBtn, removeBtn }) {
		super();

		this.title = title;
		this.info = info;
		this.addBtn = addBtn;
		this.removeBtn = removeBtn;
	}

	render() {
		const title = this.title;
		const info = this.info;
		const addBtn = this.addBtn;
		const removeBtn = this.removeBtn;

		return (
			<div className={title}>
				<p>{title}</p>
				<InformationRows
					information={info}
					addBtn={addBtn}
					removeBtn={removeBtn}
				/>
			</div>
		);
	}
}

export default InformationHeaderRows;
