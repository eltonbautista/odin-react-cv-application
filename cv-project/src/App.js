import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import ResumePreview from './components/ResumePreview';
import Header from './components/Header';

class App extends Component {
	constructor() {
		super();

		this.state = {
			personalInformation: ['', '', '', '', '', '', ''],
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
				'imgFiler',
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

	// informationArrayFunction = function (arrayName) {
	// 	return [...arrayName[0]].map((input) => input.value);
	// };

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
			return stateInformationInput;
		};
		const target = e.target;
		const name = target.name;
		const informationRender = target.getAttribute('inforendering');
		console.log(informationRender);
		// if (name === 'workExperienceInformationInputs') {
		// 	// this.setState({
		// 	// 	workExperienceInformationInputs: pushInformation(
		// 	// 		this.state.workExperienceInformationInputs,
		// 	// 		this.originalState.workExperienceInformationInputs
		// 	// 	),
		// 	// 	workExperienceInformation: this.addButtonPreviewHandler(
		// 	// 		this.state.workExperienceInformation,
		// 	// 		this.originalState.workExperienceInformationInputs
		// 	// 	),
		// 	// });
		// } else if (name === 'educationInformationInputs') {
		// 	this.setState({
		// 		educationInformationInputs: pushInformation(
		// 			this.state.educationInformationInputs,
		// 			this.originalState.educationInformationInputs
		// 		),
		// 		educationInformation: this.addButtonPreviewHandler(
		// 			this.state.educationInformation,
		// 			this.originalState.educationInformationInputs
		// 		),
		// 	});
		// } else if (name === 'certificationInformationInputs') {
		// 	this.setState({
		// 		certificationInformationInputs: pushInformation(
		// 			this.state.certificationInformationInputs,
		// 			this.originalState.certificationInformationInputs
		// 		),
		// 		certificationInformation: this.addButtonPreviewHandler(
		// 			this.state.certificationInformation,
		// 			this.originalState.certificationInformationInputs
		// 		),
		// 	});
		// } else if (name === 'techStackInformationInputs') {
		// 	this.setState({
		// 		techStackInformationInputs: pushInformation(
		// 			this.state.techStackInformationInputs,
		// 			this.originalState.techStackInformationInputs
		// 		),
		// 		techStackInformation: this.addButtonPreviewHandler(
		// 			this.state.techStackInformation,
		// 			this.originalState.techStackInformationInputs
		// 		),
		// 	});
		// } else if (name === 'skillsInformationInputs') {
		// 	this.setState({
		// 		skillsInformationInputs: pushInformation(
		// 			this.state.skillsInformationInputs,
		// 			this.originalState.skillsInformationInputs
		// 		),
		// 		skillsInformation: this.addButtonPreviewHandler(
		// 			this.state.skillsInformation,
		// 			this.originalState.skillsInformationInputs
		// 		),
		// 	});
		// } else if (name === 'passionsInformationInputs') {
		// 	this.setState({
		// 		passionsInformationInputs: pushInformation(
		// 			this.state.passionsInformationInputs,
		// 			this.originalState.passionsInformationInputs
		// 		),
		// 		passionsInformation: this.addButtonPreviewHandler(
		// 			this.state.passionsInformation,
		// 			this.originalState.passionsInformationInputs
		// 		),
		// 	});
		// }
		// console.log(target.getAttribute('inforendering'));

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
		const name = target.name;
		const informationRender = target.getAttribute('inforendering');
		console.log(informationRender);
		console.log(name);

		// if (name === 'workExperienceInformationRemoveButton') {
		// 	this.setState({
		// 		workExperienceInformationInputs: removeInformation(
		// 			this.state.workExperienceInformationInputs,
		// 			this.originalState.workExperienceInformationInputs
		// 		),
		// 		workExperienceInformation: this.removeButtonPreviewHandler(
		// 			this.state.workExperienceInformation,
		// 			this.originalState.workExperienceInformationInputs
		// 		),
		// 	});
		// } else if (name === 'educationInformationRemoveButton') {
		// 	this.setState({
		// 		educationInformationInputs: removeInformation(
		// 			this.state.educationInformationInputs,
		// 			this.originalState.educationInformationInputs
		// 		),
		// 		educationInformation: this.removeButtonPreviewHandler(
		// 			this.state.educationInformation,
		// 			this.originalState.educationInformationInputs
		// 		),
		// 	});
		// } else if (name === 'certificationInformationRemoveButton') {
		// 	this.setState({
		// 		certificationInformationInputs: removeInformation(
		// 			this.state.certificationInformationInputs,
		// 			this.originalState.certificationInformationInputs
		// 		),
		// 		certificationInformation: this.removeButtonPreviewHandler(
		// 			this.state.certificationInformation,
		// 			this.originalState.certificationInformationInputs
		// 		),
		// 	});
		// } else if (name === 'techStackInformationRemoveButton') {
		// 	this.setState({
		// 		techStackInformationInputs: removeInformation(
		// 			this.state.techStackInformationInputs,
		// 			this.originalState.techStackInformationInputs
		// 		),
		// 		techStackInformation: this.removeButtonPreviewHandler(
		// 			this.state.techStackInformation,
		// 			this.originalState.techStackInformationInputs
		// 		),
		// 	});
		// } else if (name === 'skillsInformationRemoveButton') {
		// 	this.setState({
		// 		skillsInformationInputs: removeInformation(
		// 			this.state.skillsInformationInputs,
		// 			this.originalState.skillsInformationInputs
		// 		),
		// 		skillsInformation: this.removeButtonPreviewHandler(
		// 			this.state.skillsInformation,
		// 			this.originalState.skillsInformationInputs
		// 		),
		// 	});
		// } else if (name === 'passionsInformationRemoveButton') {
		// 	this.setState({
		// 		passionsInformationInputs: removeInformation(
		// 			this.state.passionsInformationInputs,
		// 			this.originalState.passionsInformationInputs
		// 		),
		// 		passionsInformation: this.removeButtonPreviewHandler(
		// 			this.state.passionsInformation,
		// 			this.originalState.passionsInformationInputs
		// 		),
		// 	});
		// }
		this.setState({
			[name]: removeInformation(this.state[name], this.originalState[name]),
			[informationRender]: this.removeButtonPreviewHandler(
				this.state[informationRender],
				this.originalState[name]
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
				/>
				<ResumePreview informationState={this.state} />
			</div>
		);
	}
}
export default App;
