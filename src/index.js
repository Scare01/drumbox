import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const buttonStyle = {
    backgroundColor: '#cece4b',
    boxShadow: '0 0 2 px #787821'
}

const pressButtonStyle = {
    //backgroundColor: 'radial-gradient(#fafaeb, #cece4b)',
    backgroundColor: 'blue',
    boxShadow: 'inset 0 0 2 px #787821'
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
        }, 200);

    }

    render() {
        return (<div id="drum-machine">
            <div id="display">
                <div className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>Q</div>
                <div className="drum-pad" style={this.state.padStyle}>W</div>
                <div className="drum-pad" style={this.state.padStyle}>E</div>
                <div className="drum-pad" style={this.state.padStyle}>A</div>
                <div className="drum-pad" style={this.state.padStyle}>S</div>
                <div className="drum-pad" style={this.state.padStyle}>D</div>
                <div className="drum-pad" style={this.state.padStyle}>Z</div>
                <div className="drum-pad" style={this.state.padStyle}>X</div>
                <div className="drum-pad" style={this.state.padStyle}>C</div>
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
