import React from 'react';
import './DrumPad.css';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {}
        }
    }

    pressedStyle = {
        backgroundColor: '#222',
        color: '#eee'
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onPadPress);
    }

    onPadPress = (event) => {
        if (event.keyCode === this.props.keyCode)  this.playSound();
    }

    pressedPad = () => {
        if (this.props.power) {
            this.setState({ style: this.pressedStyle });
            setTimeout(() => {
                this.setState({ style: {} })
            }, 700);
        }
    }

    playSound = () => {
        const { power, keyCode, volume, setDisplay, id } = this.props;
        if (power) {
            const sound = document.getElementById(keyCode);
            sound.currentTime = 0;
            sound.volume = volume;
            sound.play()
            this.pressedPad();
            setDisplay(id.replace(/-/g, ''));
        }
    }

    render() {
        const { audio, keyCode, keyTrigger } = this.props;
        return (
            <div onClick={ this.playSound } style={ this.state.style } className='DrumPad'>
                <audio id={ keyCode } src={ audio } />
                { keyTrigger }
            </div>
        );
    }
}

export default DrumPad;