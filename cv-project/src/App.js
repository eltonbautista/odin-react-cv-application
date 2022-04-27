import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import ResumePreview from './components/ResumePreview';
import Header from './components/Header';

// function App() {
// 	return <div className='App'></div>;
// }

class App extends Component {
	constructor() {
		super();

		this.state = {
			personalInformation: [
				'Name',
				'Title',
				'Address',
				'Email',
				'Phone number',
				'Description',
			],
			workExperienceInformation: ['Position', 'Company', 'City'],
			educationInformation: ['University name', 'City', 'Degree'],
			certificationInformation: ['Certification Example'],
			techStackInformation: ['CSS', 'HTML'],
			skillsInformation: ['Customer service'],
			passionsInformation: ['Snowboarding', 'Bouldering'],
		};

		this.forms = document.querySelectorAll('.ul-for-inputs');
	}
	// personalInformation's updated value should be equal to the input values of each input in personalInformationForm.
	// Then it would be an array of all those input's values.

	updateState() {
		this.setState({ personalInformation: ['hello'] });
	}

	render() {
		// eslint-disable-next-line prettier/prettier
		const forms = this.forms;

		const [
			personalInformationForm,
			workExperienceForm,
			educationForm,
			certificationForm,
			techStackForm,
			skillsForm,
			passionsForm,
		] = forms;
		console.log(personalInformationForm);
		return (
			<div id='app'>
				<Header title='CV Project App' />
				<Form changeFunc={() => this.updateState()} />
				<ResumePreview informationState={this.state} />
			</div>
		);
	}
}
export default App;
