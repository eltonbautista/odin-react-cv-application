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
	render() {
		const addButton = function addButton() {
			return <button type='submit'>Add</button>;
		};
		const removeButton = function removeButton() {
			return <button type='button'>Remove</button>;
		};

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
				/>
				<InformationHeaderRows
					title='Experience'
					info={['Posiion', 'Company', 'City', 'From', 'To']}
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
