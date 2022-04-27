import React, { Component } from 'react';
import uniqid from 'uniqid';

// The descriptors variable is going to be an array that is going to be mapped to create
// A <li></li> element with <label>{attrOne (Name:)}</label> <input></input> inside.
// IT WILL MAKE THIS THROUGH ITS OWN COMPONENT! A COMPONENT: <ul attrOne attrTwo etc.></ul> which creates x amount of li inside it.
// -> I guess it could be some component which takes the attributes and renders them.

class InformationRows extends Component {
	constructor(props) {
		super();

		this.uniqid = uniqid;
		this.props = props;
	}

	render() {
		const {
			information,
			updateResume,
			imgFiler,
			addBtn,
			removeBtn,
			addExtraInformation,
			classGrouping,
		} = this.props;
		let counter = 0;
		const listOfInformation = information.map((info) => {
			let properId = info.toLowerCase().replaceAll(' ', '-') + '-input';
			const groupClassName =
				classGrouping.toLowerCase().replaceAll(' ', '-') + '-input';

			if (info === 'imgFiler') {
				return (
					<li key={properId}>
						<label>Upload image </label>
						<input type='file'></input>
					</li>
				);
			}
			counter += 1;
			return (
				<li key={properId + counter}>
					<input
						type='text'
						placeholder={info}
						id={properId}
						onChange={updateResume}
						className={groupClassName}
					></input>
					{imgFiler}
				</li>
			);
		});

		return (
			<form onSubmit={addExtraInformation} className='form'>
				<ul className='ul-for-inputs'>{listOfInformation}</ul>
				{/* <button type='submit'>Add</button> */}
				<>{addBtn}</>
				<>{removeBtn}</>
			</form>
		);
	}
}

export default InformationRows;
