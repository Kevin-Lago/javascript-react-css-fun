import React, { Component } from 'react';
import './SciFiScreen.css';

export default class SciFiScreen extends Component {
    render() {
        return (
            <div className='sci-fi-screen-wrapper flex-center'>
                <div className='sci-fi-screen' style={{ "--index": "0" }}>

                </div>
                <div className='sci-fi-screen' style={{ "--index": "1" }}>
                    <div class="container flex-center">
                        <div class="stack" style={{ "--stacks": "3" }}>
                            <span style={{ "--index": "0" }}>{this.props.title}</span>
                            <span style={{ "--index": "1" }}>{this.props.title}</span>
                            <span style={{ "--index": "2" }}>{this.props.title}</span>
                        </div>
                    </div>
                    <div className='sci-fi-screen-overlay'>

                    </div>
                </div>
                <div className='sci-fi-screen' style={{ "--index": "2" }}>

                </div>
            </div>
        )
    }
}