import React from 'react';
import ReactDOM from 'react-dom';

const buttonStyle = {
    backgroundColor: '#efefc3',
    boxShadow: '0 0 2px #787821'
}

const pressButtonStyle = {
    backgroundColor: '#f4f4d7',
    //backgroundColor: 'blue',
    boxShadow: 'inset 0 0 2px #787821'
}

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

    buttonClick(e) {
        if (e.keyCode === this.props.keyCode) {
            this.setState({padStyle: pressButtonStyle});
            setTimeout(() => {
                this.setState({padStyle: buttonStyle});
            }, 400);
        }
    }

    render() {
        return (<div id={this.props.keyTrigger} className="drum-pad" style={this.state.padStyle} onClick={this.buttonClick}>
            {this.props.keyTrigger}
        </div>);
    }
}

export default Button
