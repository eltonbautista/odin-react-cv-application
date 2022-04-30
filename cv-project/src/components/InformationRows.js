import React, { Component } from 'react';
import uniqid from 'uniqid';

class InformationRows extends Component {
	constructor(props) {
		super(props);

		this.uniqid = uniqid;
		this.props = props;
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
		} = this.props;
		let counter = 0;

		const extraDetailsButton = function extraDetailsButton() {
			return <button type='button'>Add details</button>;
		};

		const removeDetailButton = function removeDetailButton() {
			return <button type='button'>Remove details</button>;
		};

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
			} else if (
				info === 'Description' &&
				groupClassName === 'personal-information-input'
			) {
				return (
					<li key={properId + counter}>
						<textarea
							placeholder={info}
							onChange={updateResume}
							className={groupClassName}
							id={properId}
						></textarea>
					</li>
				);
			} else if (
				(info === 'Description' &&
					groupClassName === 'work-experience-input') ||
				(info === 'Description' && groupClassName === 'education-input')
			) {
				return (
					<li key={properId + counter}>
						<textarea
							placeholder={info}
							onChange={updateResume}
							className={groupClassName}
							id={properId}
						></textarea>
						{extraDetailsButton()}
						{removeDetailButton()}
					</li>
				);
			}
			counter += 1;
			return (
				<li key={properId + counter}>
					<input
						value={value[value.indexOf(info)]}
						type='text'
						placeholder={info}
						id={properId}
						onChange={updateResume}
						className={groupClassName}
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
			</form>
		);
	}
}

export default InformationRows;
