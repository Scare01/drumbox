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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            padStyle: buttonStyle
        }
        this.buttonClick = this.buttonClick.bind(this)
    }

    buttonClick() {

        this.setState({padStyle: pressButtonStyle})
        setTimeout(() => {
            this.setState({padStyle: buttonStyle});
        }, 400);

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
