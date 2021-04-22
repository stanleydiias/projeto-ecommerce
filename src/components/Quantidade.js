import React, { Component } from 'react';

class Quantidade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }


    render() {
        return (
            <div className="quantidade-input">
                <div class="btn-group inline" role="group" aria-label="Basic example">
                    <input type="button" class="button-default" id="click" onClick={this.IncrementItem} value="+" />
                    {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
                    <input type="button" class="button-default" id="click" onClick={this.DecreaseItem} value="-" />
                </div>
            </div>
        );

        /*<div className="quantidade-input">
                <button id="click" onClick={this.IncrementItem}>+</button>
                <div className="input">{this.state.show ? <h2>{this.state.clicks}</h2> : ''}</div>
                <button id="click" onClick={this.DecreaseItem}>-</button>
            </div> */
    }
}

export default Quantidade;