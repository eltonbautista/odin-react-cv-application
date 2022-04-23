import React, { Component } from 'react';
import uniqid from 'uniqid';

// The descriptors variable is going to be an array that is going to be mapped to create
// A <li></li> element with <label>{attrOne (Name:)}</label> <input></input> inside.
// IT WILL MAKE THIS THROUGH ITS OWN COMPONENT! A COMPONENT: <ul attrOne attrTwo etc.></ul> which creates x amount of li inside it.
// -> I guess it could be some component which takes the attributes and renders them.

class InformationRows extends Component {
	constructor(information) {
		super();

		this.information = information;
		this.id = uniqid;
	}

	render() {
		const { information } = this.information;
		const { uniqid } = this.id;
		// console.log(information);

		let keyer = 0;
		const listOfInformation = information.map((info) => {
			keyer += 1;
			return (
				<li key={keyer}>
					<label>{info}:</label>
					<input type='text'></input>
				</li>
			);
		});
		return <ul>{listOfInformation}</ul>;
	}
}

export default InformationRows;
