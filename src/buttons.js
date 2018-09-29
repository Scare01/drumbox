import React from 'react';

import Button from './button.js';

export default class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let padButton = this.props.padButtons.map((drumObj, i, padButtonArr) => {
            return (<Button id={padButtonArr[i].id} key={padButtonArr[i].id} clip={padButtonArr[i].url} keyTrigger={padButtonArr[i].keyTrigger} keyCode={padButtonArr[i].keyCode} updateDisplay={this.props.updateDisplay}/>)
        });
        return (<div id="displayPad">
            {padButton}
        </div>)
    }
}
