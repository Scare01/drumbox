import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="drum-machine">
            <div id="display">
                <div className="drum-pad"></div>
                <div className="drum-pad"></div>
                <div className="drum-pad"></div>
                <div className="drum-pad"></div>
                <div className="drum-pad"></div>
                <div className="drum-pad"></div>
                <div className="drum-pad"></div>
                <div className="drum-pad"></div>
                <div className="drum-pad"></div>
            </div>
            <div id="controls">
                <div className="controlsButton"></div>
                <div className="controlsButton"></div>
            </div>
        </div>)
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
