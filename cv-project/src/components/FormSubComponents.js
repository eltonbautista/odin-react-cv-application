import React, { Component } from 'react';

class FormSubComponents extends Component {
	constructor(title, ...descriptors) {
		super();

		this.title = title;
		this.descriptors = descriptors;
	}

	render() {
		const { title } = this.title;
		const { descriptors } = this.descriptors; // The descriptors variable is going to be an array that is going to be mapped to create
		// A <li></li> element with <label>{attrOne (Name:)}</label> <input></input> inside.

		return (
			<div className={title}>
				<p>{title}</p>
				{/* EXAMPLE */}
				{/* <label>{attrOne (Name:)}</label> <input></input>  */}
			</div>
		);
	}
}

export default FormSubComponents;
