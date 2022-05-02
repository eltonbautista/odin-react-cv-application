import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import ResumePreview from './components/ResumePreview';
import Header from './components/Header';
import uniqid from 'uniqid';

/* NEED TO ADD BUTTON THAT WILL LET USER ADD MORE DESCRIPTION BOXES IN WORK EXPERIENCE AND EDUCATION INPUTS */

class App extends Component {
	constructor() {
		super();

		this.state = {
			personalInformation: ['', '', '', '', '', ''],
			workExperienceInformation: ['', '', '', '', ''],
			educationInformation: ['', '', '', '', ''],
			certificationInformation: [''],
			techStackInformation: [''],
			skillsInformation: [''],
			passionsInformation: [''],

			personalInformationInputs: [
				'Name',
				'Address',
				'Email',
				'Phone number',
				'Description',
				'imgFiler',
			],
			workExperienceInformationInputs: [
				'Position',
				'Company',
				'City',
				'From',
				'Description',
			],
			educationInformationInputs: [
				'University name',
				'City',
				'Degree',
				'From',
				'Description',
			],
			certificationInformationInputs: ['Certification (example)'],
			techStackInformationInputs: ['CSS (example)'],
			skillsInformationInputs: ['Customer service (example)'],
			passionsInformationInputs: ['Snowboarding (example)'],
			specialId: uniqid(),
		};
		this.originalState = {
			personalInformationInputs: [
				'Name',
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
				'Description',
			],
			educationInformationInputs: [
				'University name',
				'City',
				'Degree',
				'From',
				'Description',
			],
			certificationInformationInputs: ['Certification Example'],
			techStackInformationInputs: ['CSS'],
			skillsInformationInputs: ['Customer service'],
			passionsInformationInputs: ['Snowboarding'],
		};

		this.personalInformationValues =
			document.querySelector('#first-name-input');
	}
	addButtonPreviewHandler = function (arrayName, inputArr) {
		inputArr.forEach(() => {
			arrayName.push('');
		});
		return arrayName.map((input) => input);
	};
	removeButtonPreviewHandler = function (arrayName, inputArr) {
		if (arrayName.length === inputArr.length) {
			return arrayName;
		}
		inputArr.forEach(() => {
			arrayName.pop();
		});
		return arrayName.map((input) => input);
	};

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

	addExtraInformation = (e) => {
		e.preventDefault();

		const pushInformation = function (
			stateInformationInput,
			originalStateInformationInput
		) {
			originalStateInformationInput.forEach((input) => {
				stateInformationInput.push(input);
			});
			return stateInformationInput;
		};
		const target = e.target;
		const name = target.name;
		const informationRender = target.getAttribute('inforendering');
		console.log(informationRender);

		this.setState({
			[name]: pushInformation(this.state[name], this.originalState[name]),
			[informationRender]: this.addButtonPreviewHandler(
				this.state[informationRender],
				this.originalState[name]
			),
		});
	};

	handleRemoveButton = (e) => {
		const removeInformation = function (informationInput, removeArray) {
			if (informationInput.length === removeArray.length) {
				return informationInput;
			}
			const spliceAt = -(informationInput.length - removeArray.length);
			return informationInput.splice(spliceAt);
		};
		const target = e.target;
		const informationRender = target.getAttribute('information');
		const informationInputsRender = target.getAttribute('informationinputs');

		this.setState({
			[informationInputsRender]: removeInformation(
				this.state[informationInputsRender],
				this.originalState[informationInputsRender]
			),
			[informationRender]: this.removeButtonPreviewHandler(
				this.state[informationRender],
				this.originalState[informationInputsRender]
			),
		});
	};

	handleAddDetailsButton = (e) => {
		const target = e.target;
		const name = target.name;
		const informationRender = target.getAttribute('information');
		const informationInputsRender = target.getAttribute('informationinput');
		const addDetails = function addDetails(info, infoInputs) {
			info.push('Description');
			return info;
		};
		this.setState({
			specialId: uniqid(),
			[informationInputsRender]: addDetails(
				this.state[informationInputsRender]
			),
		});
	};

	handleRemoveDetailsButton = (e) => {
		const target = e.target;
		const informationInputsRender = target.getAttribute('informationinput');

		const removeDetails = function removeDetails(infoInput) {
			if (infoInput[infoInput.length - 1] === 'Description') {
				infoInput.pop();
			}
			return infoInput;
		};

		this.setState({
			[informationInputsRender]: removeDetails(
				this.state[informationInputsRender]
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
					handleRemoveButton={this.handleRemoveButton}
					informationState={this.state}
					addExtraDetails={this.handleAddDetailsButton}
					removeExtraDetails={this.handleRemoveDetailsButton}
				/>
				<ResumePreview informationState={this.state} />
			</div>
		);
	}
}
export default App;
