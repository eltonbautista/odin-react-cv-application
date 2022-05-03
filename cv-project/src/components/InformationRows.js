import React, { Component } from 'react';
import uniqid from 'uniqid';

class InformationRows extends Component {
	constructor(props) {
		super(props);

		// this.uniqid = uniqid;
		this.props = props;
		this.random = Math.floor(Math.random() * 100);
	}

	render() {
		const {
			information,
			value,
			updateResume,
			imgFiler,
			addBtn,
			removeBtn,
			addExtraInformation,
			classGrouping,
			stateKeysInformation,
			stateKeysInformationInputs,
			addExtraDetails,
			removeExtraDetails,
		} = this.props;
		let counter = 0;
		let { specialId } = this.props;

		// NEED TO FIX BUTTON INFORMATION AND INFORMATIONINPUT ATTRIBUTES
		const extraDetailsButton = function extraDetailsButton(info, infoInput) {
			return (
				<button
					type='button'
					onClick={addExtraDetails}
					information={info}
					informationinput={infoInput}
				>
					Add details
				</button>
			);
		};

		const removeDetailButton = function removeDetailButton(info, infoInput) {
			return (
				<button
					type='button'
					onClick={removeExtraDetails}
					information={info}
					informationinput={infoInput}
				>
					Remove details
				</button>
			);
		};

		// Can't use uniqid or any function as the value of my key because it causes re-rendering.
		// Unlike properId which uses "info" <- this is a prop which is static and doesn't cause re-rendering until the appropriate time
		const listOfInformation = information.map((info) => {
			let properId = info.toLowerCase().replaceAll(' ', '-') + '-input';
			const groupClassName =
				classGrouping.toLowerCase().replaceAll(' ', '-') + '-input';
			if (info === 'imgFiler') {
				return (
					<li key={properId}>
						<label>Upload image </label>
						<input type='file'></input>
					</li>
				);
			} else if (info === 'Description') {
				return (
					<li key={(specialId += counter)}>
						<textarea
							placeholder={info}
							onChange={updateResume}
							className={groupClassName}
							// id={properId}
						></textarea>
					</li>
				);
			}
			// counter += 1;
			return (
				<li key={specialId + properId + counter}>
					<input
						value={value[value.indexOf(info)]}
						type='text'
						placeholder={info}
						// className={properId}
						onChange={updateResume}
						className={(groupClassName, properId)}
					></input>
					{imgFiler}
				</li>
			);
		});

		const forIdentifying = function (str) {
			return (
				classGrouping[0].toLowerCase() +
				classGrouping.substring(1).replaceAll(' ', '') +
				str
			);
		};
		const name = forIdentifying('InformationInputs');
		const infoRendering = forIdentifying('Information');
		return (
			<form
				onSubmit={addExtraInformation}
				name={name}
				inforendering={infoRendering}
				info={information}
			>
				<ul className='ul-for-inputs'>{listOfInformation}</ul>
				<>{addBtn}</>
				<>{removeBtn}</>
				<>
					{name === 'workExperienceInformationInputs' &&
						extraDetailsButton(
							stateKeysInformation[0],
							stateKeysInformationInputs[0]
						)}
					{name === 'workExperienceInformationInputs' &&
						removeDetailButton(
							stateKeysInformation[0],
							stateKeysInformationInputs[0]
						)}
					{name === 'educationInformationInputs' &&
						extraDetailsButton(
							stateKeysInformation[1],
							stateKeysInformationInputs[1]
						)}
					{name === 'educationInformationInputs' &&
						removeDetailButton(
							stateKeysInformation[1],
							stateKeysInformationInputs[1]
						)}
				</>
			</form>
		);
	}
}

export default InformationRows;
