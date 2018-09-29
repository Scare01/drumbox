import React from 'react';
import ReactDOM from 'react-dom';

import Button from './button.js';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let padButton = this.props.padButtons.map((drumObj, i, padButtonArr) => {
            return (<Button id={padButtonArr[i].id} clip={padButtonArr[i].url} keyTrigger={padButtonArr[i].keyTrigger} keyCode={padButtonArr[i].keyCode} updateDisplay={this.props.updateDisplay}/>)
        });
        return (<div id="displayPad">
            {padButton}
        </div>)
    }
}

export default Buttons
