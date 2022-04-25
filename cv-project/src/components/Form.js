// This component will be used as a container for my form(s)
import React, { Component } from 'react';
// import App from '../App';
import InformationHeaderRows from './InformationHeaderRows';
import InformationRows from './InformationRows';
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
		return (
			<div>
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
					rend={true}
				/>
				<InformationHeaderRows
					title='Education'
					info={['University name', 'City', 'Degree', 'From', 'To']}
				/>

				<InformationHeaderRows
					title='Certification'
					info={['Certifications']}
				/>

				<InformationHeaderRows title='Tech Stack' info={['Technologies']} />
				<InformationHeaderRows title='Skills' info={['Skills']} />
				<InformationHeaderRows title='Passions' info={['Passions']} />
			</div>
		);
	}
}

export default Form;
