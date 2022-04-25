import React, { Component } from 'react';

class ResumePreviewRows extends Component {
	constructor({ information }) {
		super();

        this.information = information;
	}

	render() {
        const information = this.information;

        const listOfInformation = information.map((info) => {
            const properId = info.toLowerCase().replaceAll(' ', '-') + '-preview';

            return(
                <li key={properId}>
                    <div>{info}</div>
                </li>
            )
        })

		return <ul>
            {listOfInformation}
        </ul>;
	}
}
}