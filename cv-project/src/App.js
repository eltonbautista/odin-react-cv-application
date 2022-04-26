import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import ResumePreview from './components/ResumePreview';
import Header from './components/Header';

// function App() {
// 	return <div className='App'></div>;
// }

class App extends Component {
	render() {
		// eslint-disable-next-line prettier/prettier
		// const header = document.querySelector('#app > header');
		// console.log(header.title);

		return (
			<div id='app'>
				<Header title='CV Project App' />
				<Form />
				<ResumePreview />
			</div>
		);
	}
}
export default App;
