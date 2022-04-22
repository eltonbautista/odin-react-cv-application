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
		// IT WILL MAKE THIS THROUGH ITS OWN COMPONENT! A COMPONENT: <ul attrOne attrTwo etc.></ul> which creates x amount of li inside it.
		// -> I guess it could be some component which takes the attributes and renders them.
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
