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
			workExperienceInformation: [''],
			educationInformation: [''],
			certificationInformation: [''],
			techStackInformation: [''],
			skillsInformation: [''],
			passionsInformation: [''],

			personalInformationInputs: [
				'Name',
				'Title',
				'Address',
				'Email',
				'Phone number',
				'Description',
			],
			workExperienceInformationInputs: [
				'Position',
				'Company',
				'City',
				'From',
				'To',
			],
			educationInformationInputs: [
				'University name',
				'City',
				'Degree',
				'From',
				'To',
			],
			certificationInformationInputs: ['Certification Example'],
			techStackInformationInputs: ['CSS', 'HTML'],
			skillsInformationInputs: ['Customer service'],
			passionsInformationInputs: ['Snowboarding', 'Bouldering'],
		};

		this.personalInformationValues =
			document.querySelector('#first-name-input');
	}

	updateResume = (e) => {
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

	// Could resolve the issue of the follow function always adding onto workExperienceInformationInputs by creating separate "addExtraInformation" functions
	// and passing it down to the appropriate submit buttons. Or maybe there is a way to make "addExtraInformation" reusable by changing its parameters
	addExtraInformation = (e) => {
		e.preventDefault();
		const submitButtons = document.querySelectorAll("button[type='submit']");
		// console.log(this.state.personalInformationInputs);

		const pushInformation = function (informationInput) {
			informationInput.forEach((input) => {
				informationInput.push(input);
			});
			return informationInput;
		};
		this.setState({
			workExperienceInformationInputs: pushInformation(
				this.state.workExperienceInformationInputs
			),
		});
	};

	render() {
		// eslint-disable-next-line prettier/prettier

		return (
			<div id='app'>
				<Header title='CV Project App' />
				<Form
					updateResume={this.updateResume}
					addExtraInformation={this.addExtraInformation}
					informationState={this.state}
				/>
				<ResumePreview informationState={this.state} />
			</div>
		);
	}
}
export default App;
