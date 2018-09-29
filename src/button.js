import React from 'react';

const buttonStyle = {
    backgroundColor: '#efefc3',
    boxShadow: '0 0 2px #787821'
}

const pressButtonStyle = {
    backgroundColor: '#f4f4d7',
    //backgroundColor: 'blue',
    boxShadow: 'inset 0 0 2px #787821'
}

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            padStyle: buttonStyle
        }
        this.buttonClick = this.buttonClick.bind(this);
        this.playSound = this.playSound.bind(this)

    }

    componentDidMount() {
        document.addEventListener('keydown', this.buttonClick);

    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.buttonClick);

    }
    buttonClick(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
        }
    }

    playSound() {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.setState({padStyle: pressButtonStyle});
        setTimeout(() => this.setState({padStyle: buttonStyle}), 500);
        this.props.updateDisplay(this.props.id);
    }

    render() {
        return (<div id={this.props.id} className="drum-pad" style={this.state.padStyle} onClick={this.playSound}>
            {this.props.keyTrigger}
            <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>

        </div>);
    }
}
