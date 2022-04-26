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
	}

	updateState() {
		this.setState({ personalInformation: ['hello'] });
		console.log(this.state);
	}

	render() {
		// eslint-disable-next-line prettier/prettier
		// const header = document.querySelector('#app > header');
		// console.log(header.title);

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
