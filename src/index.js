import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Buttons from './buttons.js'

const buttons = [
    {
        keyCode: 81,
        keyTrigger: 'Q'
    }, {
        keyCode: 87,
        keyTrigger: 'W'
    }, {
        keyCode: 69,
        keyTrigger: 'E'
    }, {
        keyCode: 65,
        keyTrigger: 'A'
    }, {
        keyCode: 83,
        keyTrigger: 'S'
    }, {
        keyCode: 68,
        keyTrigger: 'D'
    }, {
        keyCode: 90,
        keyTrigger: 'Z'
    }, {
        keyCode: 88,
        keyTrigger: 'X'
    }, {
        keyCode: 67,
        keyTrigger: 'C'
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            padButtons: buttons
        }
    }

    render() {
        return (<div id="drum-machine">
            <Buttons padButtons={this.state.padButtons}/>
            <div id="controls"></div>
            <div id="copyright">RubyLupus</div>
        </div>)
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
