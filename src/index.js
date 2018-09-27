import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const buttonStyle = {
    backgroundColor: '#efefc3',
    boxShadow: '0 0 2px #787821'
}

const pressButtonStyle = {
    backgroundColor: '#f4f4d7',
    //backgroundColor: 'blue',
    boxShadow: 'inset 0 0 2px #787821'
}

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
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            padStyle: buttonStyle
        }
        this.buttonClick = this.buttonClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.buttonClick);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.buttonClick);
    }

    buttonClick() {
        this.setState({padStyle: pressButtonStyle})
        setTimeout(() => {
            this.setState({padStyle: buttonStyle});
        }, 400);
    }

}
class Buttons extends React.Component {
    contructor(props) {
        super(props);
    }

}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.buttonClick = this.buttonClick.bind(this)
    }

    render() {
        return (<div id="drum-machine">
            <div id="display">
                <div className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>Q</div>
                <div className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>W</div>
                <div className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>E</div>
                <div className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>A</div>
                <div className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>S</div>
                <div className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>D</div>
                <div className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>Z</div>
                <div className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>X</div>
                <div className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>C</div>
            </div>
            <div id="controls">
                <div className="controlsButton"></div>
                <div className="controlsButton"></div>
            </div>
            <div id="copyright">RubyLupus</div>
        </div>)
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
