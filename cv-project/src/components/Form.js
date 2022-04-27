// This component will be used as a container for my form(s)
import React, { Component } from 'react';
// import App from '../App';
import InformationHeaderRows from './InformationHeaderRows';

class Form extends Component {
	constructor(props) {
		super();

		this.props = props;
	}
	render() {
		const { updateState } = this.props;

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
					updateState={updateState}
				/>
				<InformationHeaderRows
					title='Work Experience'
					info={['Position', 'Company', 'City', 'From', 'To']}
					updateState={updateState}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>
				<InformationHeaderRows
					title='Education'
					info={['University name', 'City', 'Degree', 'From', 'To']}
					updateState={updateState}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>

				<InformationHeaderRows
					title='Certification'
					info={['Certifications']}
					updateState={updateState}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>

				<InformationHeaderRows
					title='Tech Stack'
					info={['Technologies']}
					updateState={updateState}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>
				<InformationHeaderRows
					title='Skills'
					info={['Skills']}
					updateState={updateState}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>
				<InformationHeaderRows
					title='Passions'
					info={['Passions']}
					updateState={updateState}
					addBtn={addButton()}
					removeBtn={removeButton()}
				/>
			</div>
		);
	}
}

export default Form;
