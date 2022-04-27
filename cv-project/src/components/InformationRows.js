import React, { Component } from 'react';
import uniqid from 'uniqid';

// The descriptors variable is going to be an array that is going to be mapped to create
// A <li></li> element with <label>{attrOne (Name:)}</label> <input></input> inside.
// IT WILL MAKE THIS THROUGH ITS OWN COMPONENT! A COMPONENT: <ul attrOne attrTwo etc.></ul> which creates x amount of li inside it.
// -> I guess it could be some component which takes the attributes and renders them.

class InformationRows extends Component {
	constructor(props) {
		super();

		this.id = uniqid;
		this.props = props;
	}

	render() {
		const { information, imgFiler, addBtn, removeBtn, change, classGrouping } =
			this.props;

		const listOfInformation = information.map((info) => {
			const properId = info.toLowerCase().replaceAll(' ', '-') + '-input';
			const groupClassName = info.toLowerCase().replaceAll(' ', '-') + 'class';

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
					<input
						type='text'
						placeholder={info}
						id={properId}
						onChange={change}
						className={groupClassName}
					></input>
					{imgFiler}
				</li>
			);
		});

		return (
			<form className='form'>
				<ul className='ul-for-inputs'>{listOfInformation}</ul>
				{/* <button type='submit'>Add</button> */}
				<>{addBtn}</>
				<>{removeBtn}</>
			</form>
		);
	}
}

export default InformationRows;
