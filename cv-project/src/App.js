import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
// function App() {
// 	return <div className='App'></div>;
// }

class App extends Component {
	render() {
		// eslint-disable-next-line prettier/prettier
		return (
			<div className='App'>
				<Form />
			</div>
		);
	}
}
export default App;
