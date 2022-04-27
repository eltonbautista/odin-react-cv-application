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

		[...this.personalInformationInputs] = document.querySelectorAll(
			'.personal-information-input'
		);

		this.personalInformationValues = [];
	}
	// personalInformation's updated value should be equal to the input values of each input in personalInformationForm.
	// Then it would be an array of all those input's values.
	// personalInformationInputs = document.querySelectorAll(

	fillValues(...pass) {
		let arr = pass;
		console.log(arr);
		let foo = arr.map((x) => x);
		console.log(foo);
	}

	updateState = (e) => {
		this.setState({ personalInformation: ['hello'] });
	};

	render() {
		// eslint-disable-next-line prettier/prettier
		const arrayOfGroupedInputs = [];

		const getInputs = function (...inputGroup) {
			for (let input of inputGroup) {
				arrayOfGroupedInputs.push([
					document.querySelectorAll(`.${input}-input`),
				]);
			}
		};
		getInputs(
			'personal-information',
			'work-experience',
			'education',
			'certification',
			'tech-stack',
			'skills',
			'passions'
		);

		const [
			personalInformationInputs,
			workExperienceInputs,
			educationInputs,
			certificationInputs,
			techStackInputs,
			skillsInputs,
			passionsInputs,
		] = arrayOfGroupedInputs;

		return (
			<div id='app'>
				<Header title='CV Project App' />
				<Form updateState={this.updateState} />
				<ResumePreview informationState={this.state} />
			</div>
		);
	}
}
export default App;
