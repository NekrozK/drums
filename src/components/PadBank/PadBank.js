import React from 'react';
import DrumPad from '../DrumPad/DrumPad';
import './PadBank.css';

class PadBank extends React.Component {
    render() {
        const { power, volume, setDisplay, currentPadBank } = this.props;
        return (
            <div className="PadBank">
                {
                    power ? currentPadBank.map((drum, i) => {
                        return (
                            <DrumPad
                                id={ drum.id } audio={ drum.url }
                                keyTrigger={ drum.keyTrigger }
                                keyCode={ drum.keyCode }
                                key={ i } power={ power }
                                setDisplay={ setDisplay }
                                volume={ volume }
                            />
                        );
                    }) : currentPadBank.map((drum, i) => {
                        return (
                            <DrumPad
                                id={ drum.id }
                                audio={ `data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU2LjM2LjEwMAAAAAAAAAAAAAAA//OEAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAABIADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV6urq6urq6urq6urq6urq6urq6urq6urq6v////////////////////////////////8AAAAATGF2YzU2LjQxAAAAAAAAAAAAAAAAJAAAAAAAAAAAASDs90hvAAAAAAAAAAAAAAAAAAAA//MUZAAAAAGkAAAAAAAAA0gAAAAATEFN//MUZAMAAAGkAAAAAAAAA0gAAAAARTMu//MUZAYAAAGkAAAAAAAAA0gAAAAAOTku//MUZAkAAAGkAAAAAAAAA0gAAAAANVVV` }
                                keyTrigger={ drum.keyTrigger }
                                keyCode={ drum.keyCode }
                                key={ i } power={ power }
                                setDisplay={ setDisplay }
                                volume={ volume }
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default PadBank;