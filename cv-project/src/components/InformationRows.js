import React, { Component } from 'react';
import uniqid from 'uniqid';

// The descriptors variable is going to be an array that is going to be mapped to create
// A <li></li> element with <label>{attrOne (Name:)}</label> <input></input> inside.
// IT WILL MAKE THIS THROUGH ITS OWN COMPONENT! A COMPONENT: <ul attrOne attrTwo etc.></ul> which creates x amount of li inside it.
// -> I guess it could be some component which takes the attributes and renders them.

class InformationRows extends Component {
	constructor({ information, imgFiler }) {
		super();

		this.information = information;
		this.id = uniqid;
		this.imgFile = imgFiler;
	}

	render() {
		const information = this.information;
		// const toRender = this.torender;
		const imgFiler = this.imgFiler;
		const { uniqid } = this.id;
		// console.log(information);

		// let keyer = 0;
		const listOfInformation = information.map((info) => {
			const properId = info.toLowerCase().replaceAll(' ', '-') + '-input';
			if (info === 'imgFiler') {
				return (
					<li key={properId}>
						<label>Upload image </label>
						<input type='file'></input>
					</li>
				);
			}
			return (
				<li key={properId}>
					<input type='text' placeholder={info} id={properId}></input>
					{imgFiler}
				</li>
			);
		});

		return (
			<form>
				<ul>{listOfInformation}</ul>
				<button type='submit'>Add</button>
			</form>
		);
	}
}

export default InformationRows;
