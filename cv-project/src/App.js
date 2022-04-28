import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import ResumePreview from './components/ResumePreview';
import Header from './components/Header';

class App extends Component {
	constructor() {
		super();

		this.state = {
			personalInformation: ['', '', '', '', '', ''],
			workExperienceInformation: ['', '', '', '', ''],
			educationInformation: ['', '', '', '', ''],
			certificationInformation: [''],
			techStackInformation: ['', ''],
			skillsInformation: [''],
			passionsInformation: ['', ''],

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
		this.originalState = {
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
		// const submitButtons = document.querySelectorAll("button[type='submit']");
		// console.log(this.state.personalInformationInputs);

		const pushInformation = function (
			stateInformationInput,
			originalStateInformationInput
		) {
			originalStateInformationInput.forEach((input) => {
				stateInformationInput.push(input);
			});
			console.log(stateInformationInput);
			return stateInformationInput;
		};
		const target = e.target;
		const name = target.name;
		if (name === 'workExperienceInformationInputs') {
			console.log(this.originalState.workExperienceInformationInputs);
			this.setState({
				workExperienceInformationInputs: pushInformation(
					this.state.workExperienceInformationInputs,
					this.originalState.workExperienceInformationInputs
				),
			});
		} else if (name === 'educationInformationInputs') {
			this.setState({
				educationInformationInputs: pushInformation(
					this.state.educationInformationInputs,
					this.originalState.educationInformationInputs
				),
			});
		} else if (name === 'certificationInformationInputs') {
			this.setState({
				certificationInformationInputs: pushInformation(
					this.state.certificationInformationInputs,
					this.originalState.certificationInformationInputs
				),
			});
		} else if (name === 'techStackInformationInputs') {
			this.setState({
				techStackInformationInputs: pushInformation(
					this.state.techStackInformationInputs,
					this.originalState.techStackInformationInputs
				),
			});
		} else if (name === 'skillsInformationInputs') {
			this.setState({
				skillsInformationInputs: pushInformation(
					this.state.skillsInformationInputs,
					this.originalState.skillsInformationInputs
				),
			});
		} else if (name === 'passionsInformationInputs') {
			this.setState({
				passionsInformationInputs: pushInformation(
					this.state.passionsInformationInputs,
					this.originalState.passionsInformationInputs
				),
			});
		}
		// this.setState({
		// 	[name]: pushInformation(this.state.name),
		// });
		console.log(this.state);
	};

	handleRemoveButton = (e) => {
		const removeInformation = function (informationInput, removeLength) {
			console.log(informationInput);
			informationInput.splice(informationInput.length, removeLength);
			console.log(informationInput);
		};
		const target = e.target;
		const name = target.name;

		if (name === 'workExperienceInformationInputs') {
			this.setState({
				workExperienceInformationInputs: removeInformation(
					this.state.workExperienceInformationInputs,
					this.state.workExperienceInformation
				),
			});
		} else if (name === 'educationInformationInputs') {
			this.setState({
				educationInformationInputs: removeInformation(
					this.state.educationInformationInputs,
					this.state.educationInformation
				),
			});
		} else if (name === 'certificationInformationInputs') {
			this.setState({
				certificationInformationInputs: removeInformation(
					this.state.certificationInformationInputs,
					this.state.certificationInformation
				),
			});
		} else if (name === 'techStackInformationInputs') {
			this.setState({
				techStackInformationInputs: removeInformation(
					this.state.techStackInformationInputs,
					this.state.techStackInformation
				),
			});
		} else if (name === 'skillsInformationInputs') {
			this.setState({
				skillsInformationInputs: removeInformation(
					this.state.skillsInformationInputs,
					this.state.skillsInformation
				),
			});
		} else if (name === 'passionsInformationInputs') {
			this.setState({
				passionsInformationInputs: removeInformation(
					this.state.passionsInformationInputs,
					this.state.passionsInformation
				),
			});
		}
	};

	render() {
		// eslint-disable-next-line prettier/prettier

		return (
			<div id='app'>
				<Header title='CV Project App' />
				<Form
					updateResume={this.updateResume}
					addExtraInformation={this.addExtraInformation}
					handleRemoveButton={this.handleRemoveButton}
					informationState={this.state}
				/>
				<ResumePreview informationState={this.state} />
			</div>
		);
	}
}
export default App;
