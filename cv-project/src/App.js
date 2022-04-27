import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import ResumePreview from './components/ResumePreview';
import Header from './components/Header';

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
			workExperienceInformation: ['Position', 'Company', 'City', 'From', 'To'],
			educationInformation: ['University name', 'City', 'Degree', 'From', 'To'],
			certificationInformation: ['Certification Example'],
			techStackInformation: ['CSS', 'HTML'],
			skillsInformation: ['Customer service'],
			passionsInformation: ['Snowboarding', 'Bouldering'],
		};

		this.personalInformationValues =
			document.querySelector('#first-name-input');
	}

	updateState = (e) => {
		const arrayOfGroupedInputs = [];

		const getInputs = function (...inputGroup) {
			const [...fixedInputs] = inputGroup;
			for (let input of fixedInputs) {
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

		// const [...personalInformationInput] = document.querySelectorAll(
		// 	'.personal-information-input'
		// );
		// console.log([...personalInformationInputs[0]].map((input) => input.value));

		const informationArrayFunction = function (arrayName) {
			return [...arrayName[0]].map((input) => input.value);
		};

		this.setState({
			personalInformation: informationArrayFunction(personalInformationInputs),
			workExperienceInformation: informationArrayFunction(workExperienceInputs),
			educationInformation: informationArrayFunction(educationInputs),
			certificationInformation: informationArrayFunction(certificationInputs),
			techStackInformation: informationArrayFunction(techStackInputs),
			skillsInformation: informationArrayFunction(skillsInputs),
			passionsInformation: informationArrayFunction(passionsInputs),
		});
	};

	render() {
		// eslint-disable-next-line prettier/prettier

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
