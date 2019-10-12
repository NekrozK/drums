import React from 'react';
import './Controls.css';

class Controls extends React.Component {
    render() {
        const { power, changePower, display, changePadBank, setVolumen, volumen } = this.props;
        return(
            <div className='Controls'>
                <div className='title'>
                    <h1>Drums</h1>
                    <img src='https://d33wubrfki0l68.cloudfront.net/e66392bc2941ad564b6956321e778f29073cf585/4190b/img/glyph-alternative.svg' alt='logo' />
                </div>
                <div className='switches'>
                    <div className="power-container">
                        <h2>Power</h2>
                        <label className="switch">
                            <input type="checkbox" onClick={ changePower } />
                            <span className="slider" />
                        </label>
                    </div>
                    {
                        power ?
                        <div>
                            <h2>Bank</h2>
                            <label className="switch">
                                <input type="checkbox" onClick={ changePadBank } />
                                <span className="slider bank" />
                            </label>
                        </div> :
                        <div className="switch" />
                    }
                </div>
                <h3>{ display }</h3>
                <input type="range" min="0" max="1" step="0.01" 
                value={ volumen } onChange={ setVolumen } />
            </div>
        );
    }
}

export default Controls;