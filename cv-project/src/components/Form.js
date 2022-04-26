// This component will be used as a container for my form(s)
import React, { Component } from 'react';
// import App from '../App';
import InformationHeaderRows from './InformationHeaderRows';
// Okay so we have these FormSubComponents, then each one of them will have specific attributes.
// Each attribute will create a new <li>{attribute}</li> inside of them (through the FormSubComponent.js)
// Example: <FormSubComponents title='Personal Information' attrOne='Name' attrTwo='Email' attrThree='Phone number' />
// This will then become an HTML that looks like this:
/* <p>Personal Information</p>
	<ul>
		<li>
			<label>{attrOne (Name:)}</label> <input></input>
		</li>
		<li>
			<label>{attrTwo (Email:)}</label> <input></input>
		</li>
	</ul>
*/
// Right, so by adding attributes it will increase the amount of items in the descriptors array.

class Form extends Component {
	constructor({ changeFunc }) {
		super();

		this.changeFunc = changeFunc;
	}
	render() {
		const addButton = function addButton() {
			return <button type='submit'>Add</button>;
		};
		const removeButton = function removeButton() {
			return <button type='button'>Remove</button>;
		};

		const changeFunc = this.changeFunc;
		// Each of these indices is in charge of the inputs inside their corresponding component.
		// We'll use this to monitor state of each input's value.
		// Hmm can a component only have one state? Need to read more docs about state and understand it better before proceeding.

		return (
			<div id='form-container'>
				<InformationHeaderRows
					title='Personal Information'
					info={[
						'First Name',
						'Last Name',
						'Title',
						'Address',
						'Email',
						'Phone number',
						'Description',
						'imgFiler',
					]}
					changeFunc={changeFunc}
				/>
				<InformationHeaderRows
					title='Work Experience'
					info={['Position', 'Company', 'City', 'From', 'To']}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>
				<InformationHeaderRows
					title='Education'
					info={['University name', 'City', 'Degree', 'From', 'To']}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>

				<InformationHeaderRows
					title='Certification'
					info={['Certifications']}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>

				<InformationHeaderRows
					title='Tech Stack'
					info={['Technologies']}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>
				<InformationHeaderRows
					title='Skills'
					info={['Skills']}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>
				<InformationHeaderRows
					title='Passions'
					info={['Passions']}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>
			</div>
		);
	}
}

export default Form;
