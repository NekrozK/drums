import React from 'react';
import PadBank from './components/PadBank/PadBank';
import Controls from './components/Controls/Controls'
import './App.css';

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const bankTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            power: false,
            display: String.fromCharCode(160),
            currentPadBank: bankOne,
            volume: 0.5
        }
    }

    changePower = () => {
        this.setState({
            power: !this.state.power,
            display: String.fromCharCode(160)
        })
    }

    clearDisplay = () => {
        this.setState({ display: String.fromCharCode(160) })
    }

    setDisplay = (display) => {
        this.setState({ display })
    }

    changePadBank = () => {
        if (this.state.power) {
            this.state.currentPadBank === bankOne
            ? this.setState({
                currentPadBank: bankTwo,
                display: 'Smooth Piano Kit'
            })
            : this.setState({
                currentPadBank: bankOne,
                display: 'Heater Kit'
            })
            setTimeout(() => this.clearDisplay(), 3000);
        }
    }
    
    setVolumen = (e) => {
        if (this.state.power) {
            this.setState({
                volume: e.target.value,
                display: 'Volumen: ' + Math.round(e.target.value * 100)
            });
            setTimeout(() => this.clearDisplay(), 5000);
        }
    }

    render() {
        const { power, volume, currentPadBank, display } = this.state;
        return (
            <div className='App'>
                <PadBank 
                    power={ power } 
                    setDisplay={ this.setDisplay }
                    volume={ volume } 
                    currentPadBank={ currentPadBank }
                />
                <Controls 
                    power={ power }
                    changePower={ this.changePower } 
                    display={ display }
                    changePadBank={ this.changePadBank } 
                    setVolumen={ this.setVolumen }
                    volume={ volume }
                />
            </div>
        )
    }
}

export default App;